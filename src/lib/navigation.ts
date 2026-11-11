export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

/** NavLink's default active-match only looks at pathname, so the plain "/"
 * Home link and every hash link to "/" (About, Projects, ...) all resolve
 * to the same pathname and would highlight together. This compares
 * pathname and hash together so only the item matching both is active. */
export function isNavItemActive(href: string, pathname: string, hash: string): boolean {
  const [hrefPath, hrefHash] = href.split('#')
  const targetPath = hrefPath || '/'
  const targetHash = hrefHash ? `#${hrefHash}` : ''
  return pathname === targetPath && hash === targetHash
}
