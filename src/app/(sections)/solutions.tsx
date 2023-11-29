import { Button } from '@/components/ui/button'
import { H1 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'
import {
  ArrowRight,
  Figma,
  Globe,
  Puzzle,
  Search,
  Smartphone,
} from 'lucide-react'

const solutions = [
  {
    icon: <Figma className="w-6 h-6" />,
    title: 'Prototipação',
    description:
      'Criação de protótipos interativos para simular a experiência do usuário antes do desenvolvimento completo.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Landing Pages',
    description: 'Criação de páginas de destino otimizadas para conversão.',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Aplicações Web Progressivas (PWAs):',
    description:
      'Desenvolvimento de aplicações web que oferecem uma experiência semelhante à de aplicativos nativos.',
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: 'Integração de Sistemas:',
    description:
      'Conexão de diferentes sistemas e APIs para garantir uma experiência fluida.',
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Otimização para SEO:',
    description:
      'Realização de auditorias on-page para garantir que os elementos HTML, meta tags e conteúdo estejam otimizados para os motores de busca.',
  },
]

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
            <div className="flex items-center justify-center w-14 h-14 aspect-square rounded-lg bg-neutral-800 text-muted-foreground">
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
          Explore toda a nossa diversidade de soluções e projetos já
          desenvolvidos.
        </p>
        <Button>
          Iniciar projeto <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </footer>
    </Section>
  )
}
