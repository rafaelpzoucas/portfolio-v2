'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { H1, H3 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub } from 'react-icons/fa'

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
          <article
            key={project.title}
            className="flex flex-col sm:flex-row gap-8 w-full p-4 rounded-lg hover:bg-secondary/30 transition-colors duration-300"
          >
            <div className="relative sm:min-w-[290px] h-[195px] rounded-lg bg-secondary overflow-hidden">
              <Image
                src={project.image_src}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <H3>{project.title}</H3>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-row gap-2">
                {project.stacks.map((stack) => (
                  <Badge variant="outline" key={stack.name}>
                    {stack.name}
                  </Badge>
                ))}
              </div>
              {project.repo_url && (
                <footer className="flex flex-row gap-4">
                  <Link href={project.deploy_url} target="_blank">
                    <Button variant="link" className="flex flex-row gap-2 px-0">
                      <ExternalLink className="w-5 h-5" />
                      Projeto
                    </Button>
                  </Link>
                  <Link href={project.repo_url} target="_blank">
                    <Button variant="link" className="flex flex-row gap-2 px-0">
                      <FaGithub className="text-xl" />
                      Repositório
                    </Button>
                  </Link>
                </footer>
              )}
            </div>
          </article>
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
