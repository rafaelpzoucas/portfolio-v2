import { cn } from '@/lib/utils'
import React from 'react'

type SectionProps = {
  id?: string
  className?: string
  children: React.ReactNode
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ id, className, children, ...props }, ref) => {
    const Comp = 'section'
    return (
      <Comp
        id={id}
        className={cn(
          'flex flex-col items-center justify-center px-8 sm:px-0 py-16 sm:py-20 space-y-16 w-full',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

Section.displayName = 'Section'

export { Section }
