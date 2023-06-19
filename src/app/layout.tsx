 
import { fontSans } from "@/lib/fonts"
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import { cn } from "@/lib/utils"
import { siteConfig } from '@/config/site' 
import DashboardTabs from '@/components/dashboard-tabs'
import { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //<NavBar>1</NavBar>

  return (
    <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
          </ThemeProvider>
        
      <footer className="border-t bg-black text-white font-bold border-gray-300 py-4 rounded-t-xl text-center text-sm">
        © Copyright {new Date().getFullYear()} of nobody.
        
      </footer> </body>
    </html>
  )
}
