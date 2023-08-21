import React from 'react'
import { renderWithProvider } from '@/lib/testing'
import { fireEvent } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button Component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Button>Click me</Button>)
  })

  it('renders children correctly', () => {
    const { getByText } = renderWithProvider(<Button>Click me</Button>)
    expect(getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn()
    const { getByText } = renderWithProvider(
      <Button onClick={onClickMock}>Click me</Button>,
    )
    fireEvent.click(getByText('Click me'))
    expect(onClickMock).toHaveBeenCalled()
  })
})
