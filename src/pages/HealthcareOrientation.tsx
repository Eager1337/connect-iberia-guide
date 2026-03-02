import { CheckCircle } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle } from "@/components/Section";
import Layout from "@/components/Layout";

const HealthcareOrientation = () => (
  <Layout>
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-[0.2em] mb-4">Tier 1</p>
        <h1 className="text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
          Healthcare Orientation: a clear roadmap in one call
        </h1>
        <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
          A focused consultation for Americans deciding between Portugal and Spain, understanding their healthcare options, and planning ahead.
        </p>
        <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
      </div>
    </section>

    <Section>
      <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        <div>
          <SectionLabel>Who It's For</SectionLabel>
          <ul className="space-y-3 mt-4">
            {[
              "You're deciding between Portugal and Spain",
              "You want to understand public vs private care",
              "You're planning for prescriptions, chronic conditions, or family needs",
              "You prefer to DIY but want expert clarity",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionLabel>What You Get</SectionLabel>
          <ul className="space-y-3 mt-4">
            {[
              "A structured call (video or audio-only)",
              "Written summary + next-step checklist",
              "Resource pack (links + templates where appropriate)",
              "Country comparison support if needed",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    <Section className="bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>What We Cover</SectionLabel>
        <SectionTitle className="mb-8">Topics in your orientation call</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "How healthcare works day-to-day (public vs private)",
            "What to do first (and what can wait)",
            "Practical considerations for prescriptions + continuity",
            "A decision lens for Portugal vs Spain based on your priorities",
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-5 shadow-[var(--shadow-card)]">
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl text-primary-foreground mb-4 font-serif">Ready for clarity?</h2>
        <p className="text-primary-foreground/70 mb-8">Start with a free 15-minute consultation.</p>
        <CTAButton to="/contact" size="lg">Book a Free Consultation</CTAButton>
      </div>
    </section>
  </Layout>
);

export default HealthcareOrientation;
