import Icon from './Icon'

export default function PageHero({ eyebrow, titleWhite, titleBlue, description, icon, breadcrumb }) {
  return (
    <section className="hero-glow relative bg-black overflow-hidden">
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
              <p className="text-accent font-semibold text-sm tracking-[0.12em] uppercase mb-2">
                {eyebrow}
              </p>
            )}
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold">
              <span className="block text-white">{titleWhite}</span>
              <span className="block text-gradient-brand">{titleBlue}</span>
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
