import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Azzurro Contractors was able to diagnose the problems very quickly and they fixed all of them. It really felt like a blessing for us because some of these problems were ongoing for almost a year. We were so happy with the quality and speed of the work.",
    name: "Naveed",
    location: "Thornton Heath, Croydon",
  },
  {
    text: "The work done was completed with care and a quality finish. The team were very respectful and trustworthy. Complete redevelopment of our 1 bedroom apartment was handled flawlessly.",
    name: "Felipe",
    location: "Chelsea, London",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-gold-light font-semibold mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight text-balance">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative p-8 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 scroll-reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-secondary/60 mb-4" />
              <p className="font-body text-primary-foreground/85 leading-relaxed mb-6 text-sm">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-primary-foreground">{t.name}</p>
                <p className="font-body text-sm text-primary-foreground/60">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
