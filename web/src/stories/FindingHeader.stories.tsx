import { Meta, StoryObj } from '@storybook/react'
import { wraperWithProvider } from '@/lib/testing'
import Finding, { FindingHeaderProps } from '@/components/Finding'

export default {
  title: 'Components/Finding/Header',
  component: Finding.Header,
  args: { title: 'title' },
} as Meta<FindingHeaderProps>

export const Default: StoryObj<FindingHeaderProps> = {}
