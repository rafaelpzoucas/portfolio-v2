import { Contact } from './(sections)/contact'
import { CreativeSteps } from './(sections)/creative-steps'
import { FAQ } from './(sections)/faq'
import { Home } from './(sections)/home'
import { Projects } from './(sections)/projects'
import { Solutions } from './(sections)/solutions'
import { Aside } from './aside'

export default function HomePage() {
  return (
    <main className="flex flex-col sm:flex-row justify-center h-full">
      <Aside />

      <section className="flex flex-col w-full max-w-3xl">
        <Home />
        <Projects />
        <Solutions />
        <CreativeSteps />
        <Contact />
        <FAQ />
      </section>
    </main>
  )
}
