import { cn } from '@/lib/utils'
import React, { InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  mask?: string | (string | RegExp)[]
}

const Input: React.FC<InputProps> = ({ mask, error, className, ...rest }) => {
  const inputClassName = cn(
    'border border-neutral-400 rounded px-4 py-2 text-sm',
    className,
  )

  return (
    <div className="flex flex-col mb-4">
      {mask ? (
        <InputMask
          data-testid="masked-input"
          mask={mask}
          maskChar={null}
          type="text"
          className={inputClassName}
          {...rest}
        />
      ) : (
        <input type="text" className={inputClassName} {...rest} />
      )}

      {error ? (
        <span className="mt-1 text-xs text-red-400">{error}</span>
      ) : null}
    </div>
  )
}

export default Input
