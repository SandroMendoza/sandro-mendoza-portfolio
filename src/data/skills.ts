export interface SkillCategory {
  title: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Engineering',
    items: ['Kotlin', 'Java', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Software Architecture',
    items: ['Hexagonal Architecture', 'Domain-Driven Design (DDD)', 'Clean Architecture'],
  },
  {
    title: 'Testing',
    items: ['JUnit 5', 'MockK', 'Automated Testing'],
  },
  {
    title: 'Data & Persistence',
    items: ['SQL', 'MySQL', 'MongoDB', 'Database Integration', 'Persistence'],
  },
  {
    title: 'Application Development',
    items: ['Kotlin Multiplatform', 'Android', 'iOS'],
  },
  {
    title: 'Web Development',
    items: ['React', 'TypeScript', 'Next.js'],
  },
]
