import React from 'react'
import { renderWithrovider } from '@/lib/testing'
import CustomerForm from '@/components/CustomerForm'

jest.mock('react-hot-toast', () => ({
  success: jest.fn(),
  error: jest.fn(),
}))

describe('CustomerForm', () => {
  it('renders form inputs and buttons correctly', () => {
    const { getByPlaceholderText, getByText } = renderWithrovider(
      <CustomerForm id="1" />,
    )

    expect(getByPlaceholderText('Nome')).toBeInTheDocument()
    expect(getByPlaceholderText('Email')).toBeInTheDocument()
    expect(getByPlaceholderText('Documento')).toBeInTheDocument()
    expect(getByPlaceholderText('Telefone')).toBeInTheDocument()
    expect(getByPlaceholderText('Status')).toBeInTheDocument()
    expect(getByText('Editar')).toBeInTheDocument()
    expect(getByText('Voltar')).toBeInTheDocument()
  })
})
