import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import CTAButton from '../components/CTAButton'
import Reveal from '../components/Reveal'
import { SERVICES } from '../data/services'

export default function Services() {
  usePageTitle('Services')

  return (
    <div className="bg-black">
      <PageHero
        eyebrow="Our Services"
        titleWhite="Everything You Need,"
        titleBlue="Under One Roof"
        description="From choosing the right course abroad to getting your documents ready for global acceptance — explore our complete range of services."
        icon="briefcase"
      />

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="rounded-[28px] border border-white/8 bg-card-2 p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-2 text-muted">
              Talk to our consultants — we'll guide you to the right solution, free of cost.
            </p>
          </div>
          <CTAButton size="lg">Book Free Consultation</CTAButton>
        </Reveal>
      </Section>
    </div>
  )
}
