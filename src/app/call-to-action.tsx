import { CTAButton } from '@/components/cta-button'
import { Section } from '@/components/section'
import { cta } from '@/data/cta'
import { cn } from '@/lib/utils'

export function CallToAction() {
  return (
    <Section
      id="cta"
      className="flex flex-col items-center justify-center gap-16 text-center text-background bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    >
      <div>
        <p>{cta.subtitle}</p>
        <h1 className={cn('text-3xl md:text-5xl font-bold max-w-lg')}>
          {cta.title}
        </h1>
      </div>

      <CTAButton />
    </Section>
  )
}
