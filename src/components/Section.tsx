import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id }: SectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={`py-20 lg:py-28 ${className}`}
  >
    <div className="container mx-auto px-4 lg:px-8">{children}</div>
  </motion.section>
);

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
    {children}
  </span>
);

export const SectionTitle = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`text-3xl lg:text-4xl xl:text-5xl leading-tight text-balance ${className}`}>
    {children}
  </h2>
);

export const SectionDescription = ({ children }: { children: ReactNode }) => (
  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mt-4">
    {children}
  </p>
);
