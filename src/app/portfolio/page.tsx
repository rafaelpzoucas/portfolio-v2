import { HomeNav } from '@/components/home-nav'
import { Contact } from './(sections)/contact'
import { Projects } from './(sections)/projects'
import { Aside } from './aside'
import { projects } from './data'

export default function PortfolioPage() {
  return (
    <main className="flex flex-col md:flex-row justify-center h-full px-0 sm:px-4">
      <Aside>
        <HomeNav />
      </Aside>

      <section className="flex flex-col w-full max-w-3xl">
        <Projects projects={projects.slice(0, 3)} />
        <Contact />
      </section>
    </main>
  )
}
