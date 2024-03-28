import { CTAButton } from '@/components/cta-button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Projects } from '../(sections)/projects'
import { Aside } from '../aside'
import { projects } from '../data'

export default function ProjectsPage() {
  return (
    <main className="flex flex-col md:flex-row justify-center h-full px-0 sm:px-4">
      <Aside>
        <nav className="">
          <ul className="flex flex-col space-y-4 w-fit overflow-hidden">
            <Link href="/">
              <li className="flex flex-row gap-2 items-center opacity-30 hover:opacity-100">
                <ArrowLeft className="w-4 h-4" /> Home
              </li>
            </Link>
          </ul>
        </nav>

        <CTAButton />
      </Aside>

      <section className="flex flex-col w-full max-w-3xl">
        <Projects projects={projects} />
      </section>
    </main>
  )
}
