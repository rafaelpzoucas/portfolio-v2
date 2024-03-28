import { Benefits } from './benefits'
import { CallToAction } from './call-to-action'
import { Cover } from './cover'
import { CreativeSteps } from './creative-steps'
import { FAQ } from './faq'
import { Features } from './features'
import { Footer } from './footer'
import { Projects } from './projects'

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center h-full">
      <Cover />
      {/* <Metrics /> */}
      <Features />
      <Benefits />
      <Projects />
      <CreativeSteps />
      <CallToAction />
      {/* <SocialProof /> */}
      <FAQ />
      <Footer />
    </main>
  )
}
