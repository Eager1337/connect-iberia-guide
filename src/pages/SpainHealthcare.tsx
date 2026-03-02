import { CheckCircle } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SpainHealthcare = () => (
  <Layout>
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-[0.2em] mb-4">Spain</p>
        <h1 className="text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
          Healthcare in Spain for Americans relocating from the United States
        </h1>
        <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
          Spain has a large public healthcare system alongside extensive private options. The biggest adjustment isn't quality — it's understanding how access works.
        </p>
        <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
      </div>
    </section>

    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Overview</SectionLabel>
        <SectionTitle className="mb-4">How Spain's healthcare system works for Americans</SectionTitle>
        <SectionDescription>
          Spain offers a national public healthcare structure, regional administration differences, a robust private sector, and optional private insurance plans. The transition involves adjusting expectations about referral systems, appointment timelines, and documentation.
        </SectionDescription>
      </div>
    </Section>

    <Section className="bg-muted/50">
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl mb-4">Public Care</h3>
          <ul className="space-y-3">
            {["Coordinated through assigned primary providers", "Structured access", "Regionally administered"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-4">Private Care</h3>
          <ul className="space-y-3">
            {["Often faster access", "More flexibility in provider selection", "Common during early transition"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Planning Ahead</SectionLabel>
        <SectionTitle className="mb-6">Your First Months in Spain</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Gather medical records and a short health history summary",
            "Confirm medication names (generic names matter)",
            "Plan a prescription bridge",
            "Decide your initial path (public, private, or mixed)",
            "Create a first appointments plan",
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
        <SectionTitle className="mb-8">Spain Healthcare FAQ for Americans</SectionTitle>
        <Accordion type="single" collapsible className="space-y-2">
          {[
            { q: "Do Americans need private health insurance in Spain?", a: "It depends on your timeline, needs, and specific visa. Many Americans use private care during the transition period." },
            { q: "Is public healthcare available right away?", a: "Digital Nomads may have access quickly, but other visa holders typically must wait until they've had residency for at least one year." },
            { q: "Does healthcare work differently by region in Spain?", a: "Yes, Spain's public healthcare is administered regionally, so the experience can vary. A personalized plan helps." },
            { q: "Can you help if I'm deciding between Portugal and Spain?", a: "Yes. We help Americans compare practical healthcare realities in both countries." },
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
        <h2 className="text-3xl text-primary-foreground mb-4 font-serif">Moving to Spain and want clarity?</h2>
        <p className="text-primary-foreground/70 mb-8">We'll help you understand your options and recommend the right tier of support.</p>
        <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
      </div>
    </section>
  </Layout>
);

export default SpainHealthcare;
