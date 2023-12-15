'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

import { ReactNode } from 'react'

export function Aside({ children }: { children: ReactNode }) {
  return (
    <aside className="md:sticky top-0 flex flex-col md:justify-between px-4 md:px-0 py-14 pb-4 md:py-20 w-full md:max-w-xs md:h-screen select-none">
      <div className="space-y-10">
        <header className="space-y-1">
          <h1 className="text-3xl font-bold">Rafael Zoucas</h1>
          <h3 className="text-lg">Software Engineer</h3>
          <p className="text-xs text-muted-foreground">
            Experiência sólida especializada em Front-End
          </p>
          {/* <Link href="/about">
            <Button variant="link" className="px-0">
              MAIS SOBRE MIM <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link> */}
        </header>

        {children}
      </div>

      <section className="flex flex-row gap-2 mt-4">
        <Link href=" https://wa.me/5518998261736" target="_blank">
          <Button variant="secondary" size="icon" className="text-lg">
            <FaWhatsapp />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/rafaelpzoucas/" target="_blank">
          <Button variant="secondary" size="icon" className="text-lg">
            <FaLinkedin />
          </Button>
        </Link>
        <Link href="https://github.com/rafaelpzoucas" target="_blank">
          <Button variant="secondary" size="icon" className="text-lg">
            <FaGithub />
          </Button>
        </Link>
      </section>
    </aside>
  )
}
