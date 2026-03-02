import { CheckCircle } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel } from "@/components/Section";
import Layout from "@/components/Layout";

const OngoingCarePartner = () => (
  <Layout>
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-[0.2em] mb-4">Tier 3</p>
        <h1 className="text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
          Ongoing Care Partner: support after you arrive
        </h1>
        <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
          Healthcare needs change — new specialists, renewals, family changes, and unexpected admin. This tier is for clients who want a long-term partner.
        </p>
        <CTAButton to="/contact" size="lg">Book a Free 15-Minute Consultation</CTAButton>
      </div>
    </section>

    <Section>
      <div className="max-w-2xl mx-auto">
        <SectionLabel>What's Included</SectionLabel>
        <ul className="space-y-4 mt-6">
          {[
            "Everything in Tier 1 & 2",
            "Quarterly check-in calls (video or audio-only)",
            "Ongoing admin/navigation support by email",
            "Updates to your healthcare plan as needs evolve",
            "Extra attention to continuity of care and documentation",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>{item}</span></li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground mt-8">
          Especially helpful for retirees, families, and individuals managing ongoing prescriptions or complex care paths.
        </p>
      </div>
    </Section>

    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl text-primary-foreground mb-4 font-serif">Long-term peace of mind starts here.</h2>
        <p className="text-primary-foreground/70 mb-8">Book a free consultation and we'll help you find the right fit.</p>
        <CTAButton to="/contact" size="lg">Book a Free Consultation</CTAButton>
      </div>
    </section>
  </Layout>
);

export default OngoingCarePartner;
