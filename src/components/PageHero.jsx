import Icon from './Icon'
import CompassMotif from './CompassMotif'

export default function PageHero({ eyebrow, titleWhite, titleBlue, description, icon, breadcrumb }) {
  return (
    <section className="relative bg-black overflow-hidden">
      <CompassMotif className="absolute -top-16 -right-16 w-72 h-72 text-white/6 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {breadcrumb && (
          <p className="text-sm text-muted mb-3">{breadcrumb}</p>
        )}
        <div className="flex items-center gap-4">
          {icon && (
            <span className="hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-strong/15 text-accent shrink-0">
              <Icon name={icon} className="w-7 h-7" />
            </span>
          )}
          <div>
            {eyebrow && (
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-2">
                {eyebrow}
              </p>
            )}
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.05]">
              <span className="block text-white">{titleWhite}</span>
              <span className="block text-accent">{titleBlue}</span>
            </h1>
          </div>
        </div>
        {description && (
          <p className="mt-5 max-w-2xl text-muted text-base lg:text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
