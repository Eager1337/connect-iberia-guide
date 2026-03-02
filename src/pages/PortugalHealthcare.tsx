import { CheckCircle } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PortugalHealthcare = () => (
  <Layout>
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-[0.2em] mb-4">Portugal</p>
        <h1 className="text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
          Healthcare in Portugal for Americans moving from the U.S.
        </h1>
        <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
          Portugal offers both public and private healthcare options. Many Americans use some combination depending on their timeline and needs.
        </p>
        <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
      </div>
    </section>

    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Overview</SectionLabel>
        <SectionTitle className="mb-4">How Healthcare in Portugal Works for U.S. Citizens</SectionTitle>
        <SectionDescription>
          Portugal has a national public healthcare system alongside a strong private sector. Many Americans use private care early while getting established, then choose a longer-term mix based on timelines, prescriptions, and family needs.
        </SectionDescription>
      </div>
    </Section>

    <Section className="bg-muted/50">
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl mb-4">Public Care</h3>
          <ul className="space-y-3">
            {["Accessible once properly established", "Coordinated through assigned primary care", "Structured differently from U.S. insurance networks"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-4">Private Care</h3>
          <ul className="space-y-3">
            {["Often used for faster access", "Appointment flexibility", "Common alongside public enrollment"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Planning Ahead</SectionLabel>
        <SectionTitle className="mb-6">Your First 30–90 Days</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Bringing complete medical records",
            "Confirming medication names (generic equivalents matter)",
            "Planning for a prescription buffer",
            "Understanding what documentation you may need",
            "Mapping out your first appointments strategically",
          ].map((item, i) => (
            <div key={i} className="bg-muted/50 rounded-xl p-5">
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section className="bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>FAQ</SectionLabel>
        <SectionTitle className="mb-8">Portugal Healthcare FAQ for Americans</SectionTitle>
        <Accordion type="single" collapsible className="space-y-2">
          {[
            { q: "Do Americans need private health insurance in Portugal?", a: "It depends on your timeline and needs. Many Americans use private care during the transition period and choose a longer-term approach once established." },
            { q: "Can I start planning healthcare before I move?", a: "Yes. Planning ahead is often the easiest way to reduce stress — especially with prescriptions, ongoing care needs, or family." },
            { q: "How do prescriptions work when moving from the U.S. to Portugal?", a: "Medication names and processes can differ. Prepare documentation, confirm generic names, and create a continuity plan to avoid gaps." },
            { q: "Is public healthcare available right away?", a: "Access depends on administrative steps and timing. Many newcomers benefit from a step-by-step plan for the first 30–90 days." },
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
        <h2 className="text-3xl text-primary-foreground mb-4 font-serif">Want a plan that fits your timeline?</h2>
        <p className="text-primary-foreground/70 mb-8">Relocating from the U.S. and want clarity before you land?</p>
        <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
      </div>
    </section>
  </Layout>
);

export default PortugalHealthcare;
