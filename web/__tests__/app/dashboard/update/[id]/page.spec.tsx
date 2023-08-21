import React from 'react'
import { renderWithrovider } from '@/lib/testing'
import UpdateCustomer from '@/app/dashboard/update/[id]/page'
import { returnCustomerSuccess } from '@/__tests__/store/sagas/customer.saga.spec'

describe('UpdateCustomer Component', () => {
  it('renders without crashing', () => {
    it('renders finding main and customer form', () => {
      const { getByTestId } = renderWithrovider(
        <UpdateCustomer params={{ id: '1' }} />,
        { ...returnCustomerSuccess.data },
      )

      expect(getByTestId('finding-main')).toBeInTheDocument()
      expect(getByTestId('customer-form')).toBeInTheDocument()
    })
  })
})
