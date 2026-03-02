import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import Layout from "@/components/Layout";
import { Heart, Shield, Users } from "lucide-react";

const About = () => (
  <Layout>
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-[0.2em] mb-4">About Us</p>
        <h1 className="text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
          Built by Americans who've navigated all three systems.
        </h1>
        <p className="text-lg text-primary-foreground/70 leading-relaxed">
          We understand U.S. healthcare expectations. We understand Portugal and Spain healthcare structures. We bridge the gap so you can move with clarity — not confusion.
        </p>
      </div>
    </section>

    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Our Story</SectionLabel>
        <SectionTitle className="mb-6">Clarity over confusion</SectionTitle>
        <div className="prose prose-lg text-muted-foreground space-y-4">
          <p>
            Our approach is warm, structured, and practical — never clinical, never overwhelming. We provide education and navigation support, not medical advice.
          </p>
          <p>
            We started Iberia Health Connect because we experienced firsthand the stress of navigating unfamiliar healthcare systems. The questions pile up quickly: How does public healthcare work? What about prescriptions? Should I use private care at first?
          </p>
          <p>
            We believe no one should have to figure this out through trial and error. Clarity reduces stress. Planning reduces risk.
          </p>
        </div>
      </div>
    </Section>

    <Section className="bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Our Values</SectionLabel>
        <SectionTitle className="mb-12">What guides our work</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: "Empathy First", desc: "We meet every client where they are, with discretion and care." },
            { icon: Shield, title: "Structured Clarity", desc: "We turn overwhelming systems into manageable steps." },
            { icon: Users, title: "Inclusive by Design", desc: "We support retirees, families, LGBTQ couples, and anyone navigating healthcare abroad." },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-8 shadow-[var(--shadow-card)]">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>Why Us</SectionLabel>
        <SectionTitle className="mb-8">Why Americans choose us</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4 text-left">
          {[
            "We understand U.S. healthcare expectations",
            "We understand Portugal and Spain systems",
            "We bridge the gap between them",
            "We prioritize clarity over overwhelm",
          ].map((item, i) => (
            <div key={i} className="bg-muted/50 rounded-xl p-5">
              <p className="text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl text-primary-foreground mb-4 font-serif">Ready to start planning?</h2>
        <p className="text-primary-foreground/70 mb-8">Book a free 15-minute consultation and get clarity on your move.</p>
        <CTAButton to="/contact" size="lg">Book a Free Consultation</CTAButton>
      </div>
    </section>
  </Layout>
);

export default About;
