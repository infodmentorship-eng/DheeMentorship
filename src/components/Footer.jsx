import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/site'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-white shrink-0 p-1">
              <span className="flex items-center justify-center w-full h-full rounded bg-navy text-white font-bold text-lg">
                D
              </span>
            </span>
            <span className="font-bold text-lg text-white">Dhee Mentorship</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {SITE.tagline}. Your trusted partner for study abroad, visa, attestation, and
            translation services.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-teal transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
            Services
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/study-abroad" className="hover:text-teal transition-colors">Study Abroad Consultancy</Link></li>
            <li><Link to="/visa-assistance" className="hover:text-teal transition-colors">Visa Assistance</Link></li>
            <li><Link to="/apostille-attestation" className="hover:text-teal transition-colors">Apostille &amp; Attestation</Link></li>
            <li><Link to="/visa-assistance" className="hover:text-teal transition-colors">PCC Assistance</Link></li>
            <li><Link to="/document-translation" className="hover:text-teal transition-colors">Document Translation</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Icon name="map-pin" className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="phone" className="w-4 h-4 shrink-0 text-gold" />
              <a href={SITE.phoneHref} className="hover:text-teal transition-colors">{SITE.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="mail" className="w-4 h-4 shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="hover:text-teal transition-colors">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="clock" className="w-4 h-4 shrink-0 text-gold" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Dhee Mentorship. All rights reserved.</p>
          <p>Guiding journeys from Ramanathapuram to the world.</p>
        </div>
      </div>
    </footer>
  )
}
