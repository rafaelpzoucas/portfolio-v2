import { ProjectDataType } from '@/app/portfolio/(sections)/projects'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { H3 } from './ui/headings'

export function Project({ data }: { data: ProjectDataType }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <article
      key={data.title}
      className="flex flex-col sm:flex-row gap-8 w-full p-4 rounded-lg hover:bg-secondary/30 transition-colors duration-300"
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="relative sm:min-w-[290px] h-[195px] rounded-lg bg-secondary overflow-hidden">
        <Image
          src={isActive && data.gif_src ? data.gif_src : data.image_src}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <H3>{data.title}</H3>
        <p className="text-muted-foreground">{data.description}</p>
        <div className="flex flex-row flex-wrap gap-2">
          {data.stacks.map((stack) => (
            <Badge
              variant="outline"
              key={stack.name}
              className="whitespace-nowrap"
            >
              {stack.name}
            </Badge>
          ))}
        </div>

        <footer className="flex flex-row gap-4">
          <Link href={data.deploy_url} target="_blank">
            <Button variant="link" className="flex flex-row gap-2 px-0">
              <ExternalLink className="w-5 h-5" />
              Projeto
            </Button>
          </Link>
          {data.repo_url && (
            <Link href={data.repo_url} target="_blank">
              <Button variant="link" className="flex flex-row gap-2 px-0">
                <FaGithub className="text-xl" />
                Repositório
              </Button>
            </Link>
          )}
        </footer>
      </div>
    </article>
  )
}
