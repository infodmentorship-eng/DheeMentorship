import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'

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
    <div>
      <PageHero
        breadcrumb="Services / Visa Assistance"
        eyebrow="Visa Support"
        title="Visa Assistance Services"
        description="A clear, guided path from consultation to visa approval — including PCC assistance, interview preparation, and application tracking."
        icon="passport"
      />

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-horizon font-semibold text-sm tracking-wide uppercase">
            Our Process
          </p>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-navy">
            Step-by-Step Visa Process
          </h2>
        </div>
        <div className="mt-12 relative">
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-0.5 bg-horizon/15" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex items-center justify-center w-[4.5rem] h-[4.5rem] rounded-full bg-white border-4 border-horizon/15 text-horizon font-bold">
                  <Icon name={s.icon} className="w-7 h-7" />
                </span>
                <span className="mt-3 text-xs font-semibold text-gold-dark">STEP {i + 1}</span>
                <h3 className="mt-1 font-semibold text-navy">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink/70 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-horizon font-semibold text-sm tracking-wide uppercase">
            Additional Support
          </p>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-navy">
            More Than Just Visa Filing
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ADDITIONAL.map((a) => (
            <a
              key={a.title}
              href={a.to}
              className="group p-6 rounded-2xl bg-cream border border-horizon/15 hover:border-horizon hover:shadow-lg hover:shadow-navy/5 transition-all"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white text-teal group-hover:bg-navy group-hover:text-white transition-colors">
                <Icon name={a.icon} className="w-5 h-5" />
              </span>
              <h3 className="mt-4 font-semibold text-navy">{a.title}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{a.text}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-navy p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Start Your Visa Application?
            </h2>
            <p className="mt-2 text-white/60">
              Book a free consultation and let our experts guide your visa journey.
            </p>
          </div>
          <CTAButton to="/contact" size="lg" icon={null}>
            Book Free Consultation
          </CTAButton>
        </div>
      </Section>
    </div>
  )
}
