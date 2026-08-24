import { useState } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import TwoTone from '../components/TwoTone'
import PillTabBar from '../components/PillTabBar'
import { DESTINATIONS } from '../data/destinations'

export default function StudyAbroad() {
  usePageTitle('Study Abroad')
  const [active, setActive] = useState(DESTINATIONS[0].id)
  const activeDestination = DESTINATIONS.find((d) => d.id === active)

  return (
    <div className="bg-black">
      <PageHero
        breadcrumb="Services / Study Abroad"
        eyebrow="Study Abroad Consultancy"
        titleWhite="Study Abroad, With"
        titleBlue="the Right Guidance"
        description="From choosing your country and course to securing admission and job opportunities — we help you plan your study abroad journey with confidence."
        icon="graduation-cap"
      />

      <Section>
        <Reveal className="text-center max-w-2xl mx-auto">
          <TwoTone white="Pick Your" blue="Destination" className="text-[clamp(1.75rem,4vw,3rem)]" />
          <p className="mt-4 text-muted leading-relaxed">
            We support admissions across popular and emerging study destinations. Explore what
            each country offers.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex justify-center">
          <PillTabBar
            tabs={DESTINATIONS.map((d) => ({ id: d.id, label: d.name }))}
            active={active}
            onChange={setActive}
          />
        </Reveal>

        {activeDestination && (
          <Reveal className="mt-8 rounded-[28px] border border-white/8 bg-card p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/8 text-accent">
                  <Icon name="globe" className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full border border-white/20 text-muted">
                    {activeDestination.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{activeDestination.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-muted leading-relaxed">{activeDestination.blurb}</p>
              <div className="mt-6">
                <CTAButton size="md">Book Free Consultation</CTAButton>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wide">
                Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {activeDestination.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-muted">
                    <Icon name="check-circle" className="w-4 h-4 text-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal className="p-8 rounded-2xl border border-white/8 bg-card">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-strong text-white">
              <Icon name="graduation-cap" className="w-6 h-6" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-white">Course Opportunities</h3>
            <p className="mt-2 text-muted leading-relaxed text-sm">
              We help match your academic background and career goals to the right course —
              from undergraduate and postgraduate programs to diplomas and language courses —
              at universities across our partner destinations.
            </p>
          </Reveal>
          <Reveal delay={80} className="p-8 rounded-2xl border border-white/8 bg-card">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-strong text-white">
              <Icon name="briefcase" className="w-6 h-6" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-white">Job Opportunities</h3>
            <p className="mt-2 text-muted leading-relaxed text-sm">
              Many of our destinations offer strong post-study work rights and part-time job
              opportunities during studies, helping you gain international experience while you
              learn.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="rounded-[28px] border border-white/8 bg-card-2 p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Start Planning Your Study Abroad Journey
            </h2>
            <p className="mt-2 text-muted max-w-lg">
              Get personalized guidance on destinations, courses, and applications — completely
              free.
            </p>
          </div>
          <CTAButton size="lg">Book Free Consultation</CTAButton>
        </Reveal>
      </Section>
    </div>
  )
}
