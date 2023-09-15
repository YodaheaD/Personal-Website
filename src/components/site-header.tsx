import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/sub/main-nav"
import { ThemeToggle } from "@/components/sub/theme-toggle"
import Link from "next/link"
 
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#008AD7] dark:border-white bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href="login">
              Login
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
