import { Paintbrush, Wrench, Plug, Droplets, Home, Building2 } from "lucide-react";

const services = [
  { icon: Home, title: "Refurbishment", desc: "Complete replacement of electrics, plumbing, drainage, gas and more with minimal disruption." },
  { icon: Paintbrush, title: "Decorating", desc: "Full spectrum of internal and external painting services using premium products." },
  { icon: Plug, title: "Electrical", desc: "Consumer unit upgrades, rewiring, smart home installations and EV charger fitting." },
  { icon: Droplets, title: "Plumbing", desc: "Full bathroom and kitchen plumbing, boiler installation and underfloor heating." },
  { icon: Building2, title: "Extensions", desc: "Loft conversions, side returns, rear extensions — from planning to completion." },
  { icon: Wrench, title: "General Building", desc: "Brickwork, roofing, structural alterations and complete new builds." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-secondary font-semibold mb-3">What We Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            Our Speciality Includes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative p-8 bg-card rounded-lg border border-border hover:border-secondary/40 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-2 scroll-reveal overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-transparent transition-all duration-500 rounded-lg" />
              
              <div className="relative z-10">
                <s.icon className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 origin-left" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
