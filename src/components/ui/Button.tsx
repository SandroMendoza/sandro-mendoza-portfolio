import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'

interface BaseProps {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  className?: string
}

const variantStyles: Record<NonNullable<BaseProps['variant']>, string> = {
  primary: 'bg-violet text-white hover:opacity-90',
  secondary: 'border border-border bg-transparent text-text hover:border-violet',
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet'

type LinkProps = BaseProps & { href: string; external?: boolean }
type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  variant = 'primary',
  children,
  className = '',
  href,
  external = false,
}: LinkProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  )
}
