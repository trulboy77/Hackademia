// app/layout.tsx
import './globals.css'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '../components/ThemeProvider'
import { getMessages } from '../lib/getMessages' // adjust path if needed
import { Inter } from 'next/font/google'

// Example font
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Hackademia',
  description: 'Hackademia project',
  generator: 'v0.app',
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages(locale) // fetch translations/messages

  return (
    <html lang={locale} className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div id="skip-link" className="sr-only">
              <a href="#main-content" className="skip-link">
                Skip to main content
              </a>
            </div>
            <main id="main-content" role="main">
              {children}
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
  