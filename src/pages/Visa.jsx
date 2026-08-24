import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import TwoTone from '../components/TwoTone'

const STEPS = [
  {
    icon: 'users',
    title: 'Consultation',
    text: 'A free, personalized session to understand your goals and recommend the right visa pathway.',
  },
  {
    icon: 'file-text',
    title: 'Document Preparation',
    text: 'We help you gather, verify, and organize all documents required for your application.',
  },
  {
    icon: 'passport',
    title: 'Application Submission',
    text: 'Your visa application is filed accurately and on time with the relevant embassy or authority.',
  },
  {
    icon: 'users',
    title: 'Interview Preparation',
    text: 'Mock interviews and guidance to help you confidently answer visa officer questions.',
  },
  {
    icon: 'clock',
    title: 'Tracking & Updates',
    text: 'Regular status updates so you always know exactly where your application stands.',
  },
]

const ADDITIONAL = [
  { icon: 'languages', title: 'Translation', text: 'Certified translation of supporting documents where required.', to: '/document-translation' },
  { icon: 'building', title: 'Embassy Legalization', text: 'Coordination with embassies for legalization of key documents.', to: '/apostille-attestation' },
  { icon: 'stamp', title: 'Apostille Support', text: 'Apostille of educational and personal documents for your visa file.', to: '/apostille-attestation' },
]

export default function Visa() {
  usePageTitle('Visa Assistance')

  return (
    <div className="bg-black">
      <PageHero
        breadcrumb="Services / Visa Assistance"
        eyebrow="Visa Support"
        titleWhite="Visa"
        titleBlue="Assistance Services"
        description="A clear, guided path from consultation to visa approval — including PCC assistance, interview preparation, and application tracking."
        icon="passport"
      />

      <Section>
        <Reveal className="text-center max-w-2xl mx-auto">
          <TwoTone white="Step-by-Step" blue="Visa Process" className="text-[clamp(1.75rem,4vw,3rem)]" />
        </Reveal>
        <div className="mt-12 relative">
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-0.5 bg-white/10" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex items-center justify-center w-18 h-18 rounded-full bg-card border-4 border-black text-accent font-bold">
                  <Icon name={s.icon} className="w-7 h-7" />
                </span>
                <span className="mt-3 text-xs font-semibold text-accent">STEP {i + 1}</span>
                <h3 className="mt-1 font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Reveal className="text-center max-w-2xl mx-auto">
          <TwoTone white="More Than" blue="Just Visa Filing" className="text-[clamp(1.75rem,4vw,3rem)]" />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ADDITIONAL.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <a
                href={a.to}
                className="group block p-6 rounded-2xl border border-white/8 bg-card hover:border-white/18 hover:-translate-y-1 transition-all duration-250"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/8 text-accent group-hover:bg-accent-strong group-hover:text-white transition-colors duration-200">
                  <Icon name={a.icon} className="w-5 h-5" />
                </span>
                <h3 className="mt-4 font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{a.text}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="rounded-[28px] border border-white/8 bg-card-2 p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Start Your Visa Application?
            </h2>
            <p className="mt-2 text-muted">
              Book a free consultation and let our experts guide your visa journey.
            </p>
          </div>
          <CTAButton to="/contact" size="lg" icon={null}>
            Book Free Consultation
          </CTAButton>
        </Reveal>
      </Section>
    </div>
  )
}
