import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--navy-light)/0.5),transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Floating circles */}
      <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-secondary/5 blur-2xl animate-float" />
      <div className="absolute bottom-10 left-20 w-24 h-24 rounded-full bg-gold-light/5 blur-xl animate-float-delayed" />

      <div className="container relative z-10">
        <div
          className={`flex items-center gap-2 font-body text-sm text-primary-foreground/50 mb-4 transition-all duration-700 ease-out ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <Link to="/" className="hover:text-primary-foreground/80 transition-colors">Home</Link>
          <ArrowRight className="w-3 h-3" />
          <span className="text-gold-light">{breadcrumb}</span>
        </div>
        <h1
          className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.05] tracking-tight text-balance transition-all duration-1000 ease-out delay-100 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-4 font-body text-lg text-primary-foreground/70 max-w-xl leading-relaxed transition-all duration-1000 ease-out delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
