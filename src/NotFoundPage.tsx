import { PageContainer } from '@/components/layout/PageContainer'
import { ButtonLink } from '@/components/ui/Button'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export function NotFoundPage() {
  useDocumentMeta({
    title: 'Page not found — Sandro Mendoza',
    description: 'The page you are looking for does not exist.',
  })

  return (
    <PageContainer className="flex flex-col items-center justify-center py-24 text-center sm:py-32">
      <p className="text-violet font-mono text-sm font-semibold">404</p>
      <h1 className="text-text mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="text-text-muted mt-4 max-w-md">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back to Home
      </ButtonLink>
    </PageContainer>
  )
}
