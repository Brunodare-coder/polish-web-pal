import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Shield, Eye, Target, Users, CheckCircle2, ArrowUpRight } from "lucide-react";

const values = [
  { icon: Shield, label: "Communication" },
  { icon: Eye, label: "Accountability" },
  { icon: Target, label: "Professionalism" },
  { icon: Users, label: "Team Management" },
];

const mission = [
  "Safety",
  "Integrity",
  "Quality",
  "Customer Satisfaction",
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        title="About Us"
        subtitle="More than 10 years of experience delivering exceptional property refurbishment and remodeling."
        breadcrumb="About"
      />

      {/* Main about */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="scroll-reveal-left">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-secondary font-semibold mb-3">Who We Are</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6 text-balance">
                More Than 10 Years of Experience
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                We are a team full of dedication ready to cater to your needs. Providing outstanding customer service and exceptional quality of work.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Complete property refurbishment & remodeling with over 10 years of experience, we guide our customers through all stages of projects which are led by Project Manager and/or Foreman to ensure the build is completed on time and to budget.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our team consists of fully qualified engineers, with relevant qualifications and expertise across all building trades.
              </p>
            </div>

            <div className="scroll-reveal-right space-y-8">
              {/* Vision */}
              <div className="p-8 bg-card rounded-lg border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-5">Our Vision</h3>
                <div className="grid grid-cols-2 gap-4">
                  {values.map((v) => (
                    <div key={v.label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-md bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <v.icon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="font-body text-sm font-medium text-foreground">{v.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission */}
              <div className="p-8 bg-primary rounded-lg">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-5">Our Mission</h3>
                <div className="space-y-3">
                  {mission.map((m) => (
                    <div key={m} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="font-body text-sm text-primary-foreground/85">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-secondary font-semibold mb-3">Our Associations</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              We Are Accredited By
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 scroll-reveal" style={{ transitionDelay: "100ms" }}>
            {["ECS Certified", "Gas Safe Registered", "NICEIC Approved"].map((name) => (
              <div key={name} className="px-8 py-5 rounded-lg bg-card border border-border shadow-sm font-body text-sm font-semibold text-foreground">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container text-center scroll-reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 text-balance">
            Our Team Is Ready to Help You Achieve Your Dreams
          </h2>
          <p className="font-body text-secondary-foreground/80 mb-8 max-w-md mx-auto">
            Guaranteeing sufficient cost savings and high-quality materials.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-body font-semibold text-sm bg-primary text-primary-foreground rounded-md hover:bg-navy-light transition-colors active:scale-[0.97] shadow-lg tracking-wide uppercase"
          >
            Get a Quote <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
