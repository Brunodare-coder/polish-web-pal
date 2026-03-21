import { Quote } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

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
  const { ref, offset } = useParallax(0.15);

  return (
    <section id="testimonials" ref={ref} className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div
        className="absolute top-10 right-10 w-64 h-64 rounded-full border border-primary-foreground/5 will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      />
      <div
        className="absolute bottom-10 left-10 w-40 h-40 rounded-full border border-primary-foreground/5 will-change-transform"
        style={{ transform: `translateY(${-offset * 0.5}px)` }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container relative z-10">
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
              className="group relative p-8 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-500 hover:-translate-y-1 scroll-reveal"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-secondary/60 mb-4 group-hover:text-secondary group-hover:scale-110 transition-all duration-500" />
              <p className="font-body text-primary-foreground/85 leading-relaxed mb-6 text-sm">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-display font-bold text-secondary text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-display font-semibold text-primary-foreground">{t.name}</p>
                  <p className="font-body text-sm text-primary-foreground/60">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
