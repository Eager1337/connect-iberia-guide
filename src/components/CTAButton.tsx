import { Link } from "react-router-dom";

interface CTAButtonProps {
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  children: React.ReactNode;
  className?: string;
}

const CTAButton = ({ to, href, variant = "primary", size = "default", children, className = "" }: CTAButtonProps) => {
  const base = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200";
  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const variants = {
    primary: "bg-secondary text-secondary-foreground shadow-[var(--shadow-cta)] hover:brightness-105 hover:scale-[1.02]",
    secondary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
};

export default CTAButton;
