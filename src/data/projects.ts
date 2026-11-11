export interface Project {
  slug: string
  title: string
  summary: string
  category: 'Backend' | 'Mobile' | 'Web'
  technologies: string[]
  problem: string
  solution: string
  architecture: string
  challenges: string
  repository: string
  demo?: string
  documentation?: string
  images: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    slug: 'hexagonal-template',
    title: 'Java Spring Boot Hexagonal Template',
    summary:
      'A Java/Spring Boot project demonstrating Hexagonal Architecture and a structured foundation for maintainable backend applications.',
    category: 'Backend',
    technologies: ['Java', 'Spring Boot', 'Gradle (Kotlin DSL)', 'Hexagonal Architecture'],
    problem:
      'Backend services often grow a tangle of dependencies between business logic, frameworks, and infrastructure, making them harder to test and change over time.',
    solution:
      'A Spring Boot template built around Hexagonal Architecture (Ports and Adapters), separating the application core from the frameworks and infrastructure around it, so the domain stays testable and framework decisions stay swappable.',
    architecture:
      'The domain sits at the center as the application core. Inbound adapters (controllers) and outbound adapters (persistence, external services) depend on the core through ports — interfaces the core defines and the adapters implement — keeping dependencies pointing inward.',
    challenges:
      'The project is an early-stage template (a handful of commits so far), so it is scoped as a reference foundation rather than a feature-complete product — the priority was getting the architectural boundaries right before building features on top of them.',
    repository: 'https://github.com/SandroMendoza/java-springboot-hexagonal-template',
    images: [],
  },
  {
    slug: 'meal-planner',
    title: 'Meal Planner',
    summary:
      'A Kotlin Multiplatform application targeting Android and iOS, with a shared codebase organized into data, domain, and presentation layers.',
    category: 'Mobile',
    technologies: [
      'Kotlin Multiplatform',
      'Compose Multiplatform',
      'Android',
      'iOS',
      'Gradle (Kotlin DSL)',
      'Codemagic',
    ],
    problem:
      'Building and maintaining separate native codebases for Android and iOS duplicates business logic and makes it easy for the two platforms to drift apart.',
    solution:
      'A Kotlin Multiplatform project with a `shared` module holding common business logic across `commonMain`, with `androidApp` and `iosApp` as thin platform entry points, and a Compose Multiplatform UI shared across both targets.',
    architecture:
      'The shared module is layered into data, domain, and presentation packages, keeping platform-specific code isolated to the app entry points while the core logic and UI stay common. Codemagic handles CI across both platforms.',
    challenges:
      "Keeping a single UI and domain layer consistent across Android and iOS while still respecting each platform's conventions and lifecycle required careful boundaries between the shared module and the platform entry points.",
    repository: 'https://github.com/SandroMendoza/MealPlanner',
    images: [],
  },
  {
    slug: 'kc-art-gallery',
    title: 'KC Art Gallery',
    summary:
      "A Next.js web application presenting an artist's portfolio as a social-feed-style gallery, with sign-in and its own theme toggle.",
    category: 'Web',
    technologies: ['Next.js', 'Tailwind CSS', 'Prisma'],
    problem:
      'An artist needed a dedicated place to present original artwork online, with more context per piece than a generic social media post allows.',
    solution:
      'A Next.js application presenting a profile introduction followed by a reverse-chronological feed of artwork — each post carries a title, the materials and technique used, an image, an engagement count, and a timestamp. The app includes sign-in and a light/dark theme toggle of its own.',
    architecture:
      'Built with Next.js and Tailwind CSS, with Prisma handling the data layer for posts and users.',
    challenges:
      'The repository itself is a lean Next.js/Prisma foundation; the richer feed behavior (sign-in, per-post metadata, theming) lives in the deployed application — see the live demo below for the actual experience.',
    repository: 'https://github.com/SandroMendoza/kc-art-gallery',
    demo: 'https://kc-art-gallery.vercel.app/',
    images: [
      {
        src: 'images/projects/kc-art-gallery/app-screenshot.webp',
        alt: 'KC Art Gallery app showing the artist profile and an artwork feed post with its title and materials used',
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
