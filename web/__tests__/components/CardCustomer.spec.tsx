import React from 'react'
import CardCustomer from '@/components/CardCustomer'
import { renderWithrovider } from '@/lib/testing'
import { returnCustomerSuccess } from '../store/sagas/customer.saga.spec'

describe('CustomerStatus Component', () => {
  it('renders CardCustomer component with customer data', () => {
    const costumer = returnCustomerSuccess.data.customer

    const { getByTestId, getByText, getByRole } = renderWithrovider(
      <CardCustomer customer={costumer} />,
    )

    expect(getByTestId(`card-customer-${costumer.id}`)).toBeInTheDocument()
    expect(getByText(costumer.name)).toBeInTheDocument()
    expect(getByText(costumer.email)).toBeInTheDocument()
    expect(getByText(costumer.document)).toBeInTheDocument()
    expect(getByText('(11) 99999-9999')).toBeInTheDocument()
    expect(getByText(costumer.status)).toBeInTheDocument()
    expect(getByRole('link', { name: 'Editar' })).toBeInTheDocument()
  })
})
