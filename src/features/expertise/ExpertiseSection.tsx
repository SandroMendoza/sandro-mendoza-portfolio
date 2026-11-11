import { PageContainer } from '@/components/layout/PageContainer'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillCategories } from '@/data/skills'

export function ExpertiseSection() {
  return (
    <section id="expertise" className="scroll-mt-24 py-16 sm:py-24">
      <PageContainer>
        <SectionHeading
          eyebrow="Expertise"
          title="Technologies and practices I use to build reliable software."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <h3 className="text-text text-sm font-bold">{category.title}</h3>
              <p className="text-text-muted mt-2 text-sm">{category.items.join(', ')}</p>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
