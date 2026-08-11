import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'

const CATEGORIES = [
  {
    icon: 'shield-check',
    title: 'Legal & Immigration Documents',
    text: 'Visa applications, court documents, contracts, and affidavits translated with legal precision.',
  },
  {
    icon: 'building',
    title: 'Business & Financial Documents',
    text: 'Agreements, financial statements, and corporate records translated for international business.',
  },
  {
    icon: 'shield-check',
    title: 'Medical Reports',
    text: 'Prescriptions, diagnostic reports, and medical records translated accurately for treatment abroad.',
  },
  {
    icon: 'file-text',
    title: 'Technical Documents',
    text: 'Manuals, specifications, and product documentation translated with subject-matter accuracy.',
  },
  {
    icon: 'graduation-cap',
    title: 'Academic Records',
    text: 'Degree certificates, mark sheets, and transcripts translated for university admissions.',
  },
]

const WHY = [
  { icon: 'target', title: 'Accuracy', text: 'Every translation is reviewed for linguistic and contextual accuracy.' },
  { icon: 'globe', title: 'Global Acceptance', text: 'Certified translations accepted by embassies, universities, and authorities worldwide.' },
  { icon: 'clock', title: 'Quick Turnaround', text: 'Most documents translated and certified within 24–48 hours.' },
]

export default function Translation() {
  usePageTitle('Document Translation')

  return (
    <div>
      <PageHero
        breadcrumb="Services / Document Translation"
        eyebrow="Certified Translation"
        title="Document Translation Services"
        description="Accurate, certified translations for legal, medical, academic, business, and technical documents — accepted globally."
        icon="languages"
      />

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-horizon font-semibold text-sm tracking-wide uppercase">
            What We Translate
          </p>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-navy">
            Certified Translations for Every Need
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Our certified linguists translate documents across multiple languages, ensuring
            they retain full legal and professional validity in the destination country.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl border border-horizon/15 bg-white hover:shadow-lg hover:shadow-navy/5 transition-shadow">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-horizon-light text-horizon">
                <Icon name={c.icon} className="w-5 h-5" />
              </span>
              <h3 className="mt-4 font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {WHY.map((w) => (
            <div key={w.title} className="p-6 rounded-2xl bg-cream border border-horizon/15 text-center">
              <span className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-teal text-white">
                <Icon name={w.icon} className="w-6 h-6" />
              </span>
              <h3 className="mt-4 font-semibold text-lg text-navy">{w.title}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-navy p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Need a Document Translated?
            </h2>
            <p className="mt-2 text-white/60 max-w-lg">
              Share your document with us and get a certified translation delivered quickly —
              accepted by embassies, universities, and institutions worldwide.
            </p>
          </div>
          <CTAButton size="lg">Book Free Consultation</CTAButton>
        </div>
      </Section>
    </div>
  )
}
