import React from 'react'
import { renderWithrovider } from '@/lib/testing'
import Provider from '@/components/Provider'

describe('Providers', () => {
  it('should render children', () => {
    const { getByText } = renderWithrovider(<Provider>children</Provider>)
    expect(getByText('children')).toBeInTheDocument()
  })
})
