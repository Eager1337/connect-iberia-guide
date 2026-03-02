import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Heart, Shield, Users, Clock } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const tiers = [
  {
    name: "Healthcare Orientation",
    tier: "Tier 1",
    desc: "A focused roadmap so you understand your options and next steps.",
    best: "Early planning",
    includes: "1 call + roadmap",
    link: "/services/healthcare-orientation",
  },
  {
    name: "Guided Setup",
    tier: "Tier 2",
    desc: "Structured support as you establish care during your first months.",
    best: "Getting established",
    includes: "Calls + structured support",
    link: "/services/guided-setup",
  },
  {
    name: "Ongoing Care Partner",
    tier: "Tier 3",
    desc: "Long-term navigation and planning as your needs evolve.",
    best: "Ongoing support",
    includes: "Continued partnership",
    link: "/services/ongoing-care-partner",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-32">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-[0.2em] mb-6"
            >
              Healthcare Planning for Americans
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.1] mb-6"
            >
              Healthcare, simplified for your move to Iberia.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-xl"
            >
              We help Americans understand how healthcare works in Portugal and Spain — calmly, clearly, and step by step. Starting with a free consultation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <CTAButton to="/contact" size="lg">
                Book a Free 15-Minute Consultation
              </CTAButton>
              <CTAButton to="/portugal-vs-spain" variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Compare Portugal & Spain <ArrowRight className="w-4 h-4 ml-2" />
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <Section className="bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>You don't have to figure this out alone</SectionLabel>
          <SectionTitle className="mb-6">
            Healthcare uncertainty is one of the most stressful parts of relocating abroad.
          </SectionTitle>
          <SectionDescription>
            The systems in Portugal and Spain are structured differently from the U.S. model. Access pathways, sequencing, and administrative timing matter — and those details can feel overwhelming when you're already planning a move.
          </SectionDescription>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Shield, text: "Avoid prescription gaps" },
            { icon: Heart, text: "Understand public vs private options" },
            { icon: Clock, text: "Plan your first 30–90 days strategically" },
            { icon: Users, text: "Choose between Portugal and Spain with confidence" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow"
            >
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <p className="font-medium text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tiers Section */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Our Services</SectionLabel>
          <SectionTitle>Choose the level of support that fits your move.</SectionTitle>
          <SectionDescription>
            Every client starts with a free 15-minute consultation. From there, we recommend the right level of support.
          </SectionDescription>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-[var(--shadow-soft)] transition-all group"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{tier.tier}</span>
              <h3 className="text-2xl mt-2 mb-3">{tier.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{tier.desc}</p>
              <p className="text-xs text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">Best for:</span> {tier.best}
              </p>
              <Link
                to={tier.link}
                className="inline-flex items-center text-sm font-semibold text-primary hover:gap-3 gap-2 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Free Call Section */}
      <Section className="bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Free Consultation</SectionLabel>
          <SectionTitle className="mb-6">What Happens on the Free Call?</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-4 text-left mt-10">
            {[
              "Understand your timeline",
              "Identify potential healthcare stress points",
              "Clarify how Portugal and Spain compare for your situation",
              "Recommend the right tier of support",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-5 shadow-[var(--shadow-card)]">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 mb-6">No pressure. No obligation. Just direction.</p>
          <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
        </div>
      </Section>

      {/* Who We Work With */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Who We Support</SectionLabel>
          <SectionTitle className="mb-8">We support Americans at many stages of relocation.</SectionTitle>
          <div className="flex flex-wrap justify-center gap-3">
            {["Retirees", "Families with children", "LGBTQ couples", "Trans adults", "Parents of transgender youth", "Anyone managing prescriptions"].map((item, i) => (
              <span key={i} className="px-5 py-2.5 bg-muted rounded-full text-sm font-medium text-foreground/80">
                {item}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-8 max-w-lg mx-auto">
            You never need to disclose more than you're comfortable sharing. We approach every consultation with discretion and empathy.
          </p>
        </div>
      </Section>

      {/* Quick Links */}
      <Section className="bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Explore</SectionLabel>
          <SectionTitle className="mb-8">Not sure where to start?</SectionTitle>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to="/portugal-vs-spain" className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all text-left group">
              <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">Compare Countries</h3>
              <p className="text-sm text-muted-foreground">Portugal and Spain side by side.</p>
            </Link>
            <Link to="/portugal-healthcare" className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all text-left group">
              <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">Healthcare in Portugal</h3>
              <p className="text-sm text-muted-foreground">For Americans relocating from the U.S.</p>
            </Link>
            <Link to="/spain-healthcare" className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all text-left group">
              <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">Healthcare in Spain</h3>
              <p className="text-sm text-muted-foreground">For Americans relocating from the U.S.</p>
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-primary-foreground mb-4 font-serif">Ready for clarity?</h2>
            <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
              Healthcare doesn't have to be the stressful part of your move.
            </p>
            <CTAButton to="/contact" size="lg">
              Book a Free 15-Minute Consultation
            </CTAButton>
            <p className="text-xs text-primary-foreground/50 mt-4">
              We'll recommend the right tier of support after we understand your needs.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
