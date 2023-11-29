import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'
import { ArrowRight, CornerRightDown } from 'lucide-react'
import Link from 'next/link'

export function Home() {
  return (
    <Section id="home" className="sm:min-h-screen">
      <div className="relative w-full max-w-xl space-y-4 sm:space-y-8">
        <div className="absolute -z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] max-w-full aspect-square rounded-full blur-3xl opacity-20 bg-gradient-to-r from-violet-500 to-sky-500" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center">
          Transformando <strong>ideias</strong> em <strong>experiências</strong>{' '}
          digitais <strong>incríveis</strong>.
        </h1>
        <p className="text-muted-foreground text-center">
          Design responsivo, código impecável, resultados excepcionais.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <Link href="#projects">
          <Button variant="secondary" className="w-full">
            Conhecer portfólio <CornerRightDown className="w-4 h-4 ml-2" />
          </Button>
        </Link>
        <Button className="w-full">
          Iniciar projeto <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Section>
  )
}
