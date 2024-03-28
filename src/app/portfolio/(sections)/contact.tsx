import { CTAButton } from '@/components/cta-button'
import { Section } from '@/components/section'
import { H1 } from '@/components/ui/headings'

export function Contact() {
  return (
    <Section
      id="contact"
      className="relative flex flex-col items-center justify-center gap-12 sm:h-screen sm:px-20 !bg-transparent"
    >
      <div className="absolute -z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] max-w-full aspect-square rounded-full blur-3xl opacity-20 bg-gradient-to-r from-violet-500 to-sky-500" />
      <header className="flex flex-col gap-3 w-full">
        <H1>Pronto para Transformar sua Visão em Realidade?</H1>
        <p className="text-muted-foreground">
          Tire suas ideias do papel. Estou aqui para transformá-las em
          realidade.
        </p>
      </header>

      <article className="w-full space-y-4">
        <CTAButton />
      </article>
    </Section>
  )
}
