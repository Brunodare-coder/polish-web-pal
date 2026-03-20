import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb: string }) {
  return (
    <section className="relative bg-primary py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--navy-light)/0.5),transparent_70%)]" />
      <div className="container relative z-10">
        <div className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 mb-4">
          <Link to="/" className="hover:text-primary-foreground/80 transition-colors">Home</Link>
          <ArrowRight className="w-3 h-3" />
          <span className="text-gold-light">{breadcrumb}</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.05] tracking-tight text-balance scroll-reveal">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-body text-lg text-primary-foreground/70 max-w-xl leading-relaxed scroll-reveal" style={{ transitionDelay: "100ms" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
