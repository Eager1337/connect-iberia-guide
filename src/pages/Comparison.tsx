import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const comparisonData = [
  {
    category: "Public Healthcare Structure",
    portugal: [
      "National public system",
      "Coordinated through assigned primary care",
      "Administrative setup required before full access",
    ],
    spain: [
      "National public system administered regionally",
      "Primary care coordinated",
      "Administrative steps vary slightly by region",
    ],
  },
  {
    category: "Private Healthcare Role",
    portugal: [
      "Often used during early transition",
      "Flexible appointments",
      "Common alongside public enrollment",
    ],
    spain: [
      "Widely used during initial months",
      "Broad provider access",
      "Often complements public system",
    ],
  },
];

const Comparison = () => (
  <Layout>
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-[0.2em] mb-4">Compare</p>
        <h1 className="text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
          Portugal vs Spain: choosing the right healthcare fit as an American
        </h1>
        <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
          Both countries offer strong public systems and extensive private options. But structure, timelines, and access pathways differ — and those differences matter.
        </p>
        <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
      </div>
    </section>

    {/* Comparison Cards */}
    {comparisonData.map((section, i) => (
      <Section key={i} className={i % 2 === 0 ? "" : "bg-muted/50"}>
        <div className="max-w-4xl mx-auto">
          <SectionTitle className="mb-8">{section.category}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl mb-4 text-primary">Portugal</h3>
              <ul className="space-y-3">
                {section.portugal.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground">• {item}</li>
                ))}
              </ul>
              <Link to="/portugal-healthcare" className="inline-flex items-center text-sm font-semibold text-primary mt-6 gap-2 hover:gap-3 transition-all">
                Explore Portugal <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl mb-4 text-secondary">Spain</h3>
              <ul className="space-y-3">
                {section.spain.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground">• {item}</li>
                ))}
              </ul>
              <Link to="/spain-healthcare" className="inline-flex items-center text-sm font-semibold text-primary mt-6 gap-2 hover:gap-3 transition-all">
                Explore Spain <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    ))}

    {/* Decision Lens */}
    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Decision Framework</SectionLabel>
        <SectionTitle className="mb-4">Instead of asking "Which country is better?"</SectionTitle>
        <SectionDescription>Consider these factors to find your fit.</SectionDescription>
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {[
            { title: "Timeline Sensitivity", desc: "If you need rapid access, prioritize private-first planning in either country." },
            { title: "Prescription Complexity", desc: "Both countries require thoughtful planning for medication naming, refills, and administrative timing." },
            { title: "Family Considerations", desc: "Establishing pediatric pathways and appointment sequencing reduces stress for families." },
            { title: "Administrative Comfort", desc: "Both countries require administrative setup steps. The experience differs from U.S. insurance-network logic." },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-serif text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* FAQ */}
    <Section className="bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>FAQ</SectionLabel>
        <SectionTitle className="mb-8">Portugal vs Spain Healthcare FAQ</SectionTitle>
        <Accordion type="single" collapsible className="space-y-2">
          {[
            { q: "Is healthcare better in Portugal or Spain?", a: "Both offer strong systems. The better choice depends on your timeline, prescription needs, and comfort navigating administrative processes." },
            { q: "Do Americans need private insurance in either country?", a: "Many Americans use private care during their transition in either country. Long-term decisions depend on individual circumstances." },
            { q: "Can you help me choose before I apply for a visa?", a: "Yes. Many clients consult us before committing so healthcare realities inform their decision." },
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border px-6">
              <AccordionTrigger className="text-sm font-medium text-left">{item.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>

    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl text-primary-foreground mb-4 font-serif">You don't have to choose alone.</h2>
        <p className="text-primary-foreground/70 mb-8">We'll help you compare based on your real life — not generic rankings.</p>
        <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
      </div>
    </section>
  </Layout>
);

export default Comparison;
