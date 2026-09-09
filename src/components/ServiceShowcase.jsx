import { useEffect, useRef, useState } from 'react'
import PillTabBar from './PillTabBar'
import ExpandableCard from './ExpandableCard'
import Icon from './Icon'
import { SHOWCASE_TABS, SHOWCASE_SECONDARY } from '../data/showcase'

export default function ServiceShowcase({ children }) {
  const [activeId, setActiveId] = useState(SHOWCASE_TABS[0].id)
  const [stuck, setStuck] = useState(false)
  const sentinelRef = useRef(null)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { rootMargin: '-1px 0px 0px 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const activeIndex = SHOWCASE_TABS.findIndex((t) => t.id === activeId)
  const active = SHOWCASE_TABS[activeIndex]
  const secondary = SHOWCASE_SECONDARY[activeIndex % SHOWCASE_SECONDARY.length]

  return (
    <div>
      <div ref={sentinelRef} />
      <div
        className={`sticky top-16 lg:top-20 z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          stuck ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-3' : 'py-0'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)' }}
      >
        <PillTabBar
          tabs={SHOWCASE_TABS.map((t) => ({ id: t.id, label: t.label }))}
          active={activeId}
          onChange={setActiveId}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExpandableCard
          key={active.id}
          pill={active.pill}
          icon={active.icon}
          headlineWhite={active.headlineWhite}
          headlineBlue={active.headlineBlue}
          long={active.long}
          to={active.to}
        />
        <div
          key={secondary.title}
          className="rounded-[28px] border border-white/8 bg-card-2 p-6 sm:p-8 transition-all duration-250 hover:-translate-y-1 hover:border-white/18"
        >
          <div
            className="relative h-40 sm:h-48 rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              backgroundColor: '#111111',
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/8 text-white">
              <Icon name={secondary.icon} className="w-8 h-8" />
            </span>
          </div>
          <span className="inline-flex mt-5 px-3 py-1 rounded-full border border-white/20 text-xs font-medium text-muted">
            Why Dhee Mentorship
          </span>
          <h3 className="mt-4 text-xl sm:text-2xl font-bold leading-[1.15] tracking-tight text-white">
            {secondary.title}
          </h3>
          <p className="mt-4 text-sm text-muted leading-relaxed">{secondary.text}</p>
        </div>
      </div>

      {children}
    </div>
  )
}
