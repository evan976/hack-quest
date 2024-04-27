import { cn } from '@/lib/utils'
import Card1 from '@/public/card-1.svg'
import Card2 from '@/public/card-2.svg'
import Card3 from '@/public/card-3.svg'
import GradientGreen from '@/public/gradient-green.svg'
import GradientPulple from '@/public/gradient-purple.svg'
import GradientSyntax from '@/public/gradient-syntax.svg'

export function HoverCard1({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="w-full h-[278px] relative">
      <GradientPulple className="w-full h-full scale-[0.99]" />
      <div className="absolute top-0 left-0 w-full h-full hover:translate-x-1.5 hover:-translate-y-1.5 transition duration-300">
        <Card1 className="w-full h-full" />
        <div className={cn('w-full h-full pl-10 absolute top-0 left-0 pr-4 py-8', className)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function HoverCard2({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="w-full h-[278px] relative">
      <GradientGreen className="w-full h-full scale-[0.99]" />
      <div className="absolute top-0 left-0 w-full h-full hover:translate-x-1.5 hover:-translate-y-1.5 transition duration-300">
        <Card2 className="w-full h-full" />
        <div className={cn('w-full h-full pl-10 absolute top-0 left-0 pr-4 py-8', className)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function HoverCard3({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="w-full h-[278px] relative">
      <GradientSyntax className="w-full h-full scale-[0.99]" />
      <div className="absolute top-0 left-0 w-full h-full hover:translate-x-1.5 hover:-translate-y-1.5 transition duration-300">
        <Card3 className="w-full h-full" />
        <div className={cn('w-full h-full pl-10 absolute top-0 left-0 pr-4 py-8', className)}>
          {children}
        </div>
      </div>
    </div>
  )
}
