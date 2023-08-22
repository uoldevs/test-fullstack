import { Meta, StoryObj } from '@storybook/react'
import { wraperWithProvider } from '@/lib/testing'
import Finding, { FindingMainProps } from '@/components/Finding'

export default {
  title: 'Components/Finding/Main',
  component: Finding.Main,
  args: { heading: 'heading', subheading: 'subheading' },
} as Meta<FindingMainProps>

export const Default: StoryObj<FindingMainProps> = {}
