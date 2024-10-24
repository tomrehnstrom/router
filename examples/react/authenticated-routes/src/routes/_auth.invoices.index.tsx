import * as React from 'react'
import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/_auth/invoices/')({
  component: () => <div>Select an invoice to view it!</div>,
})
