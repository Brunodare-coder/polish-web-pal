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
    <section id="services" className="py-24 md:py-32 bg-muted/50">
      <div className="container">
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
              className="group relative p-8 bg-card rounded-lg border border-border hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/5 scroll-reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <s.icon className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
