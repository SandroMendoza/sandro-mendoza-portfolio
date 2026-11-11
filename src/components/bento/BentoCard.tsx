import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface BentoCardProps {
  className?: string
  variant?: 'default' | 'accent' | 'outline'
  children: ReactNode
}

const variantStyles: Record<NonNullable<BentoCardProps['variant']>, string> = {
  default: 'bg-surface border-border',
  accent: 'bg-surface border-violet/40',
  outline: 'bg-transparent border-border',
}

export function BentoCard({ className = '', variant = 'default', children }: BentoCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      className={`rounded-card border p-6 transition-shadow duration-200 ease-out hover:shadow-[0_0_28px_-10px_var(--app-violet)] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.div>
  )
}
