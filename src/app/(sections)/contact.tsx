import { Button } from '@/components/ui/button'
import { H1, H3 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'

export function Contact() {
  return (
    <Section id="contact" className="sm:h-screen sm:px-20">
      <header className="flex flex-col gap-3 w-full">
        <H1>Vamos iniciar um projeto juntos?</H1>
        <p className="text-muted-foreground">
          Transformando ideias em projetos excepcionais
        </p>
        <Button className="w-full sm:w-fit mt-4">Iniciar projeto</Button>
      </header>

      <article className="w-full space-y-4">
        <H3>Contato</H3>
        <div>
          <span className="text-xs text-muted-foreground">E-mail</span>
          <p>contato@rafaelzoucas.com.br</p>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">WhatsApp</span>
          <p>(18) 99826-1736</p>
        </div>
      </article>
    </Section>
  )
}
