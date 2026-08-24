import { useMemo, useState } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import TwoTone from '../components/TwoTone'
import PillTabBar from '../components/PillTabBar'
import { JOBS } from '../data/jobs'
import { SITE } from '../data/site'

export default function Jobs() {
  usePageTitle('Jobs Abroad')
  const [country, setCountry] = useState('All')

  const countries = useMemo(
    () => ['All', ...Array.from(new Set(JOBS.map((j) => j.country)))],
    []
  )

  const filtered = useMemo(
    () => (country === 'All' ? JOBS : JOBS.filter((j) => j.country === country)),
    [country]
  )

  return (
    <div className="bg-black">
      <PageHero
        breadcrumb="Jobs"
        eyebrow="Jobs Abroad"
        titleWhite="Current"
        titleBlue="Vacancies Abroad"
        description="Browse country-wise job openings we're currently helping candidates apply for, complete with guidance on the full application process."
        icon="briefcase"
      />

      <Section>
        <Reveal className="flex justify-center">
          <PillTabBar
            tabs={countries.map((c) => ({ id: c, label: c }))}
            active={country}
            onChange={setCountry}
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((job, i) => (
            <Reveal
              key={job.id}
              delay={(i % 2) * 80}
              className="p-6 rounded-2xl border border-white/8 bg-card hover:border-white/18 hover:-translate-y-1 transition-all duration-250"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                    <Icon name="map-pin" className="w-4 h-4 text-accent" />
                    {job.location}, {job.country}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20 text-muted">
                  {job.type}
                </span>
              </div>

              <p className="mt-4 text-sm text-muted leading-relaxed">{job.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.requirements.map((r) => (
                  <span
                    key={r}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-muted"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/8 pt-4">
                <div>
                  <p className="text-sm font-semibold text-white">{job.salary}</p>
                  <p className="text-xs text-muted">Posted {job.postedDaysAgo}d ago</p>
                </div>
                <CTAButton to="/contact" size="md" icon="arrow-right" className="shrink-0 whitespace-nowrap">
                  Apply Now
                </CTAButton>
              </div>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted mt-10">
            No openings currently listed for this country. Check back soon.
          </p>
        )}
      </Section>

      <Section>
        <Reveal className="max-w-3xl mx-auto text-center">
          <TwoTone white="We Guide You Through" blue="Every Step" className="text-[clamp(1.75rem,4vw,3rem)]" />
          <p className="mt-4 text-muted leading-relaxed">
            From resume preparation and profile matching to work visa processing and travel
            formalities — our team supports you end-to-end so you can focus on starting your
            new role with confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton size="lg">Book Free Consultation</CTAButton>
            <CTAButton href={SITE.whatsapp} size="lg" variant="ghost" icon="whatsapp">
              Chat on WhatsApp
            </CTAButton>
          </div>
        </Reveal>
      </Section>
    </div>
  )
}
