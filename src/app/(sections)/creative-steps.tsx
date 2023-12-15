import { H1 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'
import { steps } from '../data'

export function CreativeSteps() {
  return (
    <Section id="creative-steps">
      <H1 className="text-center">Etapas do processo de criação</H1>

      <section className="space-y-10 sm:space-y-16">
        {steps.map((step) => (
          <article
            key={step.step}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full"
          >
            <div className="flex items-center justify-center w-14 h-14 aspect-square rounded-full bg-secondary">
              <strong className="text-xl text-muted-foreground">
                {step.step}
              </strong>
            </div>
            <aside className="flex flex-col gap-1">
              <strong>{step.title}</strong>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </aside>
          </article>
        ))}
      </section>
    </Section>
  )
}
