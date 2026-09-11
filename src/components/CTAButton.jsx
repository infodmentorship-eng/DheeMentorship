import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function CTAButton({
  to = '/contact',
  href,
  children = 'Book Free Consultation',
  variant = 'primary',
  size = 'md',
  icon = 'arrow-right',
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black'
  const sizes = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }
  const variants = {
    // Primary — brand-1 → brand-2 gradient, the one action that matters.
    primary:
      'bg-[linear-gradient(90deg,var(--brand-1),var(--brand-2))] text-white shadow-[0_8px_30px_rgba(79,70,229,0.35)] hover:bg-[linear-gradient(115deg,var(--brand-1),var(--brand-2))] hover:shadow-[0_12px_40px_rgba(79,70,229,0.45)] hover:-translate-y-0.5 focus-visible:ring-[var(--brand-1)]',
    // Solid light pill — for contrast against blue or busy card grounds.
    secondary:
      'bg-white text-black hover:bg-white/90 focus-visible:ring-white',
    // Outline — transparent + hairline border, brightens on hover.
    outline:
      'border border-white/8 text-white hover:border-white/20 focus-visible:ring-white/40',
    // Ghost — tertiary text-style action.
    ghost:
      'text-muted hover:text-white hover:bg-white/8 focus-visible:ring-white/30',
  }
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <Icon name={icon} className="w-4 h-4" />}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {children}
      {icon && <Icon name={icon} className="w-4 h-4" />}
    </Link>
  )
}
