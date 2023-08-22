import { Meta, StoryObj } from '@storybook/react'
import Select, { SelectProps } from '@/components/ui/Select'

export default {
  title: 'UI/Select',
  component: Select,
  args: {
    options: [
      { key: '1', name: '1' },
      { key: '2', name: '2' },
    ],
    error: undefined,
  },
  decorators: [(Story) => <div className="w-60">{Story()}</div>],
} as Meta<SelectProps>

export const Default: StoryObj<SelectProps> = {}

export const Error: StoryObj<SelectProps> = {
  args: {
    error: 'error',
  },
}
