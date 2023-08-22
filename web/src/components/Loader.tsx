import { Loader2 } from 'lucide-react'

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Loader2 data-testid="loader" className="h-6 w-6 animate-spin" />
      <span>Carregando...</span>
    </div>
  )
}

export default Loader
