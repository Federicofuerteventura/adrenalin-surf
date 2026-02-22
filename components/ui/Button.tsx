import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'navy' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

type ButtonProps =
  | (ButtonBaseProps & { as?: 'button' } & ComponentPropsWithoutRef<'button'>)
  | (ButtonBaseProps & { as: 'a'; href: string } & ComponentPropsWithoutRef<'a'>)
  | (ButtonBaseProps & { as: 'link'; href: string })

const variantClasses: Record<Variant, string> = {
  primary:   'btn-primary',
  secondary: 'btn-secondary',
  outline:   'btn-outline',
  navy:      'btn-navy',
  ghost:     'bg-transparent text-[var(--text)] hover:bg-black/5 border-transparent',
}

const sizeClasses: Record<Size, string> = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props
  const classes = cn('btn', variantClasses[variant], sizeClasses[size], className)

  if (props.as === 'link') {
    return (
      <Link href={(props as { href: string }).href} className={classes}>
        {children}
      </Link>
    )
  }

  if (props.as === 'a') {
    return (
      <a className={classes} {...(rest as ComponentPropsWithoutRef<'a'>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}
