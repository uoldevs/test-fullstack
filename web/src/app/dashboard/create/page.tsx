import Finding from '@/components/Finding'
import CustomerForm from '@/components/CustomerForm'

export default function CreateCustomer() {
  return (
    <>
      <Finding.Main
        heading="Novo usuário"
        subheading="Informe os campos a seguir para criar novo usuário:"
      />

      <CustomerForm />
    </>
  )
}
