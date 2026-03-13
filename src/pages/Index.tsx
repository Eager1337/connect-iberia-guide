import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Heart, Shield, Users, Clock, Sparkles, Globe, Award, Star, Zap } from "lucide-react";
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
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-primary-foreground/5 rounded-full blur-3xl"
          />
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
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.05] mb-6 font-bold"
            >
              Your Health. <br />
              <span className="text-secondary">Your Move.</span> <br />
              Our Expertise.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-xl font-medium"
            >
              We make healthcare <strong className="text-primary-foreground">simple, clear, and stress-free</strong> for Americans moving to Portugal & Spain.
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
            {/* Trust micro-badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 mt-12 text-primary-foreground/60 text-xs"
            >
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> HIPAA-Aware</span>
              <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-secondary" /> 4.9/5 Rating</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> Response in 24h</span>
            </motion.div>
          </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" className="fill-background" />
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
            Healthcare uncertainty is the <span className="text-primary">#1 stressor</span> for Americans relocating abroad.
          </SectionTitle>
          <SectionDescription>
            The systems in Portugal and Spain are structured differently from the U.S. model. Access pathways, sequencing, and administrative timing matter — and those details can feel <strong>overwhelming</strong> when you're already planning a move.
          </SectionDescription>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Shield, text: "Zero prescription gaps", desc: "Keep your medications uninterrupted" },
            { icon: Heart, text: "Public vs private — decoded", desc: "Know your options with absolute clarity" },
            { icon: Clock, text: "Master your first 90 days", desc: "Strategic timeline for seamless setup" },
            { icon: Users, text: "Choose with total confidence", desc: "Portugal or Spain — we've got you" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-bold text-foreground mb-1">{item.text}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <SectionTitle>Three steps to <span className="text-primary">healthcare clarity</span></SectionTitle>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: "01", title: "Book a free call", desc: "15 minutes. No commitment. Just clarity on your situation." },
            { step: "02", title: "Get your roadmap", desc: "We assess your needs and recommend the right level of support." },
            { step: "03", title: "Move with confidence", desc: "Navigate registration, providers, and prescriptions — stress-free." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center group"
            >
              <div className="text-6xl font-serif font-bold text-primary/10 group-hover:text-primary/20 transition-colors mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tiers Section */}
      <Section className="bg-muted/50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Our Services</SectionLabel>
          <SectionTitle>Choose the level of support that <span className="text-primary">fits your move</span>.</SectionTitle>
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
                tier.featured ? "border-primary shadow-[var(--shadow-soft)] scale-[1.02]" : "border-border"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <tier.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">{tier.tier}</span>
              <h3 className="text-2xl font-bold mt-2 mb-3">{tier.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{tier.desc}</p>
              <p className="text-xs text-muted-foreground mb-6">
                <span className="font-bold text-foreground">Best for:</span> {tier.best}
              </p>
              <Link
                to={tier.link}
                className="inline-flex items-center text-sm font-bold text-primary hover:gap-3 gap-2 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Client Stories</SectionLabel>
          <SectionTitle>Real families. <span className="text-primary">Real results.</span></SectionTitle>
          <SectionDescription>
            Hear from Americans who've successfully navigated their healthcare transition.
          </SectionDescription>
        </div>
        <Testimonials />
      </Section>

      {/* Free Call Section */}
      <Section className="bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Free Consultation</SectionLabel>
          <SectionTitle className="mb-6">What Happens on the <span className="text-primary">Free Call?</span></SectionTitle>
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
                <span className="text-sm font-semibold">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground mt-10 mb-6 font-medium">No pressure. No obligation. <strong className="text-foreground">Just direction.</strong></p>
          <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
        </div>
      </Section>

      {/* Who We Work With */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Who We Support</SectionLabel>
          <SectionTitle className="mb-10">We support Americans at <span className="text-primary">every stage</span> of relocation.</SectionTitle>
          <div className="flex flex-wrap justify-center gap-3">
            {["Retirees", "Families with children", "LGBTQ couples", "Trans adults", "Parents of transgender youth", "Anyone managing prescriptions"].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-card border border-border rounded-full text-sm font-semibold text-foreground/80 hover:border-primary/30 hover:shadow-[var(--shadow-card)] hover:scale-105 transition-all cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
            You never need to disclose more than you're comfortable sharing. We approach every consultation with <strong>discretion and empathy</strong>.
          </p>
        </div>
      </Section>

      {/* Quick Links */}
      <Section className="bg-muted/50">
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
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
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
            <h2 className="text-3xl lg:text-5xl text-primary-foreground mb-6 font-serif font-bold">Ready for clarity?</h2>
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
