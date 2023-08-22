import { Meta, StoryObj } from '@storybook/react'
import CardCustomer, { CardCustomerProps } from '@/components/CardCustomer'
import { CustomerStatus } from '@/store/slices/customer.slice'

const customer = {
  id: '1',
  name: 'ronaldinho',
  email: 'ronaldinho',
  phone: '+55 11 999999999',
  document: '12345678902',
  status: CustomerStatus.Active,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

export default {
  title: 'Components/CardCustomer',
  component: CardCustomer,
  args: { customer },
} as Meta<CardCustomerProps>

export const Default: StoryObj<CardCustomerProps> = {}

export const Inactive: StoryObj<CardCustomerProps> = {
  args: { customer: { ...customer, status: CustomerStatus.Inactive } },
}

export const Waiting: StoryObj<CardCustomerProps> = {
  args: { customer: { ...customer, status: CustomerStatus.Waiting } },
}

export const Disabled: StoryObj<CardCustomerProps> = {
  args: { customer: { ...customer, status: CustomerStatus.Disabled } },
}
