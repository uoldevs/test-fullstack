import { cn } from '@/lib/utils'
import { AnchorHTMLAttributes } from 'react'
import { buttonVariants } from '@/styles/variants/button'
import { VariantProps } from 'class-variance-authority'
import LinkNext from 'next/link'

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string
}

function Link({ children, variant, size, className, ...rest }: LinkProps) {
  const linkClassName = cn(buttonVariants({ variant, size, className }))

  return (
    <LinkNext className={linkClassName} {...rest}>
      {children}
    </LinkNext>
  )
}

export default Link
