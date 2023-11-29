import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type HeadingProps = {
  className?: string
  children: ReactNode
}

const H1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, ...props }, ref) => {
    const Comp = 'h1'
    return (
      <Comp
        className={cn('text-2xl sm:text-3xl md:text-4xl', className)}
        ref={ref}
        {...props}
      >
        <strong>{children}</strong>
      </Comp>
    )
  },
)

const H2 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, ...props }, ref) => {
    const Comp = 'h2'
    return (
      <Comp
        className={cn('text-xl sm:text-2xl md:text-3xl', className)}
        ref={ref}
        {...props}
      >
        <strong>{children}</strong>
      </Comp>
    )
  },
)

const H3 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, ...props }, ref) => {
    const Comp = 'h3'
    return (
      <Comp
        className={cn('text-lg sm:text-xl md:text-2xl', className)}
        ref={ref}
        {...props}
      >
        <strong>{children}</strong>
      </Comp>
    )
  },
)

H1.displayName = 'H1'
H2.displayName = 'H2'
H3.displayName = 'H3'

export { H1, H2, H3 }
