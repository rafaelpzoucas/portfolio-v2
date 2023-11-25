import { H1 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'

export function CreativeSteps() {
  return (
    <Section>
      <H1 className="text-center">Etapas do processo de criação</H1>

      <section className="space-y-10 sm:space-y-16">
        <article className="flex flex-row gap-4 sm:gap-8 w-full">
          <div className="w-14 h-14 aspect-square rounded-full bg-neutral-800"></div>
          <aside className="flex flex-col gap-1">
            <strong>Análise</strong>
            <p className="text-muted-foreground text-sm">
              Criação de sites para a sua empresa ter uma presença online top
            </p>
          </aside>
        </article>
        <article className="flex flex-row gap-4 sm:gap-8 w-full">
          <div className="w-14 h-14 aspect-square rounded-full bg-neutral-800"></div>
          <aside className="flex flex-col gap-1">
            <strong>Análise</strong>
            <p className="text-muted-foreground text-sm">
              Criação de sites para a sua empresa ter uma presença online top
            </p>
          </aside>
        </article>
        <article className="flex flex-row gap-4 sm:gap-8 w-full">
          <div className="w-14 h-14 aspect-square rounded-full bg-neutral-800"></div>
          <aside className="flex flex-col gap-1">
            <strong>Análise</strong>
            <p className="text-muted-foreground text-sm">
              Criação de sites para a sua empresa ter uma presença online top
            </p>
          </aside>
        </article>
        <article className="flex flex-row gap-4 sm:gap-8 w-full">
          <div className="w-14 h-14 aspect-square rounded-full bg-neutral-800"></div>
          <aside className="flex flex-col gap-1">
            <strong>Análise</strong>
            <p className="text-muted-foreground text-sm">
              Criação de sites para a sua empresa ter uma presença online top
            </p>
          </aside>
        </article>
      </section>
    </Section>
  )
}
