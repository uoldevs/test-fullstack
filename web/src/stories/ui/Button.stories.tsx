import { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from '@/components/ui/Button'

export default {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'contained',
    size: 'sm',
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    variant: 'contained',
    size: 'sm',
  },
}

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlined',
    size: 'sm',
  },
}
