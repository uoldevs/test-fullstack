import { Suspense } from 'react'
import Finding from '@/components/Finding'
import CustomerForm from '@/components/CustomerForm'
import Loader from '@/components/Loader'

interface UpdateCustomerProps {
  params: { id?: string }
}

export default function UpdateCustomer({ params }: UpdateCustomerProps) {
  return (
    <>
      <Finding.Main
        heading="Editar usuário"
        subheading="Informe os campos a seguir para editar usuário:"
      />

      <Suspense fallback={<Loader />}>
        <CustomerForm id={params.id} />
      </Suspense>
    </>
  )
}
