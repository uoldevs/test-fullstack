'use client'

import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { phoneDomainToView, phoneViewToDomain } from '@/lib/utils'
import { customerSchema } from '@/lib/validations/customer.schema'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useReduxDispatch } from '@/hooks/useReduxDispatch'
import { useReduxSelector } from '@/hooks/useReduxSelector'
import { Loader2 } from 'lucide-react'
import {
  CREATE_CUSTOMER,
  CustomerStatus,
  GET_CUSTOMER,
  GET_CUSTOMERS,
  UPDATE_CUSTOMER,
} from '@/store/slices/customer.slice'
import Button from '@/components/ui/Button'
import Select from '@/components/ui/Select'
import Input from '@/components/ui/Input'
import Link from '@/components/ui/Link'

const statusOptions = [
  { key: '1', name: CustomerStatus.Active },
  { key: '2', name: CustomerStatus.Inactive },
  { key: '3', name: CustomerStatus.Waiting },
  { key: '4', name: CustomerStatus.Disabled },
]

interface CustomerFormProps {
  id?: string
}

function CustomerForm({ id }: CustomerFormProps) {
  const { back } = useRouter()
  const { customer, isLoading, page } = useReduxSelector(
    (state) => state.customer,
  )

  const dispatch = useReduxDispatch()

  const initialValues = {
    name: '',
    email: '',
    document: '',
    phone: '',
    status: '',
  }

  const onSubmit = (values: typeof initialValues) => {
    const request = {
      name: values.name,
      email: values.email,
      document: values.document,
      phone: phoneViewToDomain(values.phone),
      status: values.status as CustomerStatus,
    }

    if (id) {
      dispatch(UPDATE_CUSTOMER({ id, ...request }))
    } else {
      dispatch(CREATE_CUSTOMER(request))
    }

    back()
  }

  const { values, handleSubmit, handleChange, errors, submitCount, setValues } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema: toFormikValidationSchema(customerSchema),
    })

  useEffect(() => {
    if (id) dispatch(GET_CUSTOMER({ id }))
  }, [dispatch, id])

  useEffect(() => {
    if (customer && id) {
      setValues({
        name: customer.name,
        document: customer.document,
        email: customer.email,
        phone: phoneDomainToView(customer.phone ?? ''),
        status: customer.status,
      })
    }
  }, [customer, setValues, id])

  return (
    <form className="flex flex-col my-24 max-w-[224px]" onSubmit={handleSubmit}>
      <Input
        id="name"
        name="name"
        placeholder="Nome"
        onChange={handleChange}
        value={values.name}
        error={submitCount > 0 && errors.name ? `${errors.name}` : undefined}
      />

      <Input
        id="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={values.email}
        error={submitCount > 0 && errors.email ? `${errors.email}` : undefined}
      />

      <Input
        id="document"
        name="document"
        placeholder="Documento"
        mask="999.999.999-99"
        onChange={handleChange}
        value={values.document}
        error={
          submitCount > 0 && errors.document ? `${errors.document}` : undefined
        }
      />

      <Input
        id="phone"
        name="phone"
        placeholder="Telefone"
        mask="(99) 99999-9999"
        onChange={handleChange}
        value={values.phone}
        error={submitCount > 0 && errors.phone ? `${errors.phone}` : undefined}
      />

      <Select
        id="status"
        name="status"
        options={statusOptions}
        placeholder="Status"
        onChange={handleChange}
        value={values.status}
        error={
          submitCount > 0 && errors.status ? `${errors.status}` : undefined
        }
      />

      <div className="flex gap-3 mt-10">
        <Button type="submit" size="sm">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          <span>{id ? 'Editar' : 'Criar'}</span>
        </Button>

        <Link variant="outlined" size="sm" href="/dashboard">
          <span>Voltar</span>
        </Link>
      </div>
    </form>
  )
}

export default CustomerForm
