export interface ExperienceEntry {
  role: string
  company: string
  period: string
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Developer',
    company: 'FFUF Manila',
    period: 'October 2022 — Present',
    highlights: [
      'Design and implement backend services in Kotlin and Spring Boot following Hexagonal Architecture.',
      'Develop RESTful APIs supporting web and mobile applications.',
      'Implement domain-driven modules using aggregates, commands, and domain events.',
      'Build a document-signing service that embeds digital signatures into PDF files using Apache PDFBox.',
      'Implement batch data-synchronization jobs importing legacy system data into domain entities.',
      'Integrate external APIs for validation and document-verification workflows.',
      'Write comprehensive unit and integration tests using JUnit5 and MockK.',
      'Refactor legacy implementations into modular backend components for better maintainability.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'New Era University',
  period: '2008 — 2013',
}

export const certification = {
  name: 'Full Stack Coding Bootcamp',
  school: 'Zuitt Philippines',
  period: '2019 — 2020',
}
