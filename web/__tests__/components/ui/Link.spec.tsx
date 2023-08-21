import React from 'react'
import { renderWithrovider } from '@/lib/testing'
import Link from '@/components/ui/Link'

describe('Link Component', () => {
  it('renders without crashing', () => {
    renderWithrovider(<Link href={'/'} />)
  })

  it('render children correctly', () => {
    const { getByText } = renderWithrovider(<Link href={'/'}>click-me</Link>)
    expect(getByText('click-me')).toBeInTheDocument()
  })
})
