import usePageTitle from "../hooks/usePageTitle";
import Section from "../components/Section";
import CTAButton from "../components/CTAButton";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import TwoTone from "../components/TwoTone";
import ServiceShowcase from "../components/ServiceShowcase";
import FaqAccordion from "../components/FaqAccordion";
import { DESTINATIONS } from "../data/destinations";
import { FAQS } from "../data/faq";
import { SITE } from "../data/site";

const STATS = [
  { label: "Students & Clients Guided", value: "2,500+" },
  { label: "Visa Success Rate", value: "95%" },
  { label: "Countries Covered", value: "15+" },
  { label: "Years of Experience", value: "8+" },
];

const TESTIMONIALS = [
  {
    name: "Arun K.",
    role: "Studying in Germany",
    quote:
      "Dhee Mentorship made my study abroad process so simple. From university selection to visa interview prep, they were with me at every step.",
  },
  {
    name: "Priya S.",
    role: "Document Attestation Client",
    quote:
      "My educational certificates were apostilled within days. Professional team and very responsive on WhatsApp.",
  },
  {
    name: "Mohamed I.",
    role: "Placed in UAE",
    quote:
      "Got my job offer and visa sorted quickly. The team explained everything clearly and kept me updated throughout.",
  },
];

export default function Home() {
  usePageTitle("Home");

  return (
    <div>
      {/* Hero — Horizon Blue ambient glow, two-tone headline, gradient accent */}
      <section className="hero-glow relative overflow-hidden bg-black">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-white/15 text-muted text-xs font-semibold tracking-[0.12em] uppercase">
              <Icon name="globe" className="w-3.5 h-3.5" />
              Study, Work &amp; Travel Abroad — Simplified
            </span>
            <h1 className="mt-6 text-[clamp(2rem,5.5vw,5rem)] font-bold whitespace-nowrap">
              <span className="block text-white">Turn Your Global Dreams</span>
              <span className="block text-gradient-brand">Into Reality</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
              Dhee Mentorship guides you through study abroad admissions,
              visa assistance and certified translation.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg">Book Free Consultation</CTAButton>
              <CTAButton to="/services" size="lg" variant="outline" icon={null}>
                Explore Our Services
              </CTAButton>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-muted text-sm">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <Icon name="whatsapp" className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <Icon name="mail" className="w-4 h-4" /> {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky pill tab showcase — wraps the rest of the page so the bar stays pinned while scrolling */}
      <Section className="bg-black">
        <Reveal>
          <TwoTone
            white="What We Offer —"
            blue="one platform for all your international needs"
            className="text-[clamp(1.75rem,4vw,3rem)] mb-10"
          />
        </Reveal>

        <ServiceShowcase>
          {/* Stats */}
          <Reveal className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-14">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </Reveal>
            ))}
          </Reveal>

          {/* Destinations preview */}
          <div className="mt-24">
            <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <TwoTone
                white="Pick Your"
                blue="Destination"
                className="text-[clamp(1.75rem,4vw,3rem)]"
              />
              <CTAButton to="/study-abroad" variant="ghost" icon="arrow-right">
                View All Destinations
              </CTAButton>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DESTINATIONS.slice(0, 3).map((d, i) => (
                <Reveal key={d.id} delay={i * 80}>
                  <div className="rounded-[28px] overflow-hidden border border-white/8 bg-card transition-all duration-250 hover:-translate-y-1 hover:border-white/18">
                    <div
                      className="h-32 flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--surface)",
                        backgroundImage:
                          "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
                        backgroundSize: "18px 18px",
                      }}
                    >
                      <Icon name="globe" className="w-10 h-10 text-accent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg text-white">
                          {d.name}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full border border-white/20 text-muted">
                          {d.tag}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {d.blurb}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-24">
            <Reveal>
              <TwoTone
                white="Success Stories —"
                blue="what our clients say"
                className="text-[clamp(1.75rem,4vw,3rem)]"
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <div className="p-6 rounded-[28px] border border-white/8 bg-card h-full">
                    <Icon name="quote" className="w-7 h-7 text-accent" />
                    <p className="mt-4 text-white/80 leading-relaxed text-sm">
                      {t.quote}
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent-strong text-white text-sm font-semibold">
                        {t.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-white text-sm font-semibold">
                          {t.name}
                        </p>
                        <p className="text-muted text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-24">
            <Reveal>
              <TwoTone
                white="Frequently Asked"
                blue="Questions"
                className="text-[clamp(1.75rem,4vw,3rem)] mb-10"
              />
            </Reveal>
            <Reveal>
              <FaqAccordion items={FAQS} />
            </Reveal>
          </div>

          {/* Final CTA */}
          <Reveal className="mt-24">
            <div className="rounded-[28px] border border-white/8 bg-card-2 p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Ready to Start Your Journey Abroad?
                </h2>
                <p className="mt-2 text-muted">
                  Book a free consultation with our experts today — no
                  obligations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <CTAButton to="/contact" size="lg" icon={null}>
                  Book Free Consultation
                </CTAButton>
                <CTAButton
                  href={SITE.whatsapp}
                  size="lg"
                  variant="outline"
                  icon="whatsapp"
                >
                  Chat on WhatsApp
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </ServiceShowcase>
      </Section>
    </div>
  );
}
