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

export const earlierExperience: ExperienceEntry[] = [
  {
    role: 'IT Staff / Customer Support Representative / QA & Audit',
    company: 'DATAMODE',
    period: 'December 2017 — October 2022',
    highlights: [
      'Maintained internal IT systems, performed troubleshooting, conducted QA checks, and ensured accuracy of processed medical record requests.',
    ],
  },
  {
    role: 'Technical Support Representative (Chat Support)',
    company: 'Transcom PH',
    period: 'May 2017 — July 2017',
    highlights: [
      'Provided technical support for customers regarding internet connectivity, telephone services, and billing concerns through chat support.',
    ],
  },
  {
    role: 'Technical Support Representative',
    company: 'SYKES INC.',
    period: 'July 2016 — December 2016',
    highlights: [
      'Provided technical support to clients by troubleshooting product and service issues, assisting with account setup and configuration, and guiding users through instructions to effectively use the system.',
    ],
  },
  {
    role: 'Technical Support Staff',
    company: 'PUREGOLD PRICECLUB INC.',
    period: 'February 2015 — June 2016',
    highlights: [
      'Administered store servers and systems, troubleshot network and computer-related issues, supported employees with business software and web applications, and maintained store equipment including computers, printers, POS systems, price verifiers, and weighing scales to ensure smooth daily operations.',
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
