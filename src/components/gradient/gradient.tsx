import clsx from 'clsx'

function Gradient({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'bg-gradient-to-b from-primary-600 to-primary-400',
        className,
      )}
    />
  )
}

export default Gradient
