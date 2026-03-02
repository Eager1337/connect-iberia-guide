import Layout from "@/components/Layout";
import { Section, SectionTitle } from "@/components/Section";

const Privacy = () => (
  <Layout>
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="text-4xl text-primary-foreground">Privacy Policy</h1>
      </div>
    </section>
    <Section>
      <div className="max-w-3xl mx-auto prose prose-sm text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h3 className="font-serif text-foreground">Information We Collect</h3>
        <p>We collect information you provide directly, including your name, email address, and details about your relocation plans when you submit our contact form or request resources.</p>
        <h3 className="font-serif text-foreground">How We Use Your Information</h3>
        <p>We use your information to respond to consultation requests, provide healthcare navigation support, send requested resources, and improve our services.</p>
        <h3 className="font-serif text-foreground">Information Sharing</h3>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business.</p>
        <h3 className="font-serif text-foreground">Data Security</h3>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        <h3 className="font-serif text-foreground">Your Rights</h3>
        <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us.</p>
        <h3 className="font-serif text-foreground">Contact</h3>
        <p>For questions about this privacy policy, please contact us through our contact page.</p>
      </div>
    </Section>
  </Layout>
);

export default Privacy;
