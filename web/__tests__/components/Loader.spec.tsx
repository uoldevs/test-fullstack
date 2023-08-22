import React from 'react'
import { renderWithProvider } from '@/lib/testing'
import Loader from '@/components/Loader'

describe('Loader', () => {
  it('renders the loader component with the loading message', () => {
    const { getByTestId, getByText } = renderWithProvider(<Loader />)

    const loader = getByTestId('loader')
    const loadingMessage = getByText('Carregando...')

    expect(loader).toBeInTheDocument()
    expect(loader).toHaveClass('animate-spin')
    expect(loadingMessage).toBeInTheDocument()
  })
})
