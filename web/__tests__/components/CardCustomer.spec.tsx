import React from 'react'
import CardCustomer from '@/components/CardCustomer'
import { renderWithProvider } from '@/lib/testing'
import { returnCustomerSuccess } from '../store/sagas/customer.saga.spec'
import { cpfToView } from '@/lib/utils'

describe('CustomerStatus Component', () => {
  it('renders CardCustomer component with customer data', () => {
    const costumer = returnCustomerSuccess.data.customer

    const { getByTestId, getByText, getByRole } = renderWithProvider(
      <CardCustomer customer={costumer} />,
    )

    expect(getByTestId(`card-customer-${costumer.id}`)).toBeInTheDocument()
    expect(getByText(costumer.name)).toBeInTheDocument()
    expect(getByText(costumer.email)).toBeInTheDocument()
    expect(getByText(cpfToView(costumer.document))).toBeInTheDocument()
    expect(getByText('(11) 99999-9999')).toBeInTheDocument()
    expect(getByText(costumer.status)).toBeInTheDocument()
    expect(getByRole('link', { name: 'Editar' })).toBeInTheDocument()
  })
})
