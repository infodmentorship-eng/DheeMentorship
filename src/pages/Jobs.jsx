import { useMemo, useState } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'
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
    <div>
      <PageHero
        breadcrumb="Jobs"
        eyebrow="Jobs Abroad"
        title="Current Vacancies Abroad"
        description="Browse country-wise job openings we're currently helping candidates apply for, complete with guidance on the full application process."
        icon="briefcase"
      />

      <Section>
        <div className="flex flex-wrap justify-center gap-2">
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setCountry(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                country === c
                  ? 'bg-navy border-navy text-white'
                  : 'bg-white border-horizon/20 text-ink/70 hover:border-horizon'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-2xl border border-horizon/15 bg-white hover:shadow-lg hover:shadow-navy/5 transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-navy">{job.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/60">
                    <Icon name="map-pin" className="w-4 h-4 text-teal" />
                    {job.location}, {job.country}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-horizon-light text-horizon">
                  {job.type}
                </span>
              </div>

              <p className="mt-4 text-sm text-ink/70 leading-relaxed">{job.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.requirements.map((r) => (
                  <span
                    key={r}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-cream text-ink/60"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-horizon/10 pt-4">
                <div>
                  <p className="text-sm font-semibold text-navy">{job.salary}</p>
                  <p className="text-xs text-ink/40">Posted {job.postedDaysAgo}d ago</p>
                </div>
                <CTAButton to="/contact" size="md" icon="arrow-right">
                  Apply Now
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink/50 mt-10">
            No openings currently listed for this country. Check back soon.
          </p>
        )}
      </Section>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-horizon font-semibold text-sm tracking-wide uppercase">
            How to Apply
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            We Guide You Through Every Step
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
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
        </div>
      </Section>
    </div>
  )
}
