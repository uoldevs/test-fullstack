import React from 'react'
import { renderWithrovider } from '@/lib/testing'
import CreateCustomer from '@/app/dashboard/create/page'

describe('CreateCustomer Component', () => {
  it('renders finding main and customer form', () => {
    const { getByTestId } = renderWithrovider(<CreateCustomer />)
    expect(getByTestId('finding-main')).toBeInTheDocument()
    expect(getByTestId('customer-form')).toBeInTheDocument()
  })
})
