import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle } from "@/components/Section";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqSections = [
  {
    title: "About Working With Us",
    items: [
      { q: "Do you provide medical advice?", a: "No. We provide education, planning guidance, and navigation support so you can understand how healthcare systems in Portugal and Spain work. For medical decisions, consult a licensed healthcare provider." },
      { q: "What exactly do you help with?", a: "We help Americans relocating from the U.S. understand public vs private healthcare systems, plan their first 30–90 days strategically, prepare for prescription continuity, compare Portugal vs Spain healthcare realities, and organize next steps." },
      { q: "What don't you help with?", a: "We don't provide medical advice, act as healthcare providers, offer emergency services, represent clients in medical settings, or handle visas, housing, or tax planning." },
      { q: "How does the free 15-minute consultation work?", a: "We learn about your timeline, understand your concerns (only what you're comfortable sharing), clarify how healthcare works for your situation, and recommend the appropriate tier of support. There's no obligation to continue." },
      { q: "How do I know which tier I need?", a: "You don't need to decide ahead of time. During the free consultation, we'll recommend the level of support that fits your timeline, comfort level, and complexity." },
      { q: "Can we meet by audio only?", a: "Yes. If you're more comfortable not being on video, we're happy to conduct the free consultation and follow-up sessions by audio only." },
    ],
  },
  {
    title: "Healthcare Planning",
    items: [
      { q: "Can I start planning healthcare before I move?", a: "Yes. Planning ahead is the easiest way to reduce stress — especially if you have prescriptions, ongoing care needs, or are relocating with family." },
      { q: "How do prescriptions work when moving abroad?", a: "Medication names and processes can differ. Prepare documentation, confirm generic names, and create a continuity plan to avoid gaps during your first months." },
      { q: "Is public healthcare available right away?", a: "Access depends on administrative steps, timing, and visa type. Many newcomers benefit from a step-by-step plan for the first 30–90 days." },
      { q: "Can you help if I'm deciding between Portugal and Spain?", a: "Yes. We help Americans compare practical healthcare realities in both countries so you can choose based on your timeline, prescriptions, and family needs." },
    ],
  },
];

const FAQ = () => (
  <Layout>
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-primary-foreground/70 leading-relaxed">
          Everything you need to know about healthcare planning for Americans moving to Portugal or Spain.
        </p>
      </div>
    </section>

    {faqSections.map((section, si) => (
      <Section key={si} className={si % 2 === 0 ? "" : "bg-muted/50"}>
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{section.title}</SectionLabel>
          <Accordion type="single" collapsible className="space-y-2 mt-6">
            {section.items.map((item, i) => (
              <AccordionItem key={i} value={`${si}-${i}`} className="bg-card rounded-xl border px-6">
                <AccordionTrigger className="text-sm font-medium text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    ))}

    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl text-primary-foreground mb-4 font-serif">Still have questions?</h2>
        <p className="text-primary-foreground/70 mb-8">Start with a free 15-minute consultation. No pressure, no obligation.</p>
        <CTAButton to="/contact" size="lg">Book a Free Consultation</CTAButton>
      </div>
    </section>
  </Layout>
);

export default FAQ;
