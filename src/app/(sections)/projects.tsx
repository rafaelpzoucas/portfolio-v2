import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { H1, H3 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { projects } from './data'

export function Projects() {
  return (
    <Section id="projects">
      {/* <H1 className="text-center">Meus Melhores Trabalhos</H1> */}
      <H1 className="text-center">Meus Últimos Projetos</H1>

      <section className="sm:px-0 space-y-16 w-full">
        {projects.slice(0, 3).map((project) => (
          <article
            key={project.title}
            className="flex flex-col sm:flex-row gap-8 w-full"
          >
            <div className="relative sm:min-w-[290px] h-[195px] rounded-lg bg-secondary overflow-hidden">
              <Image
                src={project.image_src}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <aside className="flex flex-col gap-4">
              <H3>{project.title}</H3>
              <p className="text-muted-foreground">{project.description}</p>
              <footer className="flex flex-row gap-2">
                {project.stacks.map((stack) => (
                  <Badge variant="outline" key={stack.name}>
                    {stack.name}
                  </Badge>
                ))}
              </footer>
            </aside>
          </article>
        ))}
      </section>

      <footer className="flex flex-col sm:flex-row items-center justify-between w-full">
        <p className="text-center sm:text-left max-w-sm text-muted-foreground">
          Dê uma olhada em meu histórico de projetos. Pronto para iniciar algo
          incrível?
        </p>
        <Button variant="link" className="sm:ml-auto">
          Ver mais trabalhos <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </footer>
    </Section>
  )
}
