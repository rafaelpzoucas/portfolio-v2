import { Section } from '@/components/section'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { H1 } from '@/components/ui/headings'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from './portfolio/data'

export function Projects() {
  return (
    <Section className="flex flex-col items-center gap-16 px-4">
      <H1>Nossos últimos projetos</H1>

      <Carousel className="w-full md:max-w-7xl">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem
              key={project.title}
              className="flex-[0_0_85%] md:flex-[0_0_70%]"
            >
              <Link href={project.deploy_url} target="_blank">
                <Card className="relative p-4 aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={project.image_src}
                    fill
                    alt=""
                    className="object-cover select-none"
                  />
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        {projects.length > 3 && (
          <>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </>
        )}
      </Carousel>
    </Section>
  )
}
