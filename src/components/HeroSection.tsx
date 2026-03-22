import { useEffect, useState } from "react";
import { useParallax } from "@/hooks/useParallax";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const { ref: parallaxRef, offset } = useParallax(0.4);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={parallaxRef} className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover transition-transform duration-100 will-change-transform"
          style={{ transform: `translateY(${offset * 0.5}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-2xl animate-float" />
      <div className="absolute bottom-32 right-1/4 w-24 h-24 rounded-full bg-gold-light/10 blur-xl animate-float-delayed" />
      <div className="absolute top-1/3 left-10 w-16 h-16 rounded-full bg-primary-foreground/5 blur-lg animate-float-delayed" />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <p
            className={`font-body text-sm tracking-[0.3em] uppercase text-gold-light mb-4 transition-all duration-1000 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Commercial & Residential
          </p>
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] tracking-tight text-balance transition-all duration-1000 ease-out delay-150 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Complete Property{" "}
            <span className="bg-gradient-to-r from-secondary via-gold-light to-secondary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">Refurbishment</span>{" "}
            & Remodeling
          </h1>
          <p
            className={`mt-6 font-body text-lg md:text-xl text-primary-foreground/80 max-w-lg leading-relaxed transition-all duration-1000 ease-out delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Integrated solutions and exceptional service across England. We put your interests first and work hard to exceed expectations.
          </p>
          <div
            className={`mt-8 flex flex-wrap gap-4 transition-all duration-1000 ease-out delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 font-body font-semibold bg-secondary text-secondary-foreground rounded-md hover:bg-gold-light transition-all active:scale-[0.97] shadow-lg shadow-secondary/30 text-sm tracking-wide uppercase hover:shadow-xl hover:shadow-secondary/40 glow-pulse"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="px-8 py-4 font-body font-semibold border-2 border-primary-foreground/30 text-primary-foreground rounded-md hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all active:scale-[0.97] text-sm tracking-wide uppercase"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
