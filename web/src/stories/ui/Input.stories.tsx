import { Meta, StoryObj } from '@storybook/react'
import Input, { InputProps } from '@/components/ui/Input'

export default {
  title: 'UI/Input',
  component: Input,
  args: {
    error: undefined,
    mask: undefined,
    placeholder: 'placeholder',
  },
  decorators: [(Story) => <div className="w-60">{Story()}</div>],
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {}

export const Error: StoryObj<InputProps> = {
  args: {
    error: 'error',
    mask: undefined,
    placeholder: 'Error',
  },
}

export const Mask: StoryObj<InputProps> = {
  args: {
    error: undefined,
    mask: '999.999.999-99',
    placeholder: 'Mask',
  },
}
