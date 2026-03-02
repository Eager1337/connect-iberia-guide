import { Link } from "react-router-dom";
import { ArrowRight, FileText, Globe, BookOpen } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import Layout from "@/components/Layout";

const resources = [
  {
    icon: Globe,
    title: "Portugal vs Spain Healthcare Comparison",
    desc: "A comprehensive side-by-side comparison of healthcare systems for Americans.",
    link: "/portugal-vs-spain",
  },
  {
    icon: FileText,
    title: "Healthcare in Portugal for Americans",
    desc: "Everything you need to know about navigating healthcare in Portugal.",
    link: "/portugal-healthcare",
  },
  {
    icon: FileText,
    title: "Healthcare in Spain for Americans",
    desc: "A detailed guide to Spain's healthcare system for U.S. citizens.",
    link: "/spain-healthcare",
  },
  {
    icon: BookOpen,
    title: "Frequently Asked Questions",
    desc: "Answers to the most common questions about our services and healthcare abroad.",
    link: "/faq",
  },
];

const Resources = () => (
  <Layout>
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">Resources</h1>
        <p className="text-lg text-primary-foreground/70 leading-relaxed">
          Guides, comparisons, and planning tools for Americans relocating to Portugal or Spain.
        </p>
      </div>
    </section>

    <Section>
      <div className="max-w-3xl mx-auto">
        <div className="grid gap-6">
          {resources.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="flex items-start gap-6 bg-card border border-border rounded-xl p-6 hover:shadow-[var(--shadow-soft)] transition-all group"
            >
              <item.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </div>
    </Section>

    {/* Lead Magnet */}
    <Section className="bg-muted/50">
      <div className="max-w-2xl mx-auto text-center">
        <SectionLabel>Free Download</SectionLabel>
        <SectionTitle className="mb-4">Healthcare Planning Checklist</SectionTitle>
        <SectionDescription>
          "Healthcare Planning Checklist for Americans Moving to Portugal or Spain (First 90 Days)" — a practical guide to help you plan ahead.
        </SectionDescription>
        <div className="bg-card border border-border rounded-2xl p-8 mt-8 text-left">
          <p className="text-sm text-muted-foreground mb-6">Enter your email to receive the free checklist:</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Connect to backend
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="you@example.com"
              required
              maxLength={255}
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm shadow-[var(--shadow-cta)] hover:brightness-105 transition-all"
            >
              Get the Checklist
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-3">We'll send a download link to your inbox. No spam, ever.</p>
        </div>
      </div>
    </Section>

    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl text-primary-foreground mb-4 font-serif">Need personalized guidance?</h2>
        <p className="text-primary-foreground/70 mb-8">Book a free 15-minute consultation.</p>
        <CTAButton to="/contact" size="lg">Book a Free Consultation</CTAButton>
      </div>
    </section>
  </Layout>
);

export default Resources;
