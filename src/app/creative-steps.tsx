import { Section } from '@/components/section'
import { H1 } from '@/components/ui/headings'
import { steps } from '@/data/creative-steps'

export function CreativeSteps() {
  return (
    <Section
      id="creative-steps"
      className="flex flex-col items-center justify-center space-y-16"
    >
      <H1 className="text-center">Etapas do processo de criação</H1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 max-w-3xl">
        {steps.map((step) => (
          <article
            key={step.step}
            className="flex flex-col md:items-center md:text-center gap-4 sm:gap-8 w-full"
          >
            <div className="flex items-center justify-center w-14 h-14 aspect-square rounded-full bg-secondary">
              <strong className="text-xl text-primary">{step.step}</strong>
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
