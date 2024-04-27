import * as React from 'react'

import { cn } from '@/lib/utils'

export const Tag = React.forwardRef<
  React.ElementRef<'span'>,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'inline-flex text-text-100 justify-center items-center rounded-full border border-border py-1 px-2 text-xs',
      className,
    )}
    {...props}
  />
))

Tag.displayName = 'Tag'
