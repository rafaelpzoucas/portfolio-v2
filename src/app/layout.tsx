import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rafael Zoucas | Desenvolvedor de Landing Pages',
  description:
    'Desenvolvedor de Landing Pages e Websites Profissionais: Converta leads e aumente suas vendas com páginas de vendas eficazes. Desenvolvimento de sites personalizados para empresas, especializado na criação de páginas de vendas profissionais. Confira nossos serviços de desenvolvimento de website e landing page para uma presença online impactante. Sua empresa merece um site que converta. Entre em contato com o desenvolvedor de site profissional para criar a sua página de vendas agora mesmo.',
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
          <footer className="flex items-center justify-center text-center text-sm p-4 text-muted-foreground">
            <p>© 2024 Rafael Zoucas. Todos os direitos reservados</p>
          </footer>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-X73KYHYZ28" />
      </body>
    </html>
  )
}
