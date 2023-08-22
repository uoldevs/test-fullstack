import { Suspense } from 'react'
import ListCustomers from '@/components/ListCustomers'
import Finding from '@/components/Finding'
import Loader from '@/components/Loader'
import Link from '@/components/ui/Link'

export default function Dashboard() {
  return (
    <>
      <Finding.Main
        heading="Listagem de usuários"
        subheading="Escolha um cliente para visualizar os detalhes"
      >
        <Link className="mx-3" size="sm" href="/dashboard/create">
          <span>Novo cliente</span>
        </Link>
      </Finding.Main>

      <Suspense fallback={<Loader />}>
        <ListCustomers />
      </Suspense>
    </>
  )
}
