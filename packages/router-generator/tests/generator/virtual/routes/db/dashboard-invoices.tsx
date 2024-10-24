import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/_layout/dashboard/invoices')({
  component: () => <div>Hello !</div>,
})
