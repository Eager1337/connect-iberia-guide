import { useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";
import { Section, SectionLabel, SectionTitle } from "@/components/Section";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    moveDate: "",
    country: "",
    prescriptions: "",
    familySize: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    // Simulated - connect to backend with Lovable Cloud
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Thank you!", description: "We'll be in touch within 24 hours." });
    setFormData({ name: "", email: "", moveDate: "", country: "", prescriptions: "", familySize: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
            Book a Free 15-Minute Consultation
          </h1>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Tell us a little about your situation. We'll be in touch within 24 hours to schedule your free call.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  required
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                  maxLength={255}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="moveDate">Target Move Date</Label>
                <Input
                  id="moveDate"
                  type="date"
                  value={formData.moveDate}
                  onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Country Preference</Label>
                <Select value={formData.country} onValueChange={(v) => setFormData({ ...formData, country: v })}>
                  <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="portugal">Portugal</SelectItem>
                    <SelectItem value="spain">Spain</SelectItem>
                    <SelectItem value="undecided">Undecided</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="prescriptions">Prescription Concerns (optional)</Label>
                <Input
                  id="prescriptions"
                  value={formData.prescriptions}
                  onChange={(e) => setFormData({ ...formData, prescriptions: e.target.value })}
                  placeholder="Any ongoing prescriptions?"
                  maxLength={500}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="familySize">Family Size (optional)</Label>
                <Input
                  id="familySize"
                  value={formData.familySize}
                  onChange={(e) => setFormData({ ...formData, familySize: e.target.value })}
                  placeholder="e.g., 2 adults, 1 child"
                  maxLength={100}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your situation and any specific concerns..."
                rows={5}
                maxLength={1000}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-lg bg-secondary text-secondary-foreground font-semibold text-base shadow-[var(--shadow-cta)] hover:brightness-105 transition-all disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message & Book Consultation"}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              We'll recommend the right tier of support after we understand your needs. Audio-only calls are always available.
            </p>
          </motion.form>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
