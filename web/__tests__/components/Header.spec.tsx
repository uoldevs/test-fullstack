import React from 'react'
import { renderWithProvider } from '@/lib/testing'
import Header from '@/components/Header'

describe('Header', () => {
  it('renders header with logo and link to dashboard', () => {
    const { getByTestId, getByLabelText } = renderWithProvider(<Header />)
    expect(getByLabelText('logo')).toBeInTheDocument()
  })
})
