import * as React from 'react'
import {
  ScriptOnce,
  TSR_DEFERRED_PROMISE,
  createControlledPromise,
  defer,
  isPlainArray,
  isPlainObject,
  pick,
  useRouter,
} from '@tanstack/react-router'
import jsesc from 'jsesc'
import invariant from 'tiny-invariant'
import type {
  AnyRouteMatch,
  AnyRouter,
  ExtractedEntry,
  ExtractedPromise,
  ExtractedStream,
  StreamState,
} from '@tanstack/react-router'

export function serializeLoaderData(
  dataType: '__beforeLoadContext' | 'loaderData',
  data: any,
  ctx: {
    match: AnyRouteMatch
    router: AnyRouter
  },
) {
  if (!ctx.router.isServer) {
    return data
  }

  ;(ctx.match as any).extracted = (ctx.match as any).extracted || []

  const extracted = (ctx.match as any).extracted

  const replacedLoaderData = replaceBy(data, (value, path) => {
    const type =
      value instanceof ReadableStream
        ? 'stream'
        : value instanceof Promise
          ? 'promise'
          : undefined

    // If it's a stream, we need to tee it so we can read it multiple times
    if (type === 'stream') {
      const [copy1, copy2] = value.tee()
      const entry: ExtractedStream = {
        dataType,
        type,
        path,
        id: extracted.length,
        matchIndex: ctx.match.index,
        streamState: createStreamState({ stream: copy2 }),
      }

      extracted.push(entry)
      return copy1
    } else if (type === 'promise') {
      defer(value)
      const entry: ExtractedPromise = {
        dataType,
        type,
        path,
        id: extracted.length,
        matchIndex: ctx.match.index,
        promiseState: value,
      }
      extracted.push(entry)
    }

    return value
  })

  return replacedLoaderData
}

// Right after hydration and before the first render, we need to rehydrate each match
// This includes rehydrating the loaderData and also using the beforeLoadContext
// to reconstruct any context that was serialized on the server
export function afterHydrate({ router }: { router: AnyRouter }) {
  router.state.matches.forEach((match) => {
    const route = router.looseRoutesById[match.routeId]!
    const dMatch = window.__TSR__?.matches[match.index]
    if (dMatch) {
      const parentMatch = router.state.matches[match.index - 1]
      const parentContext = parentMatch?.context ?? router.options.context ?? {}
      if (dMatch.__beforeLoadContext) {
        match.__beforeLoadContext = router.options.transformer.parse(
          dMatch.__beforeLoadContext,
        ) as any

        match.context = {
          ...parentContext,
          ...match.context,
          ...match.__beforeLoadContext,
        }
      }

      if (dMatch.loaderData) {
        match.loaderData = router.options.transformer.parse(dMatch.loaderData)
      }

      const extracted = dMatch.extracted

      if (extracted) {
        Object.entries(extracted).forEach(([_, ex]: any) => {
          deepMutableSetByPath(match, ['loaderData', ...ex.path], ex.value)
        })
      }
    }

    const headFnContent = route.options.head?.({
      matches: router.state.matches,
      match,
      params: match.params,
      loaderData: match.loaderData,
    })

    Object.assign(match, {
      meta: headFnContent?.meta,
      links: headFnContent?.links,
      scripts: headFnContent?.scripts,
    })
  })
}

export function AfterEachMatch(props: { match: any; matchIndex: number }) {
  const router = useRouter()

  const fullMatch = router.state.matches[props.matchIndex]!

  if (!router.isServer) {
    return null
  }

  const extracted = (fullMatch as any).extracted as
    | undefined
    | Array<ExtractedEntry>

  const [serializedBeforeLoadData, serializedLoaderData] = (
    ['__beforeLoadContext', 'loaderData'] as const
  ).map((dataType) => {
    return extracted
      ? extracted.reduce(
          (acc: any, entry: ExtractedEntry) => {
            if (entry.dataType !== dataType) {
              return deepImmutableSetByPath(
                acc,
                ['temp', ...entry.path],
                undefined,
              )
            }
            return acc
          },
          { temp: fullMatch[dataType] },
        ).temp
      : fullMatch[dataType]
  })

  if (
    serializedBeforeLoadData !== undefined ||
    serializedLoaderData !== undefined ||
    extracted?.length
  ) {
    const initCode = `__TSR__.initMatch(${jsesc(
      {
        index: props.matchIndex,
        __beforeLoadContext: router.options.transformer.stringify(
          serializedBeforeLoadData,
        ),
        loaderData: router.options.transformer.stringify(serializedLoaderData),
        extracted: extracted
          ? Object.fromEntries(
              extracted.map((entry) => {
                return [entry.id, pick(entry, ['type', 'path'])]
              }),
            )
          : {},
      },
      {
        isScriptContext: true,
        wrap: true,
        json: true,
      },
    )})`

    return (
      <>
        <ScriptOnce children={initCode} />
        {extracted
          ? extracted.map((d) => {
              if (d.type === 'stream') {
                return <DehydrateStream key={d.id} entry={d} />
              }

              return <DehydratePromise key={d.id} entry={d} />
            })
          : null}
      </>
    )
  }

  return null
}

export function replaceBy<T>(
  obj: T,
  cb: (value: any, path: Array<string>) => any,
  path: Array<string> = [],
): T {
  if (isPlainArray(obj)) {
    return obj.map((value, i) => replaceBy(value, cb, [...path, `${i}`])) as any
  }

  if (isPlainObject(obj)) {
    // Do not allow objects with illegal
    const newObj: any = {}

    for (const key in obj) {
      newObj[key] = replaceBy(obj[key], cb, [...path, key])
    }

    return newObj
  }

  // // Detect classes, functions, and other non-serializable objects
  // // and return undefined. Exclude some known types that are serializable
  // if (
  //   typeof obj === 'function' ||
  //   (typeof obj === 'object' &&
  //     ![Object, Promise, ReadableStream].includes((obj as any)?.constructor))
  // ) {
  //   console.info(obj)
  //   warning(false, `Non-serializable value ☝️ found at ${path.join('.')}`)
  //   return undefined as any
  // }

  const newObj = cb(obj, path)

  if (newObj !== obj) {
    return newObj
  }

  return obj
}

function DehydratePromise({ entry }: { entry: ExtractedPromise }) {
  return (
    <div className="tsr-once">
      <React.Suspense fallback={null}>
        <InnerDehydratePromise entry={entry} />
      </React.Suspense>
    </div>
  )
}

function InnerDehydratePromise({ entry }: { entry: ExtractedPromise }) {
  const router = useRouter()
  if (entry.promiseState[TSR_DEFERRED_PROMISE].status === 'pending') {
    throw entry.promiseState
  }

  const code = `__TSR__.resolvePromise(${jsesc(
    { ...entry, value: entry.promiseState[TSR_DEFERRED_PROMISE] },
    {
      isScriptContext: true,
      wrap: true,
      json: true,
    },
  )})`

  router.injectScript(code)

  return <></>
}

function DehydrateStream({ entry }: { entry: ExtractedStream }) {
  invariant(entry.streamState, 'StreamState should be defined')
  const router = useRouter()

  return (
    <StreamChunks
      streamState={entry.streamState}
      children={(chunk) => {
        const code = chunk
          ? `__TSR__.matches[${entry.matchIndex}].extracted[${entry.id}].value.controller.enqueue(new TextEncoder().encode(${jsesc(
              chunk.toString(),
              {
                isScriptContext: true,
                wrap: true,
                json: true,
              },
            )}))`
          : `__TSR__.matches[${entry.matchIndex}].extracted[${entry.id}].value.controller.close()`

        router.injectScript(code)

        return <></>
      }}
    />
  )
}

// Readable stream with state is a stream that has a promise that resolves to the next chunk
function createStreamState({
  stream,
}: {
  stream: ReadableStream
}): StreamState {
  const streamState: StreamState = {
    promises: [],
  }

  const reader = stream.getReader()

  const read = (index: number): any => {
    streamState.promises[index] = createControlledPromise()

    return reader.read().then(({ done, value }) => {
      if (done) {
        streamState.promises[index]!.resolve(null)
        reader.releaseLock()
        return
      }

      streamState.promises[index]!.resolve(value)

      return read(index + 1)
    })
  }

  read(0).catch((err: any) => {
    console.error('stream read error', err)
  })

  return streamState
}

function StreamChunks({
  streamState,
  children,
  __index = 0,
}: {
  streamState: StreamState
  children: (chunk: string | null) => React.JSX.Element
  __index?: number
}) {
  const promise = streamState.promises[__index]

  if (!promise) {
    return null
  }

  if (promise.status === 'pending') {
    throw promise
  }

  const chunk = promise.value!

  return (
    <>
      {children(chunk)}
      <div className="tsr-once">
        <React.Suspense fallback={null}>
          <StreamChunks
            streamState={streamState}
            __index={__index + 1}
            children={children}
          />
        </React.Suspense>
      </div>
    </>
  )
}

function deepImmutableSetByPath<T>(obj: T, path: Array<string>, value: any): T {
  // immutable set by path retaining array and object references
  if (path.length === 0) {
    return value
  }

  const [key, ...rest] = path

  if (Array.isArray(obj)) {
    return obj.map((item, i) => {
      if (i === Number(key)) {
        return deepImmutableSetByPath(item, rest, value)
      }
      return item
    }) as T
  }

  if (isPlainObject(obj)) {
    return {
      ...obj,
      [key!]: deepImmutableSetByPath((obj as any)[key!], rest, value),
    }
  }

  return obj
}

function deepMutableSetByPath<T>(obj: T, path: Array<string>, value: any) {
  // mutable set by path retaining array and object references
  if (path.length === 1) {
    ;(obj as any)[path[0]!] = value
  }

  const [key, ...rest] = path

  if (Array.isArray(obj)) {
    deepMutableSetByPath(obj[Number(key)], rest, value)
  } else if (isPlainObject(obj)) {
    deepMutableSetByPath((obj as any)[key!], rest, value)
  }
}
