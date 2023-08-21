import React, { ButtonHTMLAttributes } from 'react'
import { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/styles/variants/button'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ children, variant, size, className, ...rest }: ButtonProps) {
  const inputClassName = cn(buttonVariants({ variant, size, className }))

  return (
    <button className={inputClassName} {...rest}>
      {children}
    </button>
  )
}

export default Button
