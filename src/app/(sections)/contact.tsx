import { CTAButton } from '@/components/cta-button'
import { H1, H3 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'

export function Contact() {
  return (
    <Section id="contact" className="sm:h-screen sm:px-20">
      <header className="flex flex-col gap-3 w-full">
        <H1>Pronto para Transformar sua Visão em Realidade?</H1>
        <p className="text-muted-foreground">
          Tire suas ideias do papel. Estou aqui para transformá-las realidade.
        </p>
        <CTAButton />
      </header>

      <article className="w-full space-y-4">
        <H3>Contato</H3>
        <div>
          <span className="text-xs text-muted-foreground">E-mail</span>
          <p>rafaelpzoucas@gmail.com</p>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">WhatsApp</span>
          <p>(18) 99826-1736</p>
        </div>
      </article>
    </Section>
  )
}
