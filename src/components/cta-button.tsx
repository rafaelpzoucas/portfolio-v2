import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export function CTAButton() {
  return (
    <Link href="#" hidden>
      <Button>
        Iniciar projeto
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </Link>
  )
}
