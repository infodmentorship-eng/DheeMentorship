import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../data/site'
import Icon from './Icon'
import CTAButton from './CTAButton'
import logo from '../assets/logo.png'

function UnderlineLink({ to, end, isActive, children, className = '' }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={`group relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive ? 'text-white' : 'text-muted hover:text-white'
      } ${className}`}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-0.5 h-0.75 w-full bg-accent-strong origin-left transition-transform duration-200 ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)' }}
      />
    </NavLink>
  )
}

function DesktopNavItem({ link, isActive }) {
  if (!link.children) {
    return (
      <UnderlineLink to={link.to} end={link.to === '/'} isActive={isActive}>
        {link.label}
      </UnderlineLink>
    )
  }

  return (
    <div className="relative group">
      <div className="flex items-center gap-1">
        <UnderlineLink to={link.to} isActive={isActive}>
          {link.label}
        </UnderlineLink>
        <Icon name="chevron" className="w-3 h-3 rotate-90 text-muted" />
      </div>
      <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
        <div className="w-64 rounded-2xl border border-white/10 bg-card shadow-xl shadow-black/60 p-2">
          {link.children.map((child) => (
            <NavLink
              key={child.label}
              to={child.to}
              className={({ isActive: childActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  childActive
                    ? 'text-white bg-white/8'
                    : 'text-muted hover:text-white hover:bg-white/8'
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
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center shrink-0">
            <span className="rounded-xl bg-white p-1 shrink-0">
              <img src={logo} alt="Dhee Mentorship" className="h-12 lg:h-14 w-auto" />
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 ml-8">
            {NAV_LINKS.map((link) => (
              <DesktopNavItem key={link.label} link={link} isActive={isLinkActive(link)} />
            ))}
          </nav>

          <div className="hidden lg:flex items-center ml-auto">
            <CTAButton size="md" icon={null}>
              Book Free Consultation
            </CTAButton>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} className="w-7 h-7" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black">
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
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isLinkActive(link) ? 'text-white bg-white/8' : 'text-muted'
                    }`}
                  >
                    {link.label}
                    <Icon
                      name="chevron"
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
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
                            `px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                              isActive ? 'text-white bg-white/8' : 'text-muted'
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
                    `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-white bg-white/8' : 'text-muted'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
            <div className="px-3 pt-2">
              <CTAButton size="md" icon={null} className="w-full">
                Book Free Consultation
              </CTAButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
