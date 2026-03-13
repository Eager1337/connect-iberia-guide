import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Heart, Shield, Users, Clock, Sparkles, Globe, Award } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import AnimatedCounter from "@/components/AnimatedCounter";
import Testimonials from "@/components/Testimonials";
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
    icon: Globe,
  },
  {
    name: "Guided Setup",
    tier: "Tier 2",
    desc: "Structured support as you establish care during your first months.",
    best: "Getting established",
    includes: "Calls + structured support",
    link: "/services/guided-setup",
    icon: Sparkles,
    featured: true,
  },
  {
    name: "Ongoing Care Partner",
    tier: "Tier 3",
    desc: "Long-term navigation and planning as your needs evolve.",
    best: "Ongoing support",
    includes: "Continued partnership",
    link: "/services/ongoing-care-partner",
    icon: Award,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span className="text-primary-foreground/90 text-xs font-semibold uppercase tracking-wider">Trusted by 200+ American families</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.05] mb-6"
            >
              Healthcare, simplified for your move to Iberia.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-xl"
            >
              We help Americans understand how healthcare works in Portugal and Spain — calmly, clearly, and step by step.
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
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="hsl(40 20% 98%)" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <Section className="!py-16 bg-background">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <AnimatedCounter end={200} suffix="+" label="Families Supported" />
          <AnimatedCounter end={98} suffix="%" label="Client Satisfaction" />
          <AnimatedCounter end={2} label="Countries Covered" />
          <AnimatedCounter end={5} suffix="+" label="Years Experience" />
        </div>
      </Section>

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
            { icon: Shield, text: "Avoid prescription gaps", desc: "Keep your medications uninterrupted" },
            { icon: Heart, text: "Understand public vs private", desc: "Know your options clearly" },
            { icon: Clock, text: "Plan your first 90 days", desc: "Strategic timeline for setup" },
            { icon: Users, text: "Choose with confidence", desc: "Portugal or Spain — we'll guide you" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-foreground mb-1">{item.text}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
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
              className={`relative bg-card border rounded-2xl p-8 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all duration-300 group ${
                tier.featured ? "border-primary shadow-[var(--shadow-soft)]" : "border-border"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <tier.icon className="w-6 h-6 text-primary" />
              </div>
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

      {/* Testimonials */}
      <Section className="bg-muted/50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Client Stories</SectionLabel>
          <SectionTitle>Real families. Real results.</SectionTitle>
          <SectionDescription>
            Hear from Americans who've successfully navigated their healthcare transition.
          </SectionDescription>
        </div>
        <Testimonials />
      </Section>

      {/* Free Call Section */}
      <Section>
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
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground mt-10 mb-6">No pressure. No obligation. Just direction.</p>
          <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
        </div>
      </Section>

      {/* Who We Work With */}
      <Section className="bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Who We Support</SectionLabel>
          <SectionTitle className="mb-10">We support Americans at many stages of relocation.</SectionTitle>
          <div className="flex flex-wrap justify-center gap-3">
            {["Retirees", "Families with children", "LGBTQ couples", "Trans adults", "Parents of transgender youth", "Anyone managing prescriptions"].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground/80 hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
            You never need to disclose more than you're comfortable sharing. We approach every consultation with discretion and empathy.
          </p>
        </div>
      </Section>

      {/* Quick Links */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Explore</SectionLabel>
          <SectionTitle className="mb-10">Not sure where to start?</SectionTitle>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { to: "/portugal-vs-spain", title: "Compare Countries", desc: "Portugal and Spain side by side.", icon: Globe },
              { to: "/portugal-healthcare", title: "Healthcare in Portugal", desc: "For Americans relocating from the U.S.", icon: Heart },
              { to: "/spain-healthcare", title: "Healthcare in Spain", desc: "For Americans relocating from the U.S.", icon: Shield },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="bg-card p-8 rounded-2xl border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all duration-300 text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="relative bg-primary py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl text-primary-foreground mb-6 font-serif">Ready for clarity?</h2>
            <p className="text-primary-foreground/70 mb-10 max-w-md mx-auto text-lg">
              Healthcare doesn't have to be the stressful part of your move.
            </p>
            <CTAButton to="/contact" size="lg">
              Book a Free 15-Minute Consultation
            </CTAButton>
            <p className="text-xs text-primary-foreground/50 mt-6">
              We'll recommend the right tier of support after we understand your needs.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
