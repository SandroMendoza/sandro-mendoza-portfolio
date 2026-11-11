import { CodeXml, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { PageContainer } from '@/components/layout/PageContainer'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { isNavItemActive, navItems } from '@/lib/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname, hash } = useLocation()

  return (
    <header className="border-border bg-bg/80 sticky top-0 z-50 border-b backdrop-blur">
      <PageContainer className="flex h-16 items-center justify-between">
        <Link
          to="/"
          className="text-text flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          <CodeXml className="text-violet h-5 w-5" aria-hidden />
          SANDRO.DEV
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`hover:text-text text-sm font-medium transition-colors ${
                isNavItemActive(item.href, pathname, hash) ? 'text-violet' : 'text-text-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="border-border bg-surface text-text inline-flex h-9 w-9 items-center justify-center rounded-full border"
          >
            {isOpen ? (
              <X className="h-4 w-4" aria-hidden />
            ) : (
              <Menu className="h-4 w-4" aria-hidden />
            )}
          </button>
        </div>
      </PageContainer>

      {isOpen && (
        <nav className="border-border bg-bg border-t md:hidden" aria-label="Primary mobile">
          <PageContainer className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-2 py-2 text-sm font-medium ${
                  isNavItemActive(item.href, pathname, hash) ? 'text-violet' : 'text-text-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </PageContainer>
        </nav>
      )}
    </header>
  )
}
