import * as React from 'react'

export const importedComponent = () => {
  return <div>I am imported</div>
}

export const importedLoader = () => {
  return {
    randomNumber: Math.random(),
  }
}

export default function ImportedDefaultComponent() {
  return <div>Default imported</div>
}
