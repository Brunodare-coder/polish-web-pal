import { Shield, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Our Guarantee",
    desc: "All projects are led by a Project Manager and/or Foreman to ensure the build is completed on time and to budget.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Our team consists of fully qualified engineers with relevant qualifications, certifications and years of expertise.",
  },
  {
    icon: Clock,
    title: "On Time Delivery",
    desc: "We provide detailed schedules and keep you informed at every stage, ensuring minimal disruption to your daily life.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-secondary font-semibold mb-3">Why Choose Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            Your Trusted Partner in Property Transformation
          </h2>
          <p className="mt-4 font-body text-muted-foreground leading-relaxed">
            We are focused on providing integrated solutions and services to customers around England. Putting our clients' interests first, we work hard to exceed your expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group p-8 bg-card rounded-lg shadow-md shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-shadow scroll-reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <f.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
