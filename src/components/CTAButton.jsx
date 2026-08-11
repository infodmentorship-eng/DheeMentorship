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
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  const sizes = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }
  const variants = {
    // The brand's one CTA accent — gold, used sparingly for the single action that matters.
    primary:
      'bg-gold text-navy shadow-lg shadow-gold/25 hover:bg-gold-dark hover:shadow-xl hover:shadow-gold/30 focus-visible:ring-gold',
    // Navy solid — for a primary action on cream/white grounds where gold is already in use nearby.
    navy:
      'bg-navy text-white shadow-lg shadow-navy/20 hover:bg-navy-dark focus-visible:ring-navy/40',
    // White fill — for use on navy or gradient grounds.
    secondary:
      'bg-white text-navy hover:bg-cream focus-visible:ring-white',
    // Outline — for use on navy or gradient grounds as a secondary action.
    outline:
      'border-2 border-white/80 text-white hover:bg-white hover:text-navy focus-visible:ring-white',
    // Ghost — secondary action on light grounds.
    ghost:
      'border-2 border-navy text-navy hover:bg-navy hover:text-white focus-visible:ring-navy/30',
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
