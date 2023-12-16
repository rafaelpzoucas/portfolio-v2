import { CTAButton } from '@/components/cta-button'
import { H1 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'
import { solutions } from '../data'

export function Solutions() {
  return (
    <Section id="solutions">
      <H1 className="text-center">Soluções para o seu negócio</H1>

      <section className="space-y-10 sm:space-y-16">
        {solutions.map((solution) => (
          <article
            key={solution.title}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full"
          >
            <div className="flex items-center justify-center w-14 h-14 aspect-square rounded-lg bg-secondary text-muted-foreground">
              {solution.icon}
            </div>
            <aside className="flex flex-col gap-1">
              <strong>{solution.title}</strong>
              <p className="text-muted-foreground text-sm">
                {solution.description}
              </p>
            </aside>
          </article>
        ))}
      </section>
      <footer className="flex flex-col sm:flex-row items-center gap-4 justify-between w-full">
        <p className="max-w-sm text-center sm:text-left text-muted-foreground">
          Soluções ágeis para desafios modernos.
        </p>
        <CTAButton />
      </footer>
    </Section>
  )
}
