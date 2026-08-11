import usePageTitle from '../hooks/usePageTitle'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import ServiceCard from '../components/ServiceCard'
import Icon from '../components/Icon'
import CompassMotif from '../components/CompassMotif'
import { SERVICES } from '../data/services'
import { DESTINATIONS } from '../data/destinations'
import { SITE } from '../data/site'

const STATS = [
  { label: 'Students & Clients Guided', value: '2,500+' },
  { label: 'Visa Success Rate', value: '95%' },
  { label: 'Countries Covered', value: '15+' },
  { label: 'Years of Experience', value: '8+' },
]

const WHY_US = [
  {
    icon: 'target',
    title: 'End-to-End Guidance',
    text: 'From your first consultation to landing abroad, we handle every step so you don’t have to worry.',
  },
  {
    icon: 'shield-check',
    title: 'Trusted & Transparent',
    text: 'Clear timelines, honest advice, and no hidden costs — every document tracked and verified.',
  },
  {
    icon: 'clock',
    title: 'Fast Turnaround',
    text: 'Streamlined processes for attestation, translation, and visa filing to save you valuable time.',
  },
  {
    icon: 'users',
    title: 'Local Roots, Global Reach',
    text: 'Proudly based in Ramanathapuram, connecting local talent to opportunities worldwide.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Arun K.',
    role: 'Studying in Germany',
    quote:
      'Dhee Mentorship made my study abroad process so simple. From university selection to visa interview prep, they were with me at every step.',
  },
  {
    name: 'Priya S.',
    role: 'Document Attestation Client',
    quote:
      'My educational certificates were apostilled within days. Professional team and very responsive on WhatsApp.',
  },
  {
    name: 'Mohamed I.',
    role: 'Placed in UAE',
    quote:
      'Got my job offer and visa sorted quickly. The team explained everything clearly and kept me updated throughout.',
  },
]

export default function Home() {
  usePageTitle('Home')

  return (
    <div>
      {/* Hero — Navy ground, white text, gold as the one accent */}
      <section className="relative overflow-hidden bg-navy">
        <CompassMotif className="absolute -top-24 -right-24 w-lg h-128 text-white/8 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-teal text-xs font-semibold tracking-wide uppercase">
              <Icon name="globe" className="w-3.5 h-3.5" />
              Study, Work &amp; Travel Abroad — Simplified
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              From Ramanathapuram <span className="text-gold">to the World</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
              Dhee Mentorship guides you through study abroad admissions, visa assistance,
              apostille &amp; attestation, and certified document translation — all under one
              trusted roof.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg">Book Free Consultation</CTAButton>
              <CTAButton to="/services" size="lg" variant="outline" icon={null}>
                Explore Our Services
              </CTAButton>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/60 text-sm">
              <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="phone" className="w-4 h-4" /> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="mail" className="w-4 h-4" /> {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — White/functional ground */}
      <div className="bg-white border-b border-horizon/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-navy">{s.value}</p>
              <p className="mt-1 text-sm text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services overview — Cream ground */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-horizon font-semibold text-sm tracking-wide uppercase">
            What We Offer
          </p>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-navy">
            One Platform for All Your International Needs
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Whether you're heading abroad to study, work, or need your documents ready for
            global use, our services are designed to simplify every step.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} {...s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton to="/services" variant="ghost" icon="arrow-right">
            View All Services
          </CTAButton>
        </div>
      </Section>

      {/* Why choose us — Cream ground, white cards */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-horizon font-semibold text-sm tracking-wide uppercase">
              Why Choose Dhee Mentorship
            </p>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-navy">
              Reliable Guidance, Every Step of the Way
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              We combine local understanding with global expertise to make your journey abroad
              smooth, transparent, and stress-free.
            </p>
            <div className="mt-8">
              <CTAButton size="lg">Book Free Consultation</CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_US.map((w) => (
              <div key={w.title} className="p-5 rounded-2xl bg-cream border border-horizon/15">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-teal">
                  <Icon name={w.icon} className="w-5 h-5" />
                </span>
                <h3 className="mt-3 font-semibold text-navy">{w.title}</h3>
                <p className="mt-1.5 text-sm text-ink/70 leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Destinations preview — Cream ground */}
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-horizon font-semibold text-sm tracking-wide uppercase">
              Study &amp; Work Destinations
            </p>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-navy">
              Pick Your Destination
            </h2>
          </div>
          <CTAButton to="/study-abroad" variant="ghost" icon="arrow-right">
            View All Destinations
          </CTAButton>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.slice(0, 3).map((d) => (
            <div key={d.id} className="rounded-2xl overflow-hidden border border-horizon/15 bg-white">
              <div className="h-32 bg-navy flex items-center justify-center">
                <Icon name="globe" className="w-10 h-10 text-white/40" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-navy">{d.name}</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gold/15 text-gold-dark">
                    {d.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{d.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials — Navy ground, gold accent */}
      <Section className="bg-navy">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gold font-semibold text-sm tracking-wide uppercase">
            Success Stories
          </p>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Icon name="quote" className="w-7 h-7 text-gold" />
              <p className="mt-4 text-white/80 leading-relaxed text-sm">{t.quote}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold text-navy text-sm font-semibold">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA — Navy ground, gold CTA */}
      <Section className="bg-navy">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Start Your Journey Abroad?
            </h2>
            <p className="mt-2 text-white/60">
              Book a free consultation with our experts today — no obligations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <CTAButton to="/contact" size="lg" icon={null}>
              Book Free Consultation
            </CTAButton>
            <CTAButton href={SITE.whatsapp} size="lg" variant="outline" icon="whatsapp">
              Chat on WhatsApp
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  )
}
