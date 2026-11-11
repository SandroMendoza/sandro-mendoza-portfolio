import { PageContainer } from '@/components/layout/PageContainer'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ExperienceTimeline } from '@/features/experience/ExperienceTimeline'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export function ExperiencePage() {
  useDocumentMeta({
    title: 'Experience — Sandro Mendoza',
    description: 'Professional background, education, and certification in software development.',
  })

  return (
    <PageContainer className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="My professional background in software development."
      />
      <ExperienceTimeline />
    </PageContainer>
  )
}
