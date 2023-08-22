import { Customer } from '@/store/slices/customer.slice'
import { cn, cpfToView, phoneDomainToView } from '@/lib/utils'
import Link from './ui/Link'

export interface CardCustomerProps {
  customer: Customer
}

function CardCustomer({ customer }: CardCustomerProps) {
  return (
    <div
      data-testid={`card-customer-${customer.id}`}
      className="flex flex-row gap-1 justify-between items-center py-1 md:py-2 lg:py-4 px-2 md:px-4 lg:px-6 border border-neutral-200 mb-4"
    >
      <div className="flex flex-col md:flex-row w-[40%] md:w-[60%] md:justify-between mr-8">
        <div className="flex flex-col justify-between">
          <p className="text-xs md:text-sm lg:text-base text-neutral-600 capitalize">
            {customer.name}
          </p>
          <p className="text-xs md:text-sm lg:text-base text-neutral-500 font-light ">
            {customer.email}
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-xs md:text-sm lg:text-base text-neutral-500">
            {cpfToView(customer.document)}
          </p>
          <p className="text-xs md:text-sm lg:text-base text-neutral-500">
            {phoneDomainToView(customer.phone)}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start w-[30%] md:[20%]">
        <div
          className={cn('w-2 h-2 bg-neutral-400 rounded-full md:mr-2', {
            'bg-emerald-500': customer.status === 'ativo',
            'bg-red-500': customer.status === 'inativo',
            'bg-yellow-300': customer.status === 'aguardando ativação',
          })}
        />
        <span className="text-xs md:text-sm lg:text-base text-center md:text-start text-neutral-500 capitalize">
          {customer.status}
        </span>
      </div>

      <div className="w-[30%] md:w-[20%] flex items-center justify-center">
        <Link variant="outlined" href={`/dashboard/update/${customer.id}`}>
          <span>Editar</span>
        </Link>
      </div>
    </div>
  )
}

export default CardCustomer
