import { ArrowRight } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { ButtonLink } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ExperienceTimeline } from '@/features/experience/ExperienceTimeline'

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-24">
      <PageContainer>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Experience"
            title="My professional background in software development."
          />
          <ButtonLink href="/experience" variant="secondary">
            View All Experience
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>

        <ExperienceTimeline />
      </PageContainer>
    </section>
  )
}
