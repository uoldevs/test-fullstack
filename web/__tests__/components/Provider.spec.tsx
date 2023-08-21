import React from 'react'
import { renderWithProvider } from '@/lib/testing'
import Provider from '@/components/Provider'

describe('Providers', () => {
  it('should render children', () => {
    const { getByText } = renderWithProvider(<Provider>children</Provider>)
    expect(getByText('children')).toBeInTheDocument()
  })
})
