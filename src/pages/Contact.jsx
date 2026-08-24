import { useState } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { SITE } from '../data/site'

const SERVICE_OPTIONS = [
  'Study Abroad Consultancy',
  'Visa Assistance',
  'Apostille & Attestation',
  'PCC Assistance',
  'Document Translation',
  'Jobs Abroad',
  'Other',
]

const INITIAL_FORM = { name: '', email: '', service: SERVICE_OPTIONS[0], message: '' }

export default function Contact() {
  usePageTitle('Contact Us')
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.message.trim()) next.message = 'Tell us a bit about what you need.'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitted')
    setForm(INITIAL_FORM)
  }

  return (
    <div className="bg-black">
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in Touch"
        titleWhite="Book Your"
        titleBlue="Free Consultation"
        description="Have a question about study abroad, visas, attestation, or translation? Reach out — our team responds within one business day."
        icon="mail"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <Reveal className="lg:col-span-2 space-y-5">
            <div className="p-6 rounded-2xl border border-white/8 bg-card flex items-start gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/8 text-accent shrink-0">
                <Icon name="map-pin" className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-semibold text-white">Office Address</h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">{SITE.address}</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/8 bg-card flex items-start gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/8 text-accent shrink-0">
                <Icon name="mail" className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <a href={`mailto:${SITE.email}`} className="mt-1 block text-sm text-muted hover:text-white transition-colors duration-200">
                  {SITE.email}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/8 bg-card flex items-start gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/8 text-accent shrink-0">
                <Icon name="clock" className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-semibold text-white">Working Hours</h3>
                <p className="mt-1 text-sm text-muted">{SITE.hours}</p>
              </div>
            </div>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/15 transition-colors duration-200"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#25D366] text-white shrink-0">
                <Icon name="whatsapp" className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-semibold text-white">Chat on WhatsApp</h3>
                <p className="mt-1 text-sm text-muted">Get a quick response from our team.</p>
              </div>
            </a>
          </Reveal>

          {/* Form */}
          <Reveal delay={80} className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-[28px] border border-white/8 bg-card">
              <h2 className="text-xl font-bold text-white">Send Us a Message</h2>
              <p className="mt-1 text-sm text-muted">
                Fill out the form and we'll get back to you shortly.
              </p>

              {status === 'submitted' && (
                <div className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/30">
                  <Icon name="check-circle" className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <p className="text-sm text-white">
                    Thank you! Your inquiry has been received. Our team will contact you within
                    one business day.
                  </p>
                </div>
              )}

              <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={handleSubmit} noValidate>
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/12 bg-white/5 text-white placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent-strong/40 focus:border-accent-strong"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/12 bg-white/5 text-white placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent-strong/40 focus:border-accent-strong"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/12 bg-white/5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-strong/40 focus:border-accent-strong"
                  >
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s} className="bg-card text-white">{s}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/12 bg-white/5 text-white placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent-strong/40 focus:border-accent-strong resize-none"
                    placeholder="Tell us about your requirement..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-accent-strong text-white font-medium text-sm shadow-lg shadow-accent-strong/25 hover:brightness-110 transition-all duration-200"
                  >
                    Book Free Consultation
                    <Icon name="arrow-right" className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0!">
        <Reveal className="rounded-[28px] overflow-hidden border border-white/8">
          <iframe
            title="Dhee Mentorship Office Location"
            src={SITE.mapEmbedSrc}
            className="w-full h-80 lg:h-96 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </Section>
    </div>
  )
}
