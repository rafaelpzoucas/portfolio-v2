import { CTAButton } from '@/components/cta-button'
import { Section } from '@/components/section'
import { cta } from '@/data/cta'
import { cn } from '@/lib/utils'

export function CallToAction() {
  const action = cta.actions[0]

  return (
    <Section
      id="cta"
      className="flex flex-col items-center justify-center gap-16 text-center text-primary-foreground bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    >
      <div>
        <p className="text-primary-foreground">{cta.subtitle}</p>
        <h1 className={cn('text-3xl md:text-5xl font-bold max-w-lg')}>
          {cta.title}
        </h1>
      </div>

      <CTAButton className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" />
    </Section>
  )
}
