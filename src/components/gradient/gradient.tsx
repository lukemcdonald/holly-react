import { cn } from '@/utils/cn'

function Gradient({ className }: { className?: string }) {
  return <div className={cn('bg-gradient-to-b from-primary-600 to-primary-400', className)} />
}

export default Gradient
