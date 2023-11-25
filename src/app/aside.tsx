import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export function Aside() {
  return (
    <aside className="sm:sticky top-0 flex flex-col sm:justify-between px-8 sm:px-0 py-14 sm:py-20 w-full sm:max-w-xs sm:h-screen">
      <div className="space-y-10">
        <header className="space-y-1">
          <h1 className="text-3xl font-bold">Rafael Zoucas</h1>
          <h3 className="text-lg">Software Engineer</h3>
          <p className="text-xs text-muted-foreground">
            Experiência sólida especializada em Front-End
          </p>
          <Button variant="link" className="px-0">
            MAIS SOBRE MIM <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </header>

        <ul className="hidden sm:flex flex-col space-y-4">
          <li>Projetos</li>
          <li>Soluções</li>
          <li>Processo criativo</li>
          <li>Contato</li>
          <li>FAQ</li>
        </ul>
      </div>

      <section className="flex flex-row gap-2">
        <Button variant="secondary" size="icon">
          <FaWhatsapp />
        </Button>
        <Button variant="secondary" size="icon">
          <FaWhatsapp />
        </Button>
        <Button variant="secondary" size="icon">
          <FaWhatsapp />
        </Button>
      </section>
    </aside>
  )
}
