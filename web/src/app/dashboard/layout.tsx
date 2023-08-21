import Finding from '@/components/Finding'
import Header from '@/components/Header'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      <main className="py-6 md:py-16 lg:py-32 px-6 md:px-16 lg:px-32">
        <Finding.Header title="Painel de clientes" />
        {children}
      </main>
    </>
  )
}
