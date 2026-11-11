import { ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router'
import { PageContainer } from '@/components/layout/PageContainer'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { getProjectBySlug } from '@/data/projects'
import { HexagonalDiagram } from '@/features/projects/diagrams/HexagonalDiagram'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { NotFoundPage } from '@/NotFoundPage'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'challenges', label: 'Challenges' },
]

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useDocumentMeta({
    title: project ? `${project.title} — Sandro Mendoza` : 'Project not found — Sandro Mendoza',
    description: project?.summary ?? 'This project could not be found.',
  })

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <PageContainer className="py-16 sm:py-24">
      <p className="text-text-muted text-sm">
        <Link to="/projects" className="hover:text-violet">
          Projects
        </Link>{' '}
        / <span className="text-text">{project.title}</span>
      </p>

      <h1 className="text-text mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <p className="text-text-muted mt-3 max-w-2xl">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="border-border bg-surface text-text-muted rounded-full border px-3 py-1 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.repository}
          target="_blank"
          rel="noreferrer"
          className="bg-violet inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
        >
          <GithubIcon className="h-4 w-4" />
          View on GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="border-border bg-surface text-text hover:border-violet inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold"
          >
            <ExternalLink className="h-4 w-4" aria-hidden />
            Live Demo
          </a>
        )}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 xl:grid-cols-[200px_1fr]">
        <nav className="hidden xl:block" aria-label="Case study sections">
          <ul className="border-border sticky top-24 space-y-1 border-l">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-text-muted hover:text-violet block border-l-2 border-transparent py-1 pl-4 text-sm font-medium hover:border-current"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-text text-xl font-bold">Overview</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed">
              <p className="text-text-muted">
                <span className="text-text font-semibold">Problem: </span>
                {project.problem}
              </p>
              <p className="text-text-muted">
                <span className="text-text font-semibold">Solution: </span>
                {project.solution}
              </p>
            </div>
          </section>

          <section id="architecture">
            <h2 className="text-text text-xl font-bold">Architecture</h2>
            <p className="text-text-muted mt-4 text-sm leading-relaxed">{project.architecture}</p>
            {project.slug === 'hexagonal-template' && (
              <div className="border-border bg-surface rounded-card mt-6 border p-6">
                <HexagonalDiagram />
              </div>
            )}
          </section>

          <section id="technologies">
            <h2 className="text-text text-xl font-bold">Technologies</h2>
            <ul className="text-text-muted mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
              {project.technologies.map((tech) => (
                <li key={tech} className="border-border bg-surface rounded-md border px-3 py-2">
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section id="challenges">
            <h2 className="text-text text-xl font-bold">Challenges and decisions</h2>
            <p className="text-text-muted mt-4 text-sm leading-relaxed">{project.challenges}</p>
          </section>

          {project.images.length > 0 && (
            <section id="screenshots">
              <h2 className="text-text text-xl font-bold">Screenshots</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.images.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className="rounded-card border-border border"
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </PageContainer>
  )
}
