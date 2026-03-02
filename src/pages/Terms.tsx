import Layout from "@/components/Layout";
import { Section } from "@/components/Section";

const Terms = () => (
  <Layout>
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="text-4xl text-primary-foreground">Terms of Service</h1>
      </div>
    </section>
    <Section>
      <div className="max-w-3xl mx-auto prose prose-sm text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h3 className="font-serif text-foreground">Services</h3>
        <p>Iberia Health Connect provides healthcare navigation support, education, and planning guidance for Americans relocating to Portugal or Spain. We do not provide medical advice, diagnoses, or treatment recommendations.</p>
        <h3 className="font-serif text-foreground">Disclaimer</h3>
        <p>Our services are educational and navigational in nature. For medical decisions, diagnoses, or treatment, please consult a licensed healthcare provider. We are not a healthcare provider and do not offer emergency services.</p>
        <h3 className="font-serif text-foreground">User Responsibilities</h3>
        <p>You agree to provide accurate information and acknowledge that decisions regarding your healthcare are your own responsibility. You understand that healthcare systems change and information provided is current as of the date of your consultation.</p>
        <h3 className="font-serif text-foreground">Limitation of Liability</h3>
        <p>Iberia Health Connect shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or reliance on information provided.</p>
        <h3 className="font-serif text-foreground">Changes to Terms</h3>
        <p>We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
      </div>
    </Section>
  </Layout>
);

export default Terms;
