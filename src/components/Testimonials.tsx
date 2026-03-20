import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Moved to Lisbon",
    text: "Iberia Health Connect made navigating Portugal's healthcare system feel manageable. I went from overwhelmed to confident in just one call.",
    rating: 5,
  },
  {
    name: "David & Karen L.",
    location: "Moved to Barcelona",
    text: "As retirees with ongoing prescriptions, we were terrified about gaps in care. They mapped out our entire first 90 days — every step was covered.",
    rating: 5,
  },
  {
    name: "Jessica T.",
    location: "Moved to Porto",
    text: "The ongoing care partnership is invaluable. Having someone who understands both U.S. and Portuguese systems has been a game-changer for our family.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-card border border-border rounded-2xl p-8 hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
        >
          <div className="flex gap-1 mb-4">
            {Array.from({ length: t.rating }).map((_, j) => (
              <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
            ))}
          </div>
          <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
            "{t.text}"
          </p>
          <div className="border-t border-border pt-4">
            <p className="font-semibold text-sm text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.location}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonials;
