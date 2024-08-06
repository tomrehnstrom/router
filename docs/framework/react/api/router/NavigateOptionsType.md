---
id: NavigateOptionsType
title: NavigateOptions type
---

The `NavigateOptions` type is used to describe the options that can be used when describing a navigation action in TanStack Router.

```tsx
type NavigateOptions = ToOptions & {
  replace?: boolean
  resetScroll?: boolean
  ignoreBlocker?: boolean
}
```

- [`ToOptions`](./ToOptionsType.md)
