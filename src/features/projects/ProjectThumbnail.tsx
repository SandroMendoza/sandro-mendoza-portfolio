import { Smartphone } from 'lucide-react'
import type { Project } from '@/data/projects'
import { HexagonalDiagram } from '@/features/projects/diagrams/HexagonalDiagram'
import { withBase } from '@/lib/asset'

export function ProjectThumbnail({ project }: { project: Project }) {
  if (project.slug === 'hexagonal-template') {
    return (
      <div className="flex h-full w-full items-center justify-center p-6">
        <HexagonalDiagram />
      </div>
    )
  }

  const [image] = project.images
  if (image) {
    return (
      <img
        src={withBase(image.src)}
        alt={image.alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    )
  }

  return (
    <div className="from-violet/20 to-mint/10 flex h-full w-full items-center justify-center bg-gradient-to-br">
      <Smartphone className="text-violet h-12 w-12" aria-hidden />
    </div>
  )
}
