import { PageContainer } from '@/components/layout/PageContainer'
import { SectionHeading } from '@/components/ui/SectionHeading'

const paragraphs = [
  "I'm a Software Developer with a strong interest in backend engineering, software architecture, and building maintainable systems.",
  'I enjoy understanding complex problems, designing structured solutions, and writing software that remains reliable as it evolves.',
  'My engineering approach emphasizes clear boundaries, thoughtful design, automated testing, and continuous improvement.',
  'Beyond backend development, I also explore cross-platform applications and web technologies through personal projects.',
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <PageContainer>
        <SectionHeading
          eyebrow="About Me"
          title="A developer who values structure, quality, and long-term maintainability."
        />
        <div className="mt-8 grid max-w-3xl gap-4">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-text-muted text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
