import React from 'react'
import { renderWithrovider } from '@/lib/testing'
import DashboardLayout from '@/app/dashboard/layout'

describe('RootLayout', () => {
  it('renders children header and finding', () => {
    const { getByText, getByTestId } = renderWithrovider(
      <DashboardLayout>render</DashboardLayout>,
    )

    expect(getByText('render')).toBeInTheDocument()
    expect(getByTestId('finding-header')).toBeInTheDocument()
    expect(getByTestId('header')).toBeInTheDocument()
  })
})
