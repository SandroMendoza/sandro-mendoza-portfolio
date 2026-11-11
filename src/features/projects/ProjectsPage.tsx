import { useState } from 'react'
import { PageContainer } from '@/components/layout/PageContainer'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects, type Project } from '@/data/projects'
import { ProjectCard } from '@/features/projects/ProjectCard'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

const categories: Array<Project['category'] | 'All'> = ['All', 'Backend', 'Mobile', 'Web']

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All')

  useDocumentMeta({
    title: 'Projects — Sandro Mendoza',
    description:
      'Personal and technical projects that showcase a backend-first engineering approach.',
  })

  const visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <PageContainer className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Personal and technical projects that showcase my engineering approach."
      />

      <div
        className="mt-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-violet text-white'
                : 'border-border bg-surface text-text-muted hover:text-text border'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </PageContainer>
  )
}
