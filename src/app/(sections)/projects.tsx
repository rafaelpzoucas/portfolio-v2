import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { H1, H3 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'
import { ArrowRight } from 'lucide-react'

export function Projects() {
  return (
    <Section id="projects">
      <H1 className="text-center">Meus Melhores Trabalhos</H1>

      <section className="sm:px-0 space-y-16 w-full">
        <article className="flex flex-col sm:flex-row gap-8 w-full">
          <div className="sm:min-w-[290px] h-[195px] rounded-lg bg-secondary"></div>
          <aside className="flex flex-col gap-4">
            <H3>Nome do projeto</H3>
            <p>
              Criei um site para a Heima Solutions usando WordPress com foco em
              SEO, design e multi-idioma. A solução resultou em um site
              profissional e funcional que destaca as soluções da empresa de
              forma clara e intuitiva.
            </p>
            <footer className="flex flex-row gap-2">
              <Badge variant="outline">Badge</Badge>
              <Badge variant="outline">Badge</Badge>
              <Badge variant="outline">Badge</Badge>
            </footer>
          </aside>
        </article>
        <article className="flex flex-col sm:flex-row gap-8 w-full">
          <div className="sm:min-w-[290px] h-[195px] rounded-lg bg-secondary"></div>
          <aside className="flex flex-col gap-4">
            <H3>Nome do projeto</H3>
            <p>
              Criei um site para a Heima Solutions usando WordPress com foco em
              SEO, design e multi-idioma. A solução resultou em um site
              profissional e funcional que destaca as soluções da empresa de
              forma clara e intuitiva.
            </p>
            <footer className="flex flex-row gap-2">
              <Badge variant="outline">Badge</Badge>
              <Badge variant="outline">Badge</Badge>
              <Badge variant="outline">Badge</Badge>
            </footer>
          </aside>
        </article>
        <article className="flex flex-col sm:flex-row gap-8 w-full">
          <div className="sm:min-w-[290px] h-[195px] rounded-lg bg-secondary"></div>
          <aside className="flex flex-col gap-4">
            <H3>Nome do projeto</H3>
            <p>
              Criei um site para a Heima Solutions usando WordPress com foco em
              SEO, design e multi-idioma. A solução resultou em um site
              profissional e funcional que destaca as soluções da empresa de
              forma clara e intuitiva.
            </p>
            <footer className="flex flex-row gap-2">
              <Badge variant="outline">Badge</Badge>
              <Badge variant="outline">Badge</Badge>
              <Badge variant="outline">Badge</Badge>
            </footer>
          </aside>
        </article>
      </section>

      <footer className="flex flex-col sm:flex-row items-center justify-between w-full">
        <p className="text-center sm:text-left max-w-sm text-muted-foreground">
          Explore toda a nossa diversidade de soluções e projetos já
          desenvolvidos.
        </p>
        <Button variant="link" className="sm:ml-auto">
          Ver mais trabalhos <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </footer>
    </Section>
  )
}
