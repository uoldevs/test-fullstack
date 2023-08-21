import { User } from 'lucide-react'
import { ReactNode } from 'react'

interface HeaderProps {
  title: string
}

function FindingHeader({ title }: HeaderProps) {
  return (
    <div data-testid="finding-header">
      <div className="flex flex-row items-center">
        <User
          size={24}
          className="scale-[1.2] md:scale-[1.5] lg:scale-[1.8] text-neutral-800"
        />
        <h3 className="text-xl md:text-2xl lg:text-4xl text-neutral-600 font-normal ml-4 md:ml-6 lg:ml-8">
          {title}
        </h3>
      </div>

      <div className="h-[1px] w-full bg-neutral-200 my-6" />
    </div>
  )
}

interface MainProps {
  heading: string
  subheading: string
  children?: ReactNode
}

function FindingMain({ children, heading, subheading }: MainProps) {
  return (
    <div
      data-testid="finding-main"
      className="flex flex-row justify-between items-center"
    >
      <div>
        <h5 className="text-base md:text-lg lg:text-2xl text-neutral-500 font-semibold mb-2">
          {heading}
        </h5>

        <h6 className="text-sm md:text-base lg:text-xl text-neutral-400">
          {subheading}
        </h6>
      </div>

      {children}
    </div>
  )
}

const Finding = {
  Main: FindingMain,
  Header: FindingHeader,
}

export default Finding
