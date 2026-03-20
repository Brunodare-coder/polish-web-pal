import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-light mb-4 scroll-reveal">
            Commercial & Residential
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] tracking-tight text-balance scroll-reveal" style={{ transitionDelay: "100ms" }}>
            Complete Property Refurbishment & Remodeling
          </h1>
          <p className="mt-6 font-body text-lg md:text-xl text-primary-foreground/80 max-w-lg leading-relaxed scroll-reveal" style={{ transitionDelay: "200ms" }}>
            Integrated solutions and exceptional service across England. We put your interests first and work hard to exceed expectations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 scroll-reveal" style={{ transitionDelay: "300ms" }}>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 font-body font-semibold bg-secondary text-secondary-foreground rounded-md hover:bg-gold-light transition-colors active:scale-[0.97] shadow-lg shadow-secondary/30 text-sm tracking-wide uppercase"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="px-8 py-4 font-body font-semibold border-2 border-primary-foreground/30 text-primary-foreground rounded-md hover:bg-primary-foreground/10 transition-colors active:scale-[0.97] text-sm tracking-wide uppercase"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
