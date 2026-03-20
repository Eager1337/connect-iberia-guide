import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pb-20 lg:pb-0">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <img src={logoWhite} alt="Iberia Health Connect" className="h-14" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Healthcare planning support for Americans relocating to Portugal or Spain.
            </p>
            <div className="space-y-3 pt-2">
              <a href="mailto:hello@iberiahealthconnect.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" /> hello@iberiahealthconnect.com
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all text-sm font-semibold">f</a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all text-sm font-semibold">in</a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all text-sm font-semibold">ig</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-5 uppercase tracking-wider text-primary-foreground/60">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/healthcare-orientation" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all">Healthcare Orientation</Link></li>
              <li><Link to="/services/guided-setup" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all">Guided Setup</Link></li>
              <li><Link to="/services/ongoing-care-partner" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all">Ongoing Care Partner</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all">Book a Consultation</Link></li>
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-5 uppercase tracking-wider text-primary-foreground/60">Compare</h4>
            <ul className="space-y-3">
              <li><Link to="/portugal-vs-spain" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all">Portugal vs Spain</Link></li>
              <li><Link to="/portugal-healthcare" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all">Healthcare in Portugal</Link></li>
              <li><Link to="/spain-healthcare" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all">Healthcare in Spain</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans font-semibold text-sm mb-5 uppercase tracking-wider text-primary-foreground/60">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all">About Us</Link></li>
              <li><Link to="/faq" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all">FAQ</Link></li>
              <li><Link to="/resources" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all">Resources</Link></li>
              <li><Link to="/privacy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Iberia Health Connect. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            We provide education and navigation support, not medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
