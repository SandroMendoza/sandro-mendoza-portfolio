import { ArrowRight } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { ButtonLink } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/features/projects/ProjectCard'

export function SelectedProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-24">
      <PageContainer>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Personal and technical projects that showcase my engineering approach."
          />
          <ButtonLink href="/projects" variant="secondary">
            View All Projects
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
