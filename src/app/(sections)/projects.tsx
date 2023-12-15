'use client'

import { Project } from '@/components/project'
import { Button } from '@/components/ui/button'
import { H1 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'
import { ArrowRight } from 'lucide-react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type StacksDataType = {
  name: string
  icon: JSX.Element
}

export type ProjectDataType = {
  title: string
  description: string
  repo_url: string | null
  deploy_url: string
  image_src: StaticImageData
  gif_src: StaticImageData | null
  stacks: StacksDataType[]
}

type ProjectsPropsType = {
  projects: ProjectDataType[]
}

export function Projects({ projects }: ProjectsPropsType) {
  const pathname = usePathname()

  return (
    <Section id="projects">
      {/* <H1 className="text-center">Meus Melhores Trabalhos</H1> */}
      <H1 className="text-center">
        {pathname !== '/projects' ? 'Meus Últimos Projetos' : 'Meus Projetos'}
      </H1>

      <section className="sm:px-0 space-y-16 w-full">
        {projects.map((project) => (
          <Project key={project.title} data={project} />
        ))}
      </section>

      {pathname !== '/projects' && (
        <footer className="flex flex-col sm:flex-row items-center justify-between w-full">
          <p className="text-center sm:text-left max-w-sm text-muted-foreground">
            Dê uma olhada em meu histórico de projetos.
          </p>
          <Link href="/projects">
            <Button variant="link" className="sm:ml-auto">
              Ver mais trabalhos <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </footer>
      )}
    </Section>
  )
}
