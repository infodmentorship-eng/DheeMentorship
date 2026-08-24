import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function ServiceCard({ to, icon, title, short }) {
  return (
    <Link
      to={to}
      className="group flex flex-col h-full p-6 rounded-[28px] border border-white/8 bg-card transition-all duration-250 hover:-translate-y-1 hover:border-white/18 hover:shadow-2xl hover:shadow-black/50"
    >
      <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-strong/15 text-accent group-hover:bg-accent-strong group-hover:text-white transition-colors duration-200">
        <Icon name={icon} className="w-6 h-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{short}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all duration-200">
        Learn more
        <Icon name="arrow-right" className="w-4 h-4" />
      </span>
    </Link>
  )
}
