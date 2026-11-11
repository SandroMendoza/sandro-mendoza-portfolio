import type { ReactNode } from 'react'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-card border-border bg-surface border p-6 ${className}`}>
      {children}
    </div>
  )
}
