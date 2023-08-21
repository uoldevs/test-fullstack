'use client'

import React, { useEffect, useMemo } from 'react'
import CardCustomer from '@/components/CardCustomer'
import { useReduxDispatch } from '@/hooks/useReduxDispatch'
import { useReduxSelector } from '@/hooks/useReduxSelector'
import { cn } from '@/lib/utils'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import {
  GET_CUSTOMERS,
  NEXT_CUSTOMER_PAGE,
  PREV_CUSTOMER_PAGE,
} from '@/store/slices/customer.slice'

const ListCustomers = () => {
  const dispatch = useReduxDispatch()

  const { isLoading, customers, page, total } = useReduxSelector(
    (state) => state.customer,
  )

  const start = useMemo(() => ((page ?? 1) - 1) * 10 + 1, [page])
  const end = useMemo(
    () =>
      (total ?? 0) > ((page ?? 1) - 1) * 10 + 10
        ? ((page ?? 1) - 1) * 10 + 10
        : total ?? 0,
    [page, total],
  )

  useEffect(() => {
    dispatch(GET_CUSTOMERS({ page, quantity: 10 }))
  }, [dispatch, page])

  return (
    <div className="my-12">
      {!isLoading && !customers?.length ? (
        <p>Nenhum cliente cadastrado!</p>
      ) : null}

      <div data-testid="dashboard-container" className="mt-12 mb-20">
        {customers?.map((customer) => (
          <CardCustomer key={customer.id} customer={customer} />
        ))}
      </div>

      {total ? (
        <div className="flex justify-between items-center">
          <span className="text-xs md:text-sm lg:text-base text-neutral-500 font-light">
            {`Exibindo cliente de ${start} a ${end} de um total de ${total}`}
          </span>

          <div className="flex flex-row justify-between items-center">
            <button
              data-testid="prev-button"
              onClick={() => dispatch(PREV_CUSTOMER_PAGE())}
              disabled={(page ?? 0) <= 0}
            >
              <ChevronsLeft
                className={cn(
                  'scale-75 md:scale-90 lg:scale-100 text-neutral-400',
                  {
                    'hover:text-orange-300': !((page ?? 0) <= 0),
                  },
                )}
              />
            </button>

            <span className="text-neutral-600 text-xs md:text-sm lg:text-base mx-2 md:mx-3 lg:mx-4">
              {page}
            </span>

            <button
              data-testid="next-button"
              onClick={() => dispatch(NEXT_CUSTOMER_PAGE())}
              disabled={(page ?? 0) * 10 >= (total ?? 0)}
            >
              <ChevronsRight
                size={24}
                className={cn(
                  'scale-75 md:scale-90 lg:scale-100 text-neutral-400',
                  {
                    'hover:text-orange-300': !(
                      (page ?? 0) * 10 >=
                      (total ?? 0)
                    ),
                  },
                )}
              />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ListCustomers
