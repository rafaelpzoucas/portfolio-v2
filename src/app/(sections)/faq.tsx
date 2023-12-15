import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { H1 } from '@/components/ui/headings'
import { Section } from '@/components/ui/section'
import { faq } from '../data'

export function FAQ() {
  return (
    <Section id="faq">
      <H1 className="text-center">Perguntas frequentes</H1>

      <div className="w-full">
        <Accordion type="single" collapsible>
          {faq.map((question) => (
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
