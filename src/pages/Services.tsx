import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Healthcare Orientation",
    tier: "Tier 1",
    best: "Early planning and decision-making",
    includes: [
      "A structured consultation (video or audio-only)",
      "A written healthcare roadmap",
      "Clear next steps customized to your timeline",
      "Country comparison support if needed",
    ],
    followup: "Written summary",
    link: "/services/healthcare-orientation",
  },
  {
    name: "Guided Setup",
    tier: "Tier 2",
    best: "Getting established during your first months",
    includes: [
      "Everything in Tier 1, plus:",
      "Strategic planning sessions",
      "Ongoing email support between sessions",
      "Step-by-step sequencing guidance",
      "Prescription continuity planning",
    ],
    followup: "Ongoing email support",
    link: "/services/guided-setup",
    featured: true,
  },
  {
    name: "Ongoing Care Partner",
    tier: "Tier 3",
    best: "Long-term reassurance and evolving needs",
    includes: [
      "Everything in Tier 1 & 2, plus:",
      "Quarterly check-in calls",
      "Continued navigation support",
      "Administrative planning guidance",
      "Adjustments as needs change",
    ],
    followup: "Long-term navigation",
    link: "/services/ongoing-care-partner",
  },
];

const steps = [
  {
    num: "01",
    title: "Book a Free 15-Minute Consultation",
    desc: "We'll understand your move timeline, country preference, prescription concerns, and whether you're relocating alone or with family.",
  },
  {
    num: "02",
    title: "Receive a Personalized Healthcare Roadmap",
    desc: "Based on your needs, we create a structured plan covering public vs private pathways, first 30–90 day priorities, and appointment sequencing.",
  },
  {
    num: "03",
    title: "Choose Your Level of Support",
    desc: "Some want clarity to execute independently. Others want guided support. Some prefer ongoing partnership. That's why we offer three tiers.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-[0.2em] mb-4">Our Services</p>
            <h1 className="text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
              Healthcare relocation support for Americans moving to Portugal or Spain
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mb-8">
              We provide structured, empathetic support to help Americans understand their options, build a plan, and move forward with clarity.
            </p>
            <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <SectionTitle>Three simple steps to healthcare clarity</SectionTitle>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="text-6xl font-serif text-primary/10">{step.num}</span>
              <h3 className="text-xl mt-2 mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tiers */}
      <Section className="bg-muted/50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Service Tiers</SectionLabel>
          <SectionTitle>Choose your level of support</SectionTitle>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card border rounded-2xl p-8 transition-all ${
                tier.featured ? "border-primary shadow-[var(--shadow-soft)] scale-[1.02]" : "border-border"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{tier.tier}</span>
              <h3 className="text-2xl mt-2 mb-2">{tier.name}</h3>
              <p className="text-xs text-muted-foreground mb-6">Best for: {tier.best}</p>
              <ul className="space-y-3 mb-8">
                {tier.includes.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={tier.link}
                className="inline-flex items-center text-sm font-semibold text-primary gap-2 hover:gap-3 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* What We Do / Don't Do */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl mb-6">What We Provide</h3>
            <ul className="space-y-3">
              {["Education", "Planning", "Structured guidance", "Navigation support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl mb-6">What We Don't Provide</h3>
            <ul className="space-y-3 text-muted-foreground">
              {["Medical advice", "Emergency services", "Direct representation in medical settings"].map((item, i) => (
                <li key={i} className="text-sm">• {item}</li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-4">For medical decisions, consult a licensed healthcare provider.</p>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl text-primary-foreground mb-4 font-serif">Not sure which tier you need?</h2>
          <p className="text-primary-foreground/70 mb-8">That's exactly what the free consultation is for.</p>
          <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
