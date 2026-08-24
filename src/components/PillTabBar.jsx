import { useEffect, useRef, useState } from 'react'
import CTAButton from './CTAButton'

export default function PillTabBar({ tabs, active, onChange, cta, className = '' }) {
  const containerRef = useRef(null)
  const tabRefs = useRef({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })

  const measure = () => {
    const container = containerRef.current
    const activeEl = tabRefs.current[active]
    if (!container || !activeEl) return
    const containerRect = container.getBoundingClientRect()
    const activeRect = activeEl.getBoundingClientRect()
    setIndicator({
      left: activeRect.left - containerRect.left,
      width: activeRect.width,
      opacity: 1,
    })
  }

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, tabs])

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        ref={containerRef}
        className="relative flex items-center gap-1 rounded-full bg-pill border border-white/10 p-1.5 overflow-x-auto max-w-full scrollbar-none"
      >
        <div
          className="absolute top-1.5 bottom-1.5 rounded-full bg-white transition-[left,width] duration-300"
          style={{
            left: indicator.left,
            width: indicator.width,
            opacity: indicator.opacity,
            transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)',
          }}
        />
        {tabs.map((tab) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[tab.id] = el)}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`relative z-10 shrink-0 whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              active === tab.id
                ? 'text-black'
                : 'text-muted hover:text-white hover:bg-white/6'
            }`}
          >
            {tab.badge && (
              <span className="px-1.5 py-0.5 rounded-full bg-white text-black text-[10px] font-bold leading-none">
                {tab.badge}
              </span>
            )}
            {tab.label}
          </button>
        ))}
      </div>
      {cta && (
        <CTAButton to={cta.to} href={cta.href} size="md" icon={null} className="shrink-0">
          {cta.label}
        </CTAButton>
      )}
    </div>
  )
}
