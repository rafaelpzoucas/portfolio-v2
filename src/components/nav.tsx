'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const navigation = [
  {
    name: 'Projetos',
    link: 'projects',
  },
  {
    name: 'Soluções',
    link: 'solutions',
  },
  {
    name: 'Processo criativo',
    link: 'creative-steps',
  },
  {
    name: 'Contato',
    link: 'contact',
  },
  {
    name: 'FAQ',
    link: 'faq',
  },
]

export function Nav() {
  const [hash, setHash] = useState('')

  function handleScroll() {
    const scrollPosition = window.scrollY
    const offset = window.innerHeight * (3 / 4)
    const projectsPosition = document.getElementById('projects')?.offsetTop
    const solutionsPosition = document.getElementById('solutions')?.offsetTop
    const creativeStepsPosition =
      document.getElementById('creative-steps')?.offsetTop
    const contactPosition = document.getElementById('contact')?.offsetTop
    const faqPosition = document.getElementById('faq')?.offsetTop

    if (
      projectsPosition &&
      solutionsPosition &&
      creativeStepsPosition &&
      contactPosition &&
      faqPosition
    ) {
      if (scrollPosition < projectsPosition) {
        setHash('')
      }
      if (scrollPosition > projectsPosition - offset) {
        setHash('projects')
      }
      if (scrollPosition > solutionsPosition - offset) {
        setHash('solutions')
      }
      if (scrollPosition > creativeStepsPosition - offset) {
        setHash('creative-steps')
      }
      if (scrollPosition > contactPosition - offset) {
        setHash('contact')
      }
      if (scrollPosition > faqPosition - offset) {
        setHash('faq')
      }
    }
  }

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav>
      <ul className="hidden sm:flex flex-col space-y-4 w-fit overflow-hidden">
        {navigation.map((nav) => (
          <Link key={nav.link} href={`#${nav.link}`}>
            <li
              className={cn(
                'opacity-30 hover:opacity-100 -translate-x-[59px]',
                "before:content-['--->'] before:mr-4 before:w-10 before:h-[2px] before:text-white",
                'data-[active=true]:opacity-100 data-[active=true]:translate-x-0 transition-transform duration-100',
              )}
              data-active={hash === nav.link}
            >
              {nav.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
