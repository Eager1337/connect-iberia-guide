import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Heart, Shield, Users, Clock, Globe, Award, Star, MapPin, Stethoscope, FileText } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import heroDoctors from "@/assets/hero-doctors.png";
import lisbonImg from "@/assets/lisbon-lifestyle.jpg";
import barcelonaImg from "@/assets/barcelona-lifestyle.jpg";
import happyFamily from "@/assets/happy-family.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";
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
      {/* Hero with doctor background */}
      <section className="relative bg-primary py-28 lg:py-36 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
          <img
            src={heroDoctors}
            alt="Medical professionals team"
            className="h-full w-full object-cover object-top opacity-30 lg:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-6">
              Trusted by 200+ American families
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.1] mb-8 font-bold tracking-tight">
              Start your{" "}
              <span className="text-secondary">wellness</span>{" "}
              journey now
            </h1>
            <p className="text-lg text-primary-foreground/75 leading-relaxed mb-10 max-w-lg">
              We make healthcare <strong className="text-primary-foreground font-semibold">simple, clear, and stress-free</strong> for Americans moving to Portugal & Spain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton to="/contact" size="lg">
                Get Started
              </CTAButton>
              <CTAButton to="/portugal-vs-spain" variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Compare Portugal & Spain <ArrowRight className="w-4 h-4 ml-2" />
              </CTAButton>
            </div>
            <div className="flex items-center gap-6 mt-12 text-primary-foreground/50 text-xs font-medium">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> HIPAA-Aware</span>
              <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-secondary" /> 4.9/5 Rating</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Response in 24h</span>
            </div>
          </div>
        </div>
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

      {/* Why Iberia Health Connect — story section with image */}
      <Section className="bg-muted/40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Why Iberia Health Connect</SectionLabel>
            <SectionTitle className="mb-6">
              We've been where you are. <strong className="text-primary font-bold">That's why we started this.</strong>
            </SectionTitle>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Moving abroad is exciting — until you realize the healthcare system works completely differently. We founded Iberia Health Connect because we saw too many Americans arrive in Portugal and Spain without a clear plan for their health.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Prescription transfers, public vs. private systems, registration timelines — these aren't things you should figure out alone. We've navigated these systems personally and professionally, and we bring that experience to every client.
            </p>
            <ul className="space-y-3 mb-8">
              {["Real people, not chatbots or call centers", "Deep knowledge of both Portuguese and Spanish systems", "We speak your language — literally and figuratively"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center text-sm font-bold text-primary gap-2 hover:gap-3 transition-all">
              Read our story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={happyFamily} alt="Happy couple walking through a European street" className="w-full h-80 lg:h-[420px] object-cover" />
          </div>
        </div>
      </Section>

      {/* Pain Points */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>You're not alone in this</SectionLabel>
          <SectionTitle className="mb-6">
            Healthcare uncertainty is the <strong className="text-primary font-bold">#1 stressor</strong> for Americans relocating abroad.
          </SectionTitle>
          <SectionDescription className="mx-auto">
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
              className="bg-card rounded-xl p-7 border border-border hover:shadow-md transition-shadow duration-200"
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

      {/* Destinations — Portugal & Spain visual */}
      <Section className="bg-muted/40">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Your Destination Awaits</SectionLabel>
          <SectionTitle>Two countries. <strong className="text-primary font-bold">One trusted partner.</strong></SectionTitle>
          <SectionDescription className="mx-auto">
            Whether you're drawn to Portugal's coastal charm or Spain's vibrant culture, we know both healthcare systems inside out.
          </SectionDescription>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/portugal-healthcare" className="group relative rounded-2xl overflow-hidden h-72 lg:h-80">
            <img src={lisbonImg} alt="Lisbon, Portugal — terracotta rooftops and the Tagus river" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                <MapPin className="w-4 h-4" /> Lisbon, Porto, Algarve & more
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Healthcare in Portugal</h3>
              <p className="text-white/70 text-sm">SNS public system, private options, D7 visa health requirements</p>
            </div>
          </Link>
          <Link to="/spain-healthcare" className="group relative rounded-2xl overflow-hidden h-72 lg:h-80">
            <img src={barcelonaImg} alt="Barcelona, Spain — Mediterranean cityscape with palm trees" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                <MapPin className="w-4 h-4" /> Barcelona, Madrid, Valencia & more
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Healthcare in Spain</h3>
              <p className="text-white/70 text-sm">Seguridad Social, autonomía regions, residency health steps</p>
            </div>
          </Link>
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
          <SectionDescription className="mx-auto">
            Every client starts with a free 15-minute consultation. From there, we recommend the right level of support.
          </SectionDescription>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative bg-card border rounded-xl p-8 hover:shadow-md transition-shadow duration-200 ${
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

      {/* What Makes European Healthcare Different */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden">
            <img src={clinicImg} alt="Modern European healthcare clinic interior" className="w-full h-80 lg:h-[400px] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel>Good to Know</SectionLabel>
            <SectionTitle className="mb-6">
              European healthcare is <strong className="text-primary font-bold">excellent — and different.</strong>
            </SectionTitle>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Both Portugal and Spain consistently rank among the top healthcare systems in the world. But the way you access care, register with providers, and manage prescriptions is completely different from the U.S. system.
            </p>
            <div className="space-y-4">
              {[
                { icon: Stethoscope, title: "Universal Coverage Options", desc: "Both countries offer public healthcare to legal residents — often at little to no cost." },
                { icon: FileText, title: "Prescription Transfer Support", desc: "Your U.S. prescriptions need to be validated by a local doctor. We guide you through every step." },
                { icon: Shield, title: "Private Insurance Guidance", desc: "Private plans start as low as €50/month. We help you compare and choose wisely." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-0.5">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-muted/40">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Client Stories</SectionLabel>
          <SectionTitle>Real families. <strong className="text-primary font-bold">Real results.</strong></SectionTitle>
          <SectionDescription className="mx-auto">
            Hear from Americans who've successfully navigated their healthcare transition.
          </SectionDescription>
        </div>
        <Testimonials />
      </Section>

      {/* Free Call */}
      <Section>
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
      <Section className="bg-muted/40">
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
                className="bg-card p-8 rounded-xl border border-border hover:shadow-md transition-shadow duration-200 text-left group"
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
