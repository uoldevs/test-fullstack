import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-xs md:text-sm lg:text-base font-medium disabled:opacity-50 disabled:pointer-events-none opacity-90 hover:opacity-100 min-w-[88px] md:min-w-[96px] lg:min-w-[120px]',
  {
    variants: {
      variant: {
        contained: 'bg-orange-300 text-white',
        outlined:
          'bg-transparent border border-orange-300 text-orange-300 hover:text-white hover:border-orange-300 hover:bg-orange-300',
      },
      size: {
        sm: 'h-7 md:h-9 lg:h-10 px-2 md:px-4 lg:px-6',
        lg: 'h-8 md:h-10 lg:h-12 px-3 md:px-6 lg:px-8',
      },
    },
    defaultVariants: {
      variant: 'contained',
      size: 'lg',
    },
  },
)
