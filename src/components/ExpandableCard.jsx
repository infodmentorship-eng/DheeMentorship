import { useState, useRef, useId } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function ExpandableCard({ pill, icon, headlineWhite, headlineBlue, long, to }) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const panelId = useId()

  return (
    <div className="group rounded-[28px] border border-white/8 bg-card p-6 sm:p-8 transition-all duration-250 hover:-translate-y-1 hover:border-white/18 hover:shadow-2xl hover:shadow-black/50">
      <div
        className="relative h-40 sm:h-48 rounded-2xl overflow-hidden flex items-center justify-center"
        style={{
          backgroundColor: '#111111',
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      >
        <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-strong/15 text-accent">
          <Icon name={icon} className="w-8 h-8" />
        </span>
      </div>

      <span className="inline-flex mt-5 px-3 py-1 rounded-full border border-white/20 text-xs font-medium text-muted">
        {pill}
      </span>

      <h3 className="mt-4 text-xl sm:text-2xl font-bold leading-[1.15] tracking-tight">
        <span className="block text-white">{headlineWhite}</span>
        <span className="block text-accent">{headlineBlue}</span>
      </h3>

      <div
        id={panelId}
        ref={panelRef}
        className="grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
        style={{ gridTemplateRows: open ? '1fr' : '0fr', opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <p className="mt-4 text-sm text-muted leading-relaxed">{long}</p>
          <Link
            to={to}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
          >
            Learn more
            <Icon name="arrow-right" className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? 'Collapse details' : 'Expand details'}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-strong text-white transition-transform duration-250 ease-[cubic-bezier(0.2,0,0,1)] hover:brightness-110"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <Icon name="plus" className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
