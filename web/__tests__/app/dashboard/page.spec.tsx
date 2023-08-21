import React from 'react'
import { renderWithrovider } from '@/lib/testing'
import Dashboard from '@/app/dashboard/page'
import { returnCustomersSuccess } from '@/__tests__/store/sagas/customer.saga.spec'

describe('Dashboard Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = renderWithrovider(<Dashboard />, {
      ...returnCustomersSuccess.data,
    })

    expect(getByTestId('finding-main')).toBeInTheDocument()
    expect(getByTestId('list-costumers')).toBeInTheDocument()
  })
})
