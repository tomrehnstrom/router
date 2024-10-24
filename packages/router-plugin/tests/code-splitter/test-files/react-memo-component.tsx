import React from 'react'
import { createFileRoute } from '@tomrehnstrom/react-router'

import { importedLoader } from '../shared/imported'

export const Route = createFileRoute('/')({
  component: React.memo(Component),
  loader: importedLoader,
})

function Component() {
  return <div>Component</div>
}
