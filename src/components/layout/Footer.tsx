import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { contact } from '@/data/contact'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-8 text-sm sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-text-muted">&copy; {year} Sandro Mendoza. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-violet"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-violet"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="text-text-muted hover:text-violet"
          >
            <Mail className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
