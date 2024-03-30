import { Section } from '@/components/section'
import { H1 } from '@/components/ui/headings'
import { benefits } from '@/data/benefits'

export function Benefits() {
  return (
    <Section
      id="benefits"
      className="flex flex-col items-center justify-center gap-16 md:gap-32"
    >
      <H1 className="text-center">{benefits.title}</H1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 md:max-w-7xl">
        {benefits.data.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col md:items-center md:text-center gap-2 sm:gap-4 w-full"
          >
            <div className="flex items-center justify-center w-20 h-20 aspect-square rounded-lg bg-secondary">
              <benefit.icon className="w-10 h-10 text-primary" />
            </div>
            <strong className="text-lg md:text-2xl">{benefit.title}</strong>
            <p className="md:text-lg text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
