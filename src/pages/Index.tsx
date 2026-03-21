import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Heart, Shield, Users, Clock, Globe, Award, Star } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import AnimatedCounter from "@/components/AnimatedCounter";
import Testimonials from "@/components/Testimonials";
import Layout from "@/components/Layout";

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
    icon: Award,
    featured: true,
  },
  {
    name: "Ongoing Care Partner",
    tier: "Tier 3",
    desc: "Long-term navigation and planning as your needs evolve.",
    best: "Ongoing support",
    includes: "Continued partnership",
    link: "/services/ongoing-care-partner",
    icon: Heart,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-background py-16 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 font-heading font-bold tracking-tight text-foreground">
                Start your{" "}
                <span className="text-primary">wellness</span>{" "}
                <span className="text-secondary">Journey</span>{" "}
                now
              </h1>

              {/* Opening Hours style info block */}
              <div className="bg-card border border-border rounded-xl p-6 mb-8 max-w-sm">
                <h3 className="font-heading font-bold text-foreground mb-3 text-lg">Opening Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Monday – Friday</span>
                    <span>9:00AM – 12:00AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Saturday – Sunday</span>
                    <span>9:00AM – 7:00PM</span>
                  </div>
                </div>
              </div>

              <CTAButton to="/contact" size="lg">
                Get Started
              </CTAButton>
            </div>

            {/* Right side — trust indicators */}
            <div className="hidden lg:flex flex-col items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-secondary/20 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-secondary/30 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="font-heading font-bold text-2xl text-foreground">200+</p>
                    <p className="text-sm text-muted-foreground">Families Helped</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-8 text-muted-foreground text-xs font-medium">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-primary" /> HIPAA-Aware</span>
                <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-secondary" /> 4.9/5 Rating</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" /> Response in 24h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Green bottom bar like reference */}
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary" />
      </section>

      {/* Stats */}
      <Section className="!py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <AnimatedCounter end={200} suffix="+" label="Families Supported" />
          <AnimatedCounter end={98} suffix="%" label="Client Satisfaction" />
          <AnimatedCounter end={2} label="Countries Covered" />
          <AnimatedCounter end={5} suffix="+" label="Years Experience" />
        </div>
      </Section>

      {/* Pain Points */}
      <Section className="bg-muted/40">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>You're not alone in this</SectionLabel>
          <SectionTitle className="mb-6">
            Healthcare uncertainty is the <strong className="text-primary font-bold">#1 stressor</strong> for Americans relocating abroad.
          </SectionTitle>
          <SectionDescription>
            The systems in Portugal and Spain work differently from the U.S. Access pathways, administrative timing, and prescription transfers all matter — and those details can feel overwhelming when you're already planning a move.
          </SectionDescription>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Shield, text: "Zero prescription gaps", desc: "Keep your medications uninterrupted" },
            { icon: Heart, text: "Public vs private — decoded", desc: "Know your options with clarity" },
            { icon: Clock, text: "Master your first 90 days", desc: "A strategic timeline for setup" },
            { icon: Users, text: "Choose with confidence", desc: "Portugal or Spain — we've got you" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-7 border border-border hover:shadow-[var(--shadow-elevated)] transition-shadow duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-bold text-foreground mb-1">{item.text}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <SectionTitle>Three steps to <strong className="text-primary font-bold">healthcare clarity</strong></SectionTitle>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {[
            { step: "01", title: "Book a free call", desc: "15 minutes. No commitment. Just clarity on your situation." },
            { step: "02", title: "Get your roadmap", desc: "We assess your needs and recommend the right level of support." },
            { step: "03", title: "Move with confidence", desc: "Navigate registration, providers, and prescriptions — stress-free." },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-heading font-bold text-primary/15 mb-3">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-muted/40">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Our Services</SectionLabel>
          <SectionTitle>Choose the level of support that <strong className="text-primary font-bold">fits your move</strong>.</SectionTitle>
          <SectionDescription>
            Every client starts with a free 15-minute consultation. From there, we recommend the right level of support.
          </SectionDescription>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative bg-card border rounded-xl p-8 hover:shadow-[var(--shadow-elevated)] transition-shadow duration-200 ${
                tier.featured ? "border-primary ring-1 ring-primary/20" : "border-border"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <tier.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">{tier.tier}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{tier.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{tier.desc}</p>
              <p className="text-xs text-muted-foreground mb-6">
                <strong className="text-foreground">Best for:</strong> {tier.best}
              </p>
              <Link
                to={tier.link}
                className="inline-flex items-center text-sm font-bold text-primary gap-2 hover:gap-3 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Client Stories</SectionLabel>
          <SectionTitle>Real families. <strong className="text-primary font-bold">Real results.</strong></SectionTitle>
          <SectionDescription>
            Hear from Americans who've successfully navigated their healthcare transition.
          </SectionDescription>
        </div>
        <Testimonials />
      </Section>

      {/* Free Call */}
      <Section className="bg-muted/40">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Free Consultation</SectionLabel>
          <SectionTitle className="mb-6">What happens on the <strong className="text-primary font-bold">free call?</strong></SectionTitle>
          <div className="grid sm:grid-cols-2 gap-4 text-left mt-10">
            {[
              "Understand your timeline",
              "Identify potential healthcare stress points",
              "Clarify how Portugal and Spain compare for your situation",
              "Recommend the right tier of support",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-card rounded-xl p-6 border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-10 mb-6">No pressure. No obligation. <strong className="text-foreground">Just direction.</strong></p>
          <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
        </div>
      </Section>

      {/* Who We Support */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Who We Support</SectionLabel>
          <SectionTitle className="mb-10">We support Americans at <strong className="text-primary font-bold">every stage</strong> of relocation.</SectionTitle>
          <div className="flex flex-wrap justify-center gap-3">
            {["Retirees", "Families with children", "LGBTQ couples", "Trans adults", "Parents of transgender youth", "Anyone managing prescriptions"].map((item, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground/80"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
            You never need to disclose more than you're comfortable sharing. We approach every consultation with <strong>discretion and empathy</strong>.
          </p>
        </div>
      </Section>

      {/* Quick Links */}
      <Section className="bg-muted/40">
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
                className="bg-card p-8 rounded-xl border border-border hover:shadow-[var(--shadow-elevated)] transition-shadow duration-200 text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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
      <section className="bg-primary py-24 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl text-primary-foreground mb-6 font-heading font-bold tracking-tight">Ready for clarity?</h2>
          <p className="text-primary-foreground/70 mb-10 max-w-md mx-auto text-lg">
            Healthcare doesn't have to be the stressful part of your move.
          </p>
          <CTAButton to="/contact" size="lg">
            Book a Free 15-Minute Consultation
          </CTAButton>
          <p className="text-xs text-primary-foreground/50 mt-6">
            We'll recommend the right tier of support after we understand your needs.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
