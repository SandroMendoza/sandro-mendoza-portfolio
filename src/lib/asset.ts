/** Prefixes a root-relative public asset path with Vite's configured base
 * path, so static assets resolve correctly when the site is served from a
 * subpath (e.g. a GitHub Pages project site). */
export function withBase(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
