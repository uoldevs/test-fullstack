import React from 'react'
import { renderWithProvider } from '@/lib/testing'
import UpdateCustomer from '@/app/dashboard/update/[id]/page'
import { returnCustomerSuccess } from '@/__tests__/store/sagas/customer.saga.spec'

describe('UpdateCustomer Component', () => {
  it('renders finding main and customer form', () => {
    const { getByTestId } = renderWithProvider(
      <UpdateCustomer params={{ id: '1' }} />,
      { ...returnCustomerSuccess.data },
    )

    expect(getByTestId('finding-main')).toBeInTheDocument()
    expect(getByTestId('customer-form')).toBeInTheDocument()
  })
})
