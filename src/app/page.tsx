import { HomeNav } from '@/components/home-nav'
import { Contact } from './(sections)/contact'
import { CreativeSteps } from './(sections)/creative-steps'
import { FAQ } from './(sections)/faq'
import { Home } from './(sections)/home'
import { Projects } from './(sections)/projects'
import { Solutions } from './(sections)/solutions'
import { Aside } from './aside'
import { projects } from './data'

export default function HomePage() {
  return (
    <main className="flex flex-col md:flex-row justify-center h-full px-0 sm:px-4">
      <Aside>
        <HomeNav />
      </Aside>

      <section className="flex flex-col w-full max-w-3xl">
        <Home />
        <Projects projects={projects.slice(0, 3)} />
        <Solutions />
        <CreativeSteps />
        <Contact />
        <FAQ />
      </section>
    </main>
  )
}
