import { CTAButton } from '@/components/cta-button'
import { Section } from '@/components/section'
import { H1 } from '@/components/ui/headings'
import { features } from '@/data/features'

export function Features() {
  return (
    <Section id="features" className="flex items-center justify-center">
      <div className="flex flex-col gap-16 max-w-3xl">
        <H1 className="text-center">{features.title}</H1>

        <section className="space-y-10 sm:space-y-12">
          {features.data.map((solution) => (
            <article
              key={solution.title}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full"
            >
              <div className="flex items-center justify-center w-14 h-14 aspect-square rounded-lg bg-secondary">
                <solution.icon className="w-6 h-6 text-primary" />
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
      </div>
    </Section>
  )
}
