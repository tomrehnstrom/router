import { createFileRoute } from '@tomrehnstrom/react-router'

import importedComponent, { importedLoader } from '../shared/imported'

export const Route = createFileRoute('/')({
  component: importedComponent,
  loader: importedLoader,
})
