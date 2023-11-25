import { cn } from '@/lib/utils'
import React from 'react'

type SectionProps = {
  className?: string
  children: React.ReactNode
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    const Comp = 'section'
    return (
      <Comp
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
