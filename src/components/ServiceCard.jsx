import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function ServiceCard({ to, icon, title, short }) {
  return (
    <Link
      to={to}
      className="group flex flex-col h-full p-6 rounded-2xl border border-horizon/20 bg-white hover:border-horizon hover:shadow-xl hover:shadow-navy/5 transition-all duration-200"
    >
      <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-horizon-light text-horizon group-hover:bg-navy group-hover:text-white transition-colors">
        <Icon name={icon} className="w-6 h-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-ink/70 leading-relaxed flex-1">{short}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-horizon group-hover:gap-2.5 transition-all">
        Learn more
        <Icon name="arrow-right" className="w-4 h-4" />
      </span>
    </Link>
  )
}
