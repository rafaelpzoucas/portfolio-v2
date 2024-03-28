import { Section } from '@/components/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { H1 } from '@/components/ui/headings'
import { faq } from '@/data/faq'

export function FAQ() {
  return (
    <Section
      id="faq"
      className="flex flex-col items-center justify-center space-y-16"
    >
      <H1 className="text-center">Perguntas frequentes</H1>

      <div className="w-full max-w-3xl">
        <Accordion type="single" collapsible>
          {faq.data.map((question) => (
            <AccordionItem
              key={question.title}
              className="p-4 py-1"
              value={question.title}
            >
              <AccordionTrigger>{question.title}</AccordionTrigger>
              <AccordionContent>{question.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
