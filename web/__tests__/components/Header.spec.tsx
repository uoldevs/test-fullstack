import React from 'react'
import { renderWithrovider } from '@/lib/testing'
import Header from '@/components/Header'

describe('Header', () => {
  it('renders header with logo and link to dashboard', () => {
    const { getByTestId, getByLabelText } = renderWithrovider(<Header />)
    expect(getByLabelText('logo')).toBeInTheDocument()
  })
})
