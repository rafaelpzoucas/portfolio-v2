'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

import { Nav } from '@/components/nav'

export function Aside() {
  return (
    <aside className="sm:sticky top-0 flex flex-col sm:justify-between px-8 sm:px-0 py-14 sm:py-20 w-full sm:max-w-xs sm:h-screen select-none">
      <div className="space-y-10">
        <header className="space-y-1">
          <h1 className="text-3xl font-bold">Rafael Zoucas</h1>
          <h3 className="text-lg">Software Engineer</h3>
          <p className="text-xs text-muted-foreground">
            Experiência sólida especializada em Front-End
          </p>
          <Link href="/about">
            <Button variant="link" className="px-0">
              MAIS SOBRE MIM <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </header>

        <Nav />
      </div>

      <section className="flex flex-row gap-2 mt-4">
        <Button variant="secondary" size="icon" className="text-lg">
          <FaWhatsapp />
        </Button>
        <Button variant="secondary" size="icon" className="text-lg">
          <FaLinkedin />
        </Button>
        <Button variant="secondary" size="icon" className="text-lg">
          <FaInstagram />
        </Button>
      </section>
    </aside>
  )
}
