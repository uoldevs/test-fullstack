import { Meta, StoryObj } from '@storybook/react'
import { wraperWithProvider } from '@/lib/testing'
import ListCustomers from '@/components/ListCustomers'

export default {
  title: 'Components/ListCustomers',
  component: ListCustomers,
  decorators: [(Story) => wraperWithProvider(Story(), {})],
} as Meta

export const Default: StoryObj = {}
