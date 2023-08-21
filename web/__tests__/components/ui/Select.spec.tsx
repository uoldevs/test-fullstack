import React from 'react'
import { renderWithProvider } from '@/lib/testing'
import Select from '@/components/ui/Select'

describe('Select Component', () => {
  const options = [
    { key: '1', name: 'ronaldinho' },
    { key: '2', name: 'ronaldo' },
  ]

  it('renders without crashing', () => {
    renderWithProvider(<Select options={options} />)
  })

  it('renders all options', () => {
    const { getByTestId } = renderWithProvider(<Select options={options} />)
    options.forEach((option) => {
      expect(getByTestId(`option-${option.key}`)).toBeInTheDocument()
    })
  })
})
