import { Meta, StoryObj } from '@storybook/react'
import { wraperWithProvider } from '@/lib/testing'
import CustomerForm, { CustomerFormProps } from '@/components/CustomerForm'
import withFormik from 'storybook-formik'

export default {
  title: 'Components/CustomerForm',
  component: CustomerForm,
  decorators: [(Story) => wraperWithProvider(withFormik(Story()), {})],
  parameters: {
    formik: {
      initialValues: {
        name: '',
        email: '',
        document: '',
        phone: '',
        status: '',
      },
      validationSchema: undefined,
      onSubmit: (v: unknown) => console.log('I want to log these... ', v),
    },
  },
} as Meta<CustomerFormProps>

export const Default: StoryObj<CustomerFormProps> = {}
