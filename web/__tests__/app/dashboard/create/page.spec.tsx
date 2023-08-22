import React from 'react'
import { renderWithProvider } from '@/lib/testing'
import CreateCustomer from '@/app/dashboard/create/page'

describe('CreateCustomer Component', () => {
  it('renders finding main and customer form', () => {
    const { getByTestId } = renderWithProvider(<CreateCustomer />)
    expect(getByTestId('finding-main')).toBeInTheDocument()
    expect(getByTestId('customer-form')).toBeInTheDocument()
  })
})
