import React from 'react'
import ListCustomers from '@/components/ListCustomers'
import { renderWithProvider } from '@/lib/testing'
import { returnCustomersSuccess } from '@/__tests__/store/sagas/customer.saga.spec'
import page from '@/app/dashboard/page'

describe('ListCustomers', () => {
  it('renders all customers', () => {
    const { getByTestId } = renderWithProvider(<ListCustomers />, {
      customer: { ...returnCustomersSuccess.data },
    })

    returnCustomersSuccess.data.customers.forEach((customer) => {
      expect(getByTestId(`card-customer-${customer.id}`)).toBeInTheDocument()
    })
  })

  it('renders message "Nenhum cliente cadastrado!" when not have customers', () => {
    const { getByTestId } = renderWithProvider(<ListCustomers />, {
      customer: { customers: [], page: 1, quantity: 10, total: 2 },
    })
  })

  it('render current page, next and prev button', () => {
    const { getByTestId, getByText } = renderWithProvider(<ListCustomers />, {
      customer: { ...returnCustomersSuccess.data },
    })

    expect(getByText(returnCustomersSuccess.data.page)).toBeInTheDocument()
    expect(getByTestId('prev-button')).toBeInTheDocument()
    expect(getByTestId('next-button')).toBeInTheDocument()
  })

  it('render text info customers list', () => {
    const { getByText } = renderWithProvider(<ListCustomers />, {
      customer: { ...returnCustomersSuccess.data },
    })

    const info = getByText(`Exibindo cliente de 1 a 2 de um total de 2`)
    expect(info).toBeInTheDocument()
  })
})
