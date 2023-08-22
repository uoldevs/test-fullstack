import React, { SelectHTMLAttributes } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type Option = {
  key: string
  name: string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[]
  error?: string
}

const Select: React.FC<SelectProps> = ({
  className,
  error,
  options,
  ...rest
}) => {
  const selectClassName = cn(
    `border border-neutral-400 rounded px-4 py-2 appearance-none w-full text-sm capitalize`,
    className,
  )

  return (
    <div className="flex flex-col mb-4">
      <div className="relative">
        <ChevronDown
          size={14}
          className="absolute right-4 top-[14px] pointer-events-none text-gray-500"
        />

        <select className={selectClassName} {...rest}>
          <option key="" value="" disabled>
            Selecione....
          </option>

          {options.map((option, index) => (
            <option
              key={option.key}
              value={option.name}
              data-testid={`option-${option.key}`}
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>

      {error ? (
        <span className="mt-1 text-xs text-red-400">{error}</span>
      ) : null}
    </div>
  )
}

export default Select
