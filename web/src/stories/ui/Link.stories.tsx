import { Meta, StoryObj } from '@storybook/react'
import Link, { LinkProps } from '@/components/ui/Link'

export default {
  title: 'UI/Link',
  component: Link,
  args: {
    href: '/',
    children: 'Link',
    variant: 'contained',
    size: 'sm',
  },
} as Meta<LinkProps>

export const Default: StoryObj<LinkProps> = {
  args: {
    variant: 'contained',
    size: 'sm',
  },
}

export const Outlined: StoryObj<LinkProps> = {
  args: {
    variant: 'outlined',
    size: 'sm',
  },
}
