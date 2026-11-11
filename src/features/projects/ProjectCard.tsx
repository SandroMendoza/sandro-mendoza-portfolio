import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { GithubIcon } from '@/components/ui/BrandIcons'
import type { Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group border-border bg-surface rounded-card hover:border-violet/50 flex h-full flex-col justify-between border p-6 transition-colors"
    >
      <div>
        <span className="bg-violet/10 text-violet rounded-full px-3 py-1 text-xs font-semibold">
          {project.category}
        </span>
        <h3 className="text-text mt-4 text-lg font-bold">{project.title}</h3>
        <p className="text-text-muted mt-2 text-sm">{project.summary}</p>
      </div>

      <div className="text-text-muted mt-6 flex items-center justify-between text-sm font-medium">
        <span className="inline-flex items-center gap-1.5">
          <GithubIcon className="h-4 w-4" />
          GitHub
        </span>
        <span className="group-hover:text-violet inline-flex items-center gap-1 transition-colors">
          View Details
          <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </Link>
  )
}
