import { useState } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import Icon from '../components/Icon'
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

const INITIAL_FORM = { name: '', email: '', phone: '', service: SERVICE_OPTIONS[0], message: '' }

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
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.'
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
    <div>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in Touch"
        title="Book Your Free Consultation"
        description="Have a question about study abroad, visas, attestation, or translation? Reach out — our team responds within one business day."
        icon="mail"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="p-6 rounded-2xl border border-horizon/15 bg-white flex items-start gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-horizon-light text-horizon shrink-0">
                <Icon name="map-pin" className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-semibold text-navy">Office Address</h3>
                <p className="mt-1 text-sm text-ink/70 leading-relaxed">{SITE.address}</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-horizon/15 bg-white flex items-start gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-horizon-light text-horizon shrink-0">
                <Icon name="phone" className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-semibold text-navy">Phone</h3>
                <a href={SITE.phoneHref} className="mt-1 block text-sm text-ink/70 hover:text-navy">
                  {SITE.phone}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-horizon/15 bg-white flex items-start gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-horizon-light text-horizon shrink-0">
                <Icon name="mail" className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-semibold text-navy">Email</h3>
                <a href={`mailto:${SITE.email}`} className="mt-1 block text-sm text-ink/70 hover:text-navy">
                  {SITE.email}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-horizon/15 bg-white flex items-start gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-horizon-light text-horizon shrink-0">
                <Icon name="clock" className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-semibold text-navy">Working Hours</h3>
                <p className="mt-1 text-sm text-ink/70">{SITE.hours}</p>
              </div>
            </div>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/15 transition-colors"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#25D366] text-white shrink-0">
                <Icon name="whatsapp" className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-semibold text-navy">Chat on WhatsApp</h3>
                <p className="mt-1 text-sm text-ink/70">Get a quick response from our team.</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl border border-horizon/15 bg-white">
              <h2 className="text-xl font-bold text-navy">Send Us a Message</h2>
              <p className="mt-1 text-sm text-ink/50">
                Fill out the form and we'll get back to you shortly.
              </p>

              {status === 'submitted' && (
                <div className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-teal/10 border border-teal/30">
                  <Icon name="check-circle" className="w-5 h-5 text-teal-dark mt-0.5 shrink-0" />
                  <p className="text-sm text-navy">
                    Thank you! Your inquiry has been received. Our team will contact you within
                    one business day.
                  </p>
                </div>
              )}

              <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={handleSubmit} noValidate>
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-ink/80 mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-horizon/20 text-sm focus:outline-none focus:ring-2 focus:ring-horizon/30 focus:border-horizon"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-ink/80 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-horizon/20 text-sm focus:outline-none focus:ring-2 focus:ring-horizon/30 focus:border-horizon"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-ink/80 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-horizon/20 text-sm focus:outline-none focus:ring-2 focus:ring-horizon/30 focus:border-horizon"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-ink/80 mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-horizon/20 text-sm focus:outline-none focus:ring-2 focus:ring-horizon/30 focus:border-horizon bg-white"
                  >
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-ink/80 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-horizon/20 text-sm focus:outline-none focus:ring-2 focus:ring-horizon/30 focus:border-horizon resize-none"
                    placeholder="Tell us about your requirement..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gold text-navy font-semibold text-sm shadow-lg shadow-gold/25 hover:bg-gold-dark transition-colors"
                  >
                    Book Free Consultation
                    <Icon name="arrow-right" className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white pt-0!">
        <div className="rounded-3xl overflow-hidden border border-horizon/15">
          <iframe
            title="Dhee Mentorship Office Location"
            src={SITE.mapEmbedSrc}
            className="w-full h-80 lg:h-96 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </div>
  )
}
