import { Button } from '@/components/ui/button'
import { H1 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'
import { ArrowRight } from 'lucide-react'

export function Solutions() {
  return (
    <Section id="solutions">
      <H1 className="text-center">Soluções para o seu negócio</H1>

      <section className="space-y-10 sm:space-y-16">
        <article className="flex flex-row gap-4 sm:gap-8 w-full">
          <div className="w-14 h-14 aspect-square rounded-lg bg-neutral-800"></div>
          <aside className="flex flex-col gap-1">
            <strong>Solução</strong>
            <p className="text-muted-foreground text-sm">
              Criação de sites para a sua empresa ter uma presença online top
            </p>
          </aside>
        </article>
        <article className="flex flex-row gap-4 sm:gap-8 w-full">
          <div className="w-14 h-14 aspect-square rounded-lg bg-neutral-800"></div>
          <aside className="flex flex-col gap-1">
            <strong>Solução</strong>
            <p className="text-muted-foreground text-sm">
              Criação de sites para a sua empresa ter uma presença online top
            </p>
          </aside>
        </article>
        <article className="flex flex-row gap-4 sm:gap-8 w-full">
          <div className="w-14 h-14 aspect-square rounded-lg bg-neutral-800"></div>
          <aside className="flex flex-col gap-1">
            <strong>Solução</strong>
            <p className="text-muted-foreground text-sm">
              Criação de sites para a sua empresa ter uma presença online top
            </p>
          </aside>
        </article>
        <article className="flex flex-row gap-4 sm:gap-8 w-full">
          <div className="w-14 h-14 aspect-square rounded-lg bg-neutral-800"></div>
          <aside className="flex flex-col gap-1">
            <strong>Solução</strong>
            <p className="text-muted-foreground text-sm">
              Criação de sites para a sua empresa ter uma presença online top
            </p>
          </aside>
        </article>
        <article className="flex flex-row gap-4 sm:gap-8 w-full">
          <div className="w-14 h-14 aspect-square rounded-lg bg-neutral-800"></div>
          <aside className="flex flex-col gap-1">
            <strong>Solução</strong>
            <p className="text-muted-foreground text-sm">
              Criação de sites para a sua empresa ter uma presença online top
            </p>
          </aside>
        </article>

        <footer className="flex flex-col sm:flex-row items-center gap-4 justify-between w-full">
          <p className="max-w-sm text-muted-foreground">
            Explore toda a nossa diversidade de soluções e projetos já
            desenvolvidos.
          </p>
          <Button className="w-full">
            Iniciar projeto <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </footer>
      </section>
    </Section>
  )
}
