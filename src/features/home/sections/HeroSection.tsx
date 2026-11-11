import { Code2, Layers, Rocket } from 'lucide-react'
import { Link } from 'react-router'
import { BentoCard } from '@/components/bento/BentoCard'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { BentoGrid } from '@/components/bento/BentoGrid'
import { PageContainer } from '@/components/layout/PageContainer'
import { ButtonLink } from '@/components/ui/Button'
import { contact } from '@/data/contact'
import { withBase } from '@/lib/asset'

export function HeroSection() {
  return (
    <section className="py-12 sm:py-16">
      <PageContainer>
        <BentoGrid>
          <div className="md:col-span-6 xl:col-span-8 xl:row-span-2">
            <p className="text-violet font-mono text-xs font-semibold tracking-[0.2em] uppercase">
              Software Developer · Backend Engineering
            </p>
            <h1 className="text-text mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Building reliable systems with <span className="text-violet">thoughtful design.</span>
            </h1>
            <p className="text-text-muted mt-6 max-w-xl text-base leading-relaxed">
              I'm a Software Developer specializing in backend engineering, with experience building
              maintainable services, designing domain-driven systems, and developing reliable APIs.
            </p>
            <p className="text-text-muted mt-4 max-w-xl text-base leading-relaxed">
              My approach combines thoughtful architecture, clean code, and automated testing to
              create software that is easier to understand, maintain, and evolve.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/projects">Explore Projects</ButtonLink>
              <ButtonLink href="/#contact" variant="secondary">
                Contact Me
              </ButtonLink>
            </div>
          </div>

          <div className="flex items-center justify-center md:col-span-6 xl:col-span-4 xl:row-span-2">
            <div className="relative w-full max-w-xs">
              <div
                className="from-violet/60 via-violet/25 to-mint/20 absolute inset-0 -z-10 scale-125 rounded-[2rem] bg-gradient-to-br blur-3xl"
                aria-hidden
              />
              <img
                src={withBase('images/profile/profile-cutout.webp')}
                alt="Portrait of Sandro Mendoza"
                width={320}
                height={320}
                className="w-full"
              />
            </div>
          </div>

          <BentoCard className="md:col-span-3 xl:col-span-3">
            <Layers className="text-violet h-6 w-6" aria-hidden />
            <h3 className="text-text mt-3 text-sm font-bold">Architecture</h3>
            <p className="text-text-muted mt-1 text-xs">Hexagonal, DDD, Clean Architecture</p>
          </BentoCard>

          <BentoCard className="md:col-span-3 xl:col-span-3">
            <Code2 className="text-violet h-6 w-6" aria-hidden />
            <h3 className="text-text mt-3 text-sm font-bold">Technology Stack</h3>
            <p className="text-text-muted mt-1 text-xs">Kotlin, Java, Spring Boot, REST APIs</p>
          </BentoCard>

          <BentoCard className="md:col-span-3 xl:col-span-3">
            <Link to="/projects/hexagonal-template" className="block">
              <Rocket className="text-violet h-6 w-6" aria-hidden />
              <h3 className="text-text mt-3 text-sm font-bold">Featured Project</h3>
              <p className="text-text-muted mt-1 text-xs">Hexagonal Template</p>
            </Link>
          </BentoCard>

          <BentoCard className="md:col-span-3 xl:col-span-3">
            <a href={contact.github} target="_blank" rel="noreferrer" className="block">
              <GithubIcon className="text-violet h-6 w-6" />
              <h3 className="text-text mt-3 text-sm font-bold">GitHub</h3>
              <p className="text-text-muted mt-1 text-xs">SandroMendoza</p>
            </a>
          </BentoCard>
        </BentoGrid>
      </PageContainer>
    </section>
  )
}
