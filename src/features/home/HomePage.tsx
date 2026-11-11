import { AboutSection } from '@/features/about/AboutSection'
import { ContactSection } from '@/features/contact/ContactSection'
import { ExperienceSection } from '@/features/experience/ExperienceSection'
import { ExpertiseSection } from '@/features/expertise/ExpertiseSection'
import { HeroSection } from '@/features/home/sections/HeroSection'
import { SelectedProjectsSection } from '@/features/home/sections/SelectedProjectsSection'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export function HomePage() {
  useDocumentMeta({
    title: 'Sandro Mendoza — Software Developer, Backend Engineering',
    description:
      'Building reliable systems with thoughtful design. Backend engineering, Hexagonal Architecture, and automated testing.',
  })

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SelectedProjectsSection />
      <ExpertiseSection />
      <ExperienceSection />
      <ContactSection />
    </>
  )
}
