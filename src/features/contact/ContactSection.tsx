import { Download, Mail } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { contact } from '@/data/contact'

const links = [
  { label: 'GitHub', value: 'SandroMendoza', href: contact.github, icon: GithubIcon },
  { label: 'LinkedIn', value: 'sandro-pongos-mendoza', href: contact.linkedin, icon: LinkedinIcon },
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
]

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
      <PageContainer className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-violet font-mono text-xs font-semibold tracking-[0.2em] uppercase">
            Contact
          </p>
          <h2 className="text-text mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Build Something Meaningful
          </h2>
          <p className="text-text-muted mt-4 max-w-md">
            I'm interested in opportunities where thoughtful engineering, reliable systems, and
            continuous learning come together.
          </p>
          <p className="text-text-muted mt-4 max-w-md">
            Whether you're looking for a software developer or simply want to discuss an interesting
            technical project, I'd be happy to connect.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${contact.email}`} external>
              Email Me
            </ButtonLink>
            <ButtonLink href={contact.resume} variant="secondary" external>
              <Download className="h-4 w-4" aria-hidden />
              Download Resume
            </ButtonLink>
          </div>
        </div>

        <div className="space-y-3">
          {links.map((link) => (
            <Card key={link.label} className="flex items-center gap-4">
              <span className="bg-violet/10 text-violet flex h-10 w-10 items-center justify-center rounded-full">
                <link.icon className="h-5 w-5" aria-hidden />
              </span>
              <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-violet">
                <p className="text-text-muted text-xs font-semibold tracking-wide uppercase">
                  {link.label}
                </p>
                <p className="text-text text-sm font-medium">{link.value}</p>
              </a>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
