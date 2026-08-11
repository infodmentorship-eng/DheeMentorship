import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'

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
    <div>
      <PageHero
        breadcrumb="Services / Apostille & Attestation"
        eyebrow="Document Legalization"
        title="Apostille & Attestation Services"
        description="Get your personal, educational, legal, and commercial documents apostilled or attested for hassle-free use anywhere in the world."
        icon="stamp"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-horizon font-semibold text-sm tracking-wide uppercase">
              What is Apostille?
            </p>
            <h2 className="mt-2 text-3xl font-bold text-navy">
              A Simple Certificate That Makes Your Documents Valid Worldwide
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              An Apostille is a form of authentication issued for documents to be used in
              countries that are members of the Hague Apostille Convention. It verifies the
              origin of a public document — such as the seal or signature of the official who
              signed it — so that it is legally recognized abroad without the need for further
              legalization.
            </p>
            <p className="mt-4 text-ink/70 leading-relaxed">
              For countries that are not part of the convention, we handle full embassy
              attestation instead, coordinating with the relevant consulates on your behalf.
            </p>
            <div className="mt-8">
              <CTAButton size="lg">Book Free Consultation</CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="p-5 rounded-2xl bg-white border border-horizon/15 text-center">
                <span className="mx-auto flex items-center justify-center w-11 h-11 rounded-xl bg-navy text-white">
                  <Icon name={b.icon} className="w-5 h-5" />
                </span>
                <h3 className="mt-3 font-semibold text-navy">{b.title}</h3>
                <p className="mt-1.5 text-xs text-ink/70 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-horizon font-semibold text-sm tracking-wide uppercase">
            Documents We Handle
          </p>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-navy">
            Supported Document Categories
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCUMENT_TYPES.map((d) => (
            <div key={d.title} className="p-6 rounded-2xl bg-cream border border-horizon/15">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white text-teal">
                <Icon name={d.icon} className="w-5 h-5" />
              </span>
              <h3 className="mt-4 font-semibold text-navy">{d.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {d.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
                    <Icon name="check-circle" className="w-4 h-4 mt-0.5 text-horizon shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-horizon font-semibold text-sm tracking-wide uppercase">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-navy">
            Our Apostille & Attestation Process
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6">
          {PROCESS.map((p) => (
            <div key={p.step} className="relative p-5 rounded-2xl border border-horizon/15 bg-white">
              <span className="text-3xl font-bold text-horizon/25">{p.step}</span>
              <h3 className="mt-2 font-semibold text-navy text-sm">{p.title}</h3>
              <p className="mt-1.5 text-xs text-ink/70 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Need Your Documents Apostilled?
            </h2>
            <p className="mt-2 text-white/60">
              Send us your document details and we’ll guide you through the fastest route.
            </p>
          </div>
          <CTAButton to="/contact" size="lg" icon={null}>
            Get Started
          </CTAButton>
        </div>
      </Section>
    </div>
  )
}
