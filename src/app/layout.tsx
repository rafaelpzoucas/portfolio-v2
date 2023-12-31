import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rafael Zoucas | Portfólio',
  description:
    'Desenvolvedor Front-end apaixonado por criar experiências digitais incríveis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={cn(inter.className, 'overflow-x-hidden')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <footer className="flex items-center justify-center text-center text-sm p-4 border-t">
            <p>© 2023 Rafael Zoucas. Todos os direitos reservados</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
