import { Section } from '@/components/section'
import { buttonVariants } from '@/components/ui/button'
import { H1 } from '@/components/ui/headings'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const links = [
  {
    anchor: '#features',
    title: 'Recursos',
  },
  {
    anchor: '#benefits',
    title: 'Vantagens',
  },
  {
    anchor: '#projects',
    title: 'Projetos',
  },
  {
    anchor: '#creative-steps',
    title: 'Processo criativo',
  },
  {
    anchor: '#cta',
    title: 'Aumente suas vendas',
  },
  {
    anchor: '#faq',
    title: 'Dúvidas frequentes',
  },
]

export function Footer() {
  return (
    <Section className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center gap-2">
            <H1>Rafael Zoucas</H1>
          </div>

          <p className="text-muted-foreground">{profile.about}</p>

          <div className="flex flex-row gap-2">
            {profile.social.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className={cn(
                  buttonVariants({ variant: 'secondary', size: 'icon' }),
                )}
              >
                <social.icon className="text-xl" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center gap-2">
            <H1>Links</H1>
          </div>

          <ul>
            {links.map((link) => (
              <li key={link.anchor}>
                <Link
                  href={link.anchor}
                  className={cn(buttonVariants({ variant: 'link' }), 'px-0')}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
