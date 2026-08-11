import { useState } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'
import { DESTINATIONS } from '../data/destinations'

export default function StudyAbroad() {
  usePageTitle('Study Abroad')
  const [active, setActive] = useState(DESTINATIONS[0].id)
  const activeDestination = DESTINATIONS.find((d) => d.id === active)

  return (
    <div>
      <PageHero
        breadcrumb="Services / Study Abroad"
        eyebrow="Study Abroad Consultancy"
        title="Study Abroad, With the Right Guidance"
        description="From choosing your country and course to securing admission and job opportunities — we help you plan your study abroad journey with confidence."
        icon="graduation-cap"
      />

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-horizon font-semibold text-sm tracking-wide uppercase">
            Where Would You Like to Go?
          </p>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-navy">
            Pick Your Destination
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            We support admissions across popular and emerging study destinations. Explore what
            each country offers.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {DESTINATIONS.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                active === d.id
                  ? 'bg-navy border-navy text-white'
                  : 'bg-white border-horizon/20 text-ink/70 hover:border-horizon'
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>

        {activeDestination && (
          <div className="mt-8 rounded-3xl border border-horizon/15 bg-white p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-horizon-light text-horizon">
                  <Icon name="globe" className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gold/15 text-gold-dark">
                    {activeDestination.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-navy">{activeDestination.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-ink/70 leading-relaxed">{activeDestination.blurb}</p>
              <div className="mt-6">
                <CTAButton size="md">Book Free Consultation</CTAButton>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-navy text-sm uppercase tracking-wide">
                Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {activeDestination.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-ink/70">
                    <Icon name="check-circle" className="w-4 h-4 text-horizon shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-cream border border-horizon/15">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy text-white">
              <Icon name="graduation-cap" className="w-6 h-6" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-navy">Course Opportunities</h3>
            <p className="mt-2 text-ink/70 leading-relaxed text-sm">
              We help match your academic background and career goals to the right course —
              from undergraduate and postgraduate programs to diplomas and language courses —
              at universities across our partner destinations.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-cream border border-horizon/15">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal text-white">
              <Icon name="briefcase" className="w-6 h-6" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-navy">Job Opportunities</h3>
            <p className="mt-2 text-ink/70 leading-relaxed text-sm">
              Many of our destinations offer strong post-study work rights and part-time job
              opportunities during studies, helping you gain international experience while you
              learn.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-navy p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Start Planning Your Study Abroad Journey
            </h2>
            <p className="mt-2 text-white/60 max-w-lg">
              Get personalized guidance on destinations, courses, and applications — completely
              free.
            </p>
          </div>
          <CTAButton size="lg">Book Free Consultation</CTAButton>
        </div>
      </Section>
    </div>
  )
}
