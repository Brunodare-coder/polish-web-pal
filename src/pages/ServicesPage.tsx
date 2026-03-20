import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Paintbrush, Wrench, Plug, Droplets, Home, Building2, ArrowUpRight, Layers } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Refurbishment",
    desc: "Our service offers complete replacement of electrics, plumbing, drainage, gas etc. We understand that refurbishment often means living or working on the 'building site', therefore we provide a schedule of work with distinction into stages to make it least inconvenient to clients. Our project manager or foreman will keep you updated, inform of any alteration and provide a time scale of completion.",
  },
  {
    icon: Paintbrush,
    title: "Decorating",
    desc: "We offer a full spectrum of decoration services covering all types of internal and external painting. We work on big and small projects using a variety of premium products to reach the required result and quality finish every time.",
  },
  {
    icon: Building2,
    title: "Extensions",
    desc: "We help clients with space planning to maximize property potential. We offer relevant certificates on completion and assist with planning permission application and local authorities inspections where applicable. Our dedicated Project Manager ensures projects are finished professionally and on time.",
  },
  {
    icon: Wrench,
    title: "Bespoke Kitchen, Bathroom & Bedroom",
    desc: "Our service consists of made to measure cabinets, fittings and all sorts of furniture. We match existing designs or create something unique. We also co-operate with high street suppliers like Benchmark, Bath Store, Howdens and more.",
  },
  {
    icon: Layers,
    title: "Loft Conversions",
    desc: "Loft conversions are potentially the easiest way of getting an extra room. We offer our view on design, structural work and layout. Our company organises scaffold, all necessary permits, and helps you understand building regulations and consents.",
  },
  {
    icon: Plug,
    title: "Electrical Services",
    desc: "Consumer unit upgrades, full rewiring, smart home installations, EV charger fitting, and all electrical certification. Our electricians are fully qualified and NICEIC accredited.",
  },
  {
    icon: Droplets,
    title: "Plumbing & Heating",
    desc: "Full bathroom and kitchen plumbing, boiler installation, underfloor heating, and Gas Safe registered gas work. We handle everything from small repairs to complete system installations.",
  },
  {
    icon: Home,
    title: "Engineered Surfaces & Flooring",
    desc: "Exterior decorative application, interior custom flooring, and industrial floor coatings. We provide high-performance surfaces that combine durability with aesthetics.",
  },
];

const steps = [
  { num: "01", title: "Initial Consultation", desc: "We discuss your vision, assess the property, and understand your requirements and budget." },
  { num: "02", title: "Detailed Quote", desc: "We provide a transparent, itemised quote with clear timescales and milestones." },
  { num: "03", title: "Project Execution", desc: "Our team delivers the work to the highest standards, keeping you informed at every stage." },
  { num: "04", title: "Final Handover", desc: "We walk through the completed project with you, ensuring every detail meets your expectations." },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Our Services"
        subtitle="Complete contracting resource providing exceptional service across all property needs."
        breadcrumb="Services"
      />

      {/* Services grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group p-8 bg-card rounded-lg border border-border hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5 transition-all scroll-reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <s.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-secondary font-semibold mb-3">How We Work</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Our Process
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="scroll-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="font-display text-4xl font-bold text-secondary/20">{step.num}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container text-center scroll-reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="font-body text-secondary-foreground/80 mb-8 max-w-md mx-auto">
            Get a free, detailed and transparent quote today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-body font-semibold text-sm bg-primary text-primary-foreground rounded-md hover:bg-navy-light transition-colors active:scale-[0.97] shadow-lg tracking-wide uppercase"
          >
            Get a Free Quote <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
