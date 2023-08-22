import React from 'react'
import { renderWithProvider } from '@/lib/testing'
import { fireEvent } from '@testing-library/react'
import Input from '@/components/ui/Input'

describe('Input Component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Input />)
  })

  it('render with mask', () => {
    const { getByTestId } = renderWithProvider(<Input mask="999.999.999-99" />)
    const maskedInput = getByTestId('masked-input')
    expect(maskedInput).toBeInTheDocument()
  })

  it('expect render correct masked text', () => {
    const { getByTestId } = renderWithProvider(<Input mask="999.999.999-99" />)
    const maskedInput = getByTestId('masked-input') as HTMLInputElement
    fireEvent.change(maskedInput, { target: { value: '11111111111' } })
    expect(maskedInput.value).toEqual('111.111.111-11')
  })

  it('renders error message', () => {
    const { findByText } = renderWithProvider(<Input error="error" />)
    expect(findByText('error')).toBeDefined()
  })
})
