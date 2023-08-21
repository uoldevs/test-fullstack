import React from 'react'
import Finding from '@/components/Finding'
import { renderWithrovider } from '@/lib/testing'

describe('FindingHeader', () => {
  it('renders with title', () => {
    const { getByText } = renderWithrovider(<Finding.Header title={'title'} />)
    expect(getByText('title')).toBeInTheDocument()
  })
})

describe('FindingMain', () => {
  it('renders with provided heading and subheading', () => {
    const { getByTestId, getByText } = renderWithrovider(
      <Finding.Main heading={'heading'} subheading={'subheading'} />,
    )

    expect(getByText('heading')).toBeInTheDocument()
    expect(getByText('subheading')).toBeInTheDocument()
  })
})
