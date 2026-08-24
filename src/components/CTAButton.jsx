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
    // The single accent — Google Blue, for the one action that matters.
    primary:
      'bg-accent-strong text-white shadow-lg shadow-accent-strong/25 hover:brightness-110 hover:shadow-xl hover:shadow-accent-strong/30 focus-visible:ring-accent-strong',
    // Solid white pill — for contrast against blue or busy card grounds.
    secondary:
      'bg-white text-black hover:bg-white/90 focus-visible:ring-white',
    // Outline — secondary action on dark grounds.
    outline:
      'border border-white/25 text-white hover:bg-white hover:text-black focus-visible:ring-white/40',
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
