import { useEffect } from 'react'
import { useLocation } from 'react-router'

/** Scrolls to the element matching the URL hash on route/hash changes, and to
 * the top of the page otherwise — react-router does not do this on its own. */
export function useScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const id = hash.slice(1)
    const target = document.getElementById(id)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [pathname, hash])
}
