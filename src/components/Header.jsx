import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/site'
import Icon from './Icon'
import CTAButton from './CTAButton'

function DesktopNavItem({ link, isActive }) {
  if (!link.children) {
    return (
      <NavLink
        to={link.to}
        end={link.to === '/'}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? 'text-navy bg-horizon-light'
            : 'text-ink/70 hover:text-navy hover:bg-horizon-light/60'
        }`}
      >
        {link.label}
      </NavLink>
    )
  }

  return (
    <div className="relative group">
      <NavLink
        to={link.to}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? 'text-navy bg-horizon-light'
            : 'text-ink/70 hover:text-navy hover:bg-horizon-light/60'
        }`}
      >
        {link.label}
        <Icon name="chevron" className="w-3 h-3 rotate-90" />
      </NavLink>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-150">
        <div className="w-64 rounded-xl border border-horizon/15 bg-white shadow-xl shadow-navy/10 p-2">
          {link.children.map((child) => (
            <NavLink
              key={child.label}
              to={child.to}
              className={({ isActive: childActive }) =>
                `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  childActive
                    ? 'text-navy bg-horizon-light'
                    : 'text-ink/70 hover:text-navy hover:bg-horizon-light/60'
                }`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  const isLinkActive = (link) =>
    location.pathname === link.to ||
    (link.children?.some((c) => location.pathname === c.to) ?? false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-horizon/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-navy text-white font-bold text-lg">
              D
            </span>
            <span className="flex flex-col leading-tight text-left">
              <span className="font-bold text-lg text-navy">Dhee Mentorship</span>
              <span className="text-[11px] font-medium text-horizon tracking-wide">
                {SITE.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <DesktopNavItem key={link.label} link={link} isActive={isLinkActive(link)} />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-1.5 text-sm font-semibold text-ink/80 hover:text-navy"
              >
                <Icon name="phone" className="w-4 h-4 text-horizon" />
                {SITE.phone}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors shrink-0"
              >
                <Icon name="whatsapp" className="w-4 h-4" />
              </a>
            </div>
            <CTAButton size="md">Book Free Consultation</CTAButton>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-navy"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} className="w-7 h-7" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-horizon/15 bg-white">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded((v) => (v === link.label ? null : link.label))
                    }
                    aria-expanded={mobileExpanded === link.label}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                      isLinkActive(link) ? 'text-navy bg-horizon-light' : 'text-ink/80'
                    }`}
                  >
                    {link.label}
                    <Icon
                      name="chevron"
                      className={`w-3.5 h-3.5 transition-transform ${
                        mobileExpanded === link.label ? '-rotate-90' : 'rotate-90'
                      }`}
                    />
                  </button>
                  {mobileExpanded === link.label && (
                    <div className="pl-4 flex flex-col gap-0.5 mt-0.5">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.to}
                          className={({ isActive }) =>
                            `px-3 py-2 rounded-lg text-sm ${
                              isActive ? 'text-navy bg-horizon-light' : 'text-ink/70'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-sm font-medium ${
                      isActive ? 'text-navy bg-horizon-light' : 'text-ink/80'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
            <div className="flex items-center gap-3 px-3 py-2.5">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-1.5 text-sm font-semibold text-ink/80"
              >
                <Icon name="phone" className="w-4 h-4 text-horizon" />
                {SITE.phone}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] shrink-0"
              >
                <Icon name="whatsapp" className="w-4 h-4" />
              </a>
            </div>
            <div className="px-3 pt-2">
              <CTAButton size="md" className="w-full">
                Book Free Consultation
              </CTAButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
