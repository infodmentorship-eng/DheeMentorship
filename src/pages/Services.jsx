import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import CTAButton from '../components/CTAButton'
import { SERVICES } from '../data/services'

export default function Services() {
  usePageTitle('Services')

  return (
    <div>
      <PageHero
        eyebrow="Our Services"
        title="Everything You Need, Under One Roof"
        description="From choosing the right course abroad to getting your documents ready for global acceptance — explore our complete range of services."
        icon="briefcase"
      />

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} {...s} />
          ))}
        </div>
      </Section>

      <Section className="bg-navy">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-2 text-white/60">
              Talk to our consultants — we'll guide you to the right solution, free of cost.
            </p>
          </div>
          <CTAButton size="lg">Book Free Consultation</CTAButton>
        </div>
      </Section>
    </div>
  )
}
