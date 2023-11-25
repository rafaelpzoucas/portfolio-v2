import { Aside } from './aside'
import { CreativeSteps } from './creative-steps'
import { FAQ } from './faq'
import { Footer } from './footer'
import { Home } from './home'
import { Projects } from './projects'
import { Solutions } from './solutions'

export default function HomePage() {
  return (
    <main className="flex flex-col sm:flex-row justify-center h-full">
      <Aside />

      <section className="flex flex-col w-full max-w-3xl">
        <Home />
        <Projects />
        <Solutions />
        <CreativeSteps />
        <FAQ />
        <Footer />
      </section>
    </main>
  )
}
