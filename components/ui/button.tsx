import * as React from 'react'

import { cn } from '@/lib/utils'

export const Button = React.forwardRef<
  React.ElementRef<'button'>,
  React.ComponentPropsWithoutRef<'button'>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'flex items-center justify-center bg-tag text-green-yellow rounded-[40px] px-1 xl:px-4 xl:py-2 py-1',
      className,
    )}
    {...props}
  />
))

Button.displayName = 'Button'
