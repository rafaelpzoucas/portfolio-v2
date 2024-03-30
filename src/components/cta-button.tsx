'use client'

import { cta } from '@/data/cta'
import { cn } from '@/lib/utils'
import { sendGAEvent } from '@next/third-parties/google'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

export function CTAButton({ className }: { className?: string }) {
  const router = useRouter()

  const action = cta.actions[0]
  function handleClick() {
    sendGAEvent({ event: 'buttonClicked', value: 'xyz' })
    router.push('https://wa.me/5518998261736')
  }

  return (
    <Button
      onClick={handleClick}
      className={cn(
        className,
        'bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full md:w-fit',
      )}
    >
      <action.icon className="mr-2 text-lg" />
      {action.button_text}
      {/* <ArrowRight className="w-4 h-4 ml-2" /> */}
    </Button>
  )
}
