import { CheckCircle } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle } from "@/components/Section";
import Layout from "@/components/Layout";

const GuidedSetup = () => (
  <Layout>
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-[0.2em] mb-4">Tier 2</p>
        <h1 className="text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
          Guided Setup: practical help as you get established
        </h1>
        <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
          We help you navigate the process and stay organized. You remain in control of your choices and communications.
        </p>
        <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
      </div>
    </section>

    <Section>
      <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        <div>
          <SectionLabel>What This Tier Helps With</SectionLabel>
          <ul className="space-y-3 mt-4">
            {[
              "Turning your plan into a step-by-step setup sequence",
              "Appointment planning (what to book first, questions to ask, what to bring)",
              "Tracking tasks and timelines so nothing slips",
              "Ongoing email support between sessions",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionLabel>Best For</SectionLabel>
          <ul className="space-y-3 mt-4">
            {[
              "Retirees who want peace of mind",
              "Families settling in a new area",
              "Anyone who wants guidance through first-month healthcare setup",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl text-primary-foreground mb-4 font-serif">Ready to get established with confidence?</h2>
        <p className="text-primary-foreground/70 mb-8">Start with a free consultation and we'll recommend the right support level.</p>
        <CTAButton to="/contact" size="lg">Book a Free Consultation</CTAButton>
      </div>
    </section>
  </Layout>
);

export default GuidedSetup;
