import { useEffect } from 'react'

interface DocumentMeta {
  title: string
  description: string
}

function setMetaTag(name: string, content: string) {
  let tag =
    document.querySelector(`meta[name="${name}"]`) ??
    document.querySelector(`meta[property="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(name.startsWith('og:') ? 'property' : 'name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

/** Sets per-route title/description on mount. Client-only — non-JS crawlers
 * only ever see the root index.html's OG tags, not these. */
export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title
    setMetaTag('description', description)
    setMetaTag('og:title', title)
    setMetaTag('og:description', description)

    return () => {
      document.title = previousTitle
    }
  }, [title, description])
}
