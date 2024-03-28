import { Section } from '@/components/section'
import { metrics } from '@/data/metrics'

export function Metrics() {
  return (
    <Section id="metrics" className="flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center">
            <strong className="text-2xl md:text-4xl text-primary">
              {metric.title}
            </strong>
            <span className="text-xs md:text-lg text-muted-foreground">
              {metric.description}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
