import { useId, useState } from 'react'
import Icon from './Icon'

function FaqRow({ item, open, onToggle }) {
  const panelId = useId()
  return (
    <div className="border-b border-white/12">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-6 py-5 text-left"
      >
        <span className="font-bold text-white">{item.q}</span>
        <span className="relative w-5 h-5 shrink-0 text-white">
          <Icon
            name="plus"
            className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}
          />
          <Icon
            name="minus"
            className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0'}`}
          />
        </span>
      </button>
      <div
        id={panelId}
        className="grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
        style={{ gridTemplateRows: open ? '1fr' : '0fr', opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm text-muted leading-relaxed max-w-3xl">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FaqAccordion({ items }) {
  const [openSet, setOpenSet] = useState(() => new Set())

  const toggle = (i) => {
    setOpenSet((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  const allOpen = openSet.size === items.length
  const toggleAll = () => {
    setOpenSet(allOpen ? new Set() : new Set(items.map((_, i) => i)))
  }

  return (
    <div>
      <div className="flex justify-end mb-2">
        <button
          type="button"
          onClick={toggleAll}
          className="text-sm font-semibold text-accent hover:text-white transition-colors duration-200"
        >
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>
      <div className="border-t border-white/12">
        {items.map((item, i) => (
          <FaqRow key={item.q} item={item} open={openSet.has(i)} onToggle={() => toggle(i)} />
        ))}
      </div>
    </div>
  )
}
