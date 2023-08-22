import React from 'react'
import { renderWithProvider } from '@/lib/testing'
import Link from '@/components/ui/Link'

describe('Link Component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Link href={'/'} />)
  })

  it('render children correctly', () => {
    const { getByText } = renderWithProvider(<Link href={'/'}>click-me</Link>)
    expect(getByText('click-me')).toBeInTheDocument()
  })
})
