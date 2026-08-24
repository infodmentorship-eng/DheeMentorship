import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import TwoTone from '../components/TwoTone'

const DOCUMENT_TYPES = [
  {
    icon: 'users',
    title: 'Personal Documents',
    items: ['Birth Certificate', 'Marriage Certificate', 'PCC', 'Affidavits'],
  },
  {
    icon: 'graduation-cap',
    title: 'Educational Documents',
    items: ['Degree Certificate', 'Mark Sheets', 'Transfer Certificate', 'Diplomas'],
  },
  {
    icon: 'file-text',
    title: 'Legal Documents',
    items: ['Power of Attorney', 'Court Orders', 'Notarized Agreements', 'Adoption Papers'],
  },
  {
    icon: 'building',
    title: 'Commercial & Corporate Documents',
    items: ['Certificate of Incorporation', 'Invoices', 'MOA/AOA', 'Board Resolutions'],
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Document Verification',
    text: 'We review your documents for eligibility and completeness before starting the process.',
  },
  {
    step: '02',
    title: 'Notarization',
    text: 'Your documents are notarized by authorized local notaries as the first layer of verification.',
  },
  {
    step: '03',
    title: 'State / Home Department Authentication',
    text: 'Documents are authenticated at the relevant state or home department.',
  },
  {
    step: '04',
    title: 'MEA Apostille / Attestation',
    text: 'Final apostille or attestation is obtained from the Ministry of External Affairs (MEA) or the destination country’s embassy.',
  },
  {
    step: '05',
    title: 'Delivery',
    text: 'Your apostilled or attested documents are securely delivered to you, ready for global use.',
  },
]

const BENEFITS = [
  { icon: 'clock', title: 'Fast', text: 'Streamlined process with clear timelines and regular status updates.' },
  { icon: 'shield-check', title: 'Reliable', text: 'Verified procedures that meet embassy and government standards.' },
  { icon: 'globe', title: 'Globally Accepted', text: 'Documents accepted across 120+ Hague Convention member countries.' },
]

export default function Apostille() {
  usePageTitle('Apostille & Attestation')

  return (
    <div className="bg-black">
      <PageHero
        breadcrumb="Services / Apostille & Attestation"
        eyebrow="Document Legalization"
        titleWhite="Apostille &"
        titleBlue="Attestation Services"
        description="Get your personal, educational, legal, and commercial documents apostilled or attested for hassle-free use anywhere in the world."
        icon="stamp"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">
              What is Apostille?
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              A Simple Certificate That Makes Your Documents Valid Worldwide
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              An Apostille is a form of authentication issued for documents to be used in
              countries that are members of the Hague Apostille Convention. It verifies the
              origin of a public document — such as the seal or signature of the official who
              signed it — so that it is legally recognized abroad without the need for further
              legalization.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For countries that are not part of the convention, we handle full embassy
              attestation instead, coordinating with the relevant consulates on your behalf.
            </p>
            <div className="mt-8">
              <CTAButton size="lg">Book Free Consultation</CTAButton>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} className="p-5 rounded-2xl border border-white/8 bg-card text-center">
                <span className="mx-auto flex items-center justify-center w-11 h-11 rounded-xl bg-accent-strong text-white">
                  <Icon name={b.icon} className="w-5 h-5" />
                </span>
                <h3 className="mt-3 font-semibold text-white">{b.title}</h3>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Reveal className="text-center max-w-2xl mx-auto">
          <TwoTone white="Documents" blue="We Handle" className="text-[clamp(1.75rem,4vw,3rem)]" />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCUMENT_TYPES.map((d, i) => (
            <Reveal key={d.title} delay={i * 80} className="p-6 rounded-2xl border border-white/8 bg-card">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/8 text-accent">
                <Icon name={d.icon} className="w-5 h-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">{d.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {d.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <Icon name="check-circle" className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="text-center max-w-2xl mx-auto">
          <TwoTone white="How It" blue="Works" className="text-[clamp(1.75rem,4vw,3rem)]" />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 80} className="relative p-5 rounded-2xl border border-white/8 bg-card">
              <span className="text-3xl font-bold text-white/15">{p.step}</span>
              <h3 className="mt-2 font-semibold text-white text-sm">{p.title}</h3>
              <p className="mt-1.5 text-xs text-muted leading-relaxed">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="rounded-[28px] border border-white/8 bg-card-2 p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Need Your Documents Apostilled?
            </h2>
            <p className="mt-2 text-muted">
              Send us your document details and we’ll guide you through the fastest route.
            </p>
          </div>
          <CTAButton to="/contact" size="lg" icon={null}>
            Get Started
          </CTAButton>
        </Reveal>
      </Section>
    </div>
  )
}
