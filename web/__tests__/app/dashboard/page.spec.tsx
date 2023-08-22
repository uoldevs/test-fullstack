import React from 'react'
import { renderWithProvider } from '@/lib/testing'
import Dashboard from '@/app/dashboard/page'
import { returnCustomersSuccess } from '@/__tests__/store/sagas/customer.saga.spec'

describe('Dashboard Component', () => {
  it('renders FindingMain and ListCostumers', () => {
    const { getByTestId } = renderWithProvider(<Dashboard />)
    expect(getByTestId('finding-main')).toBeInTheDocument()
    expect(getByTestId('list-costumers')).toBeInTheDocument()
  })
})
