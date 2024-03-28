import { CTAButton } from '@/components/cta-button'
import { Section } from '@/components/section'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

export function Cover() {
  return (
    <Section
      id="home"
      className="flex flex-col items-center justify-center space-y-16 w-full min-h-screen"
    >
      <div className="relative w-full max-w-xl space-y-4 sm:space-y-8">
        <div className="absolute -z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] max-w-full aspect-square rounded-full blur-3xl opacity-20 bg-gradient-to-r from-violet-500 to-sky-500" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center">
          Impulsione <strong>Suas Vendas</strong> com uma Landing Page{' '}
          <strong>Que Converte</strong>
        </h1>
        <p className="text-muted-foreground text-center">
          Do clique à conversão: Transforme visitantes em clientes com
          facilidade.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <CTAButton />
        <Link
          href="portfolio"
          className={cn(buttonVariants({ variant: 'secondary' }))}
        >
          Conhecer portfólio <MoveRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </Section>
  )
}
