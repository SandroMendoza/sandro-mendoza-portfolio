import type { ReactNode } from 'react'

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 xl:auto-rows-[minmax(120px,auto)] xl:grid-cols-12">
      {children}
    </div>
  )
}
