import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import TwoTone from '../components/TwoTone'

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
    <div className="bg-black">
      <PageHero
        breadcrumb="Services / Document Translation"
        eyebrow="Certified Translation"
        titleWhite="Document"
        titleBlue="Translation Services"
        description="Accurate, certified translations for legal, medical, academic, business, and technical documents — accepted globally."
        icon="languages"
      />

      <Section>
        <Reveal className="text-center max-w-2xl mx-auto">
          <TwoTone white="Certified Translations" blue="for Every Need" className="text-[clamp(1.75rem,4vw,3rem)]" />
          <p className="mt-4 text-muted leading-relaxed">
            Our certified linguists translate documents across multiple languages, ensuring
            they retain full legal and professional validity in the destination country.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 80}
              className="p-6 rounded-2xl border border-white/8 bg-card transition-all duration-250 hover:-translate-y-1 hover:border-white/18"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/8 text-accent">
                <Icon name={c.icon} className="w-5 h-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 80} className="p-6 rounded-2xl border border-white/8 bg-card text-center">
              <span className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-accent-strong text-white">
                <Icon name={w.icon} className="w-6 h-6" />
              </span>
              <h3 className="mt-4 font-semibold text-lg text-white">{w.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{w.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="rounded-[28px] border border-white/8 bg-card-2 p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Need a Document Translated?
            </h2>
            <p className="mt-2 text-muted max-w-lg">
              Share your document with us and get a certified translation delivered quickly —
              accepted by embassies, universities, and institutions worldwide.
            </p>
          </div>
          <CTAButton size="lg">Book Free Consultation</CTAButton>
        </Reveal>
      </Section>
    </div>
  )
}
