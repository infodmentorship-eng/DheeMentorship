import Icon from './Icon'
import CompassMotif from './CompassMotif'

export default function PageHero({ eyebrow, title, description, icon, breadcrumb }) {
  return (
    <section className="relative bg-navy overflow-hidden">
      <CompassMotif className="absolute -top-16 -right-16 w-72 h-72 text-white/8 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {breadcrumb && (
          <p className="text-sm text-white/50 mb-3">{breadcrumb}</p>
        )}
        <div className="flex items-center gap-4">
          {icon && (
            <span className="hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-teal shrink-0">
              <Icon name={icon} className="w-7 h-7" />
            </span>
          )}
          <div>
            {eyebrow && (
              <p className="text-gold font-semibold text-sm tracking-wide uppercase mb-2">
                {eyebrow}
              </p>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {title}
            </h1>
          </div>
        </div>
        {description && (
          <p className="mt-5 max-w-2xl text-white/70 text-base lg:text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
