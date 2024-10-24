import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/_layout/dashboard/invoices/$id')({
  component: () => <div>Hello /_layout/dashboard/invoices/$id!</div>,
})
