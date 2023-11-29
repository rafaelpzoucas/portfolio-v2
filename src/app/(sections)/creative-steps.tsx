import { H1 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'

const steps = [
  {
    step: 1,
    title: 'Análise de Requisitos',
    description:
      'Compreendendo as necessidades do projeto e definindo metas claras para garantir que o desenvolvimento atenda às expectativas do cliente.',
  },
  {
    step: 2,
    title: 'Design UI/UX',
    description:
      'Criando uma experiência visual atraente e intuitiva, considerando a usabilidade para garantir que o sistema seja fácil de usar.',
  },
  {
    step: 3,
    title: 'Desenvolvimento',
    description:
      'Transformando o design em realidade, construindo a estrutura do sistema e garantindo que funcione perfeitamente em todos os dispositivos.',
  },
  {
    step: 4,
    title: 'Testes',
    description:
      'Verificando cuidadosamente o sistema para garantir que funcione sem problemas, seja fácil de usar e atenda aos requisitos estabelecidos.',
  },
  {
    step: 5,
    title: 'Feedback e Ajustes',
    description:
      'Coletando opiniões dos usuários e fazendo ajustes contínuos para melhorar a funcionalidade e a satisfação do usuário ao longo do tempo.',
  },
]

export function CreativeSteps() {
  return (
    <Section id="creative-steps">
      <H1 className="text-center">Etapas do processo de criação</H1>

      <section className="space-y-10 sm:space-y-16">
        {steps.map((step) => (
          <article
            key={step.step}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full"
          >
            <div className="flex items-center justify-center w-14 h-14 aspect-square rounded-full bg-secondary">
              <strong className="text-xl text-muted-foreground">
                {step.step}
              </strong>
            </div>
            <aside className="flex flex-col gap-1">
              <strong>{step.title}</strong>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </aside>
          </article>
        ))}
      </section>
    </Section>
  )
}
