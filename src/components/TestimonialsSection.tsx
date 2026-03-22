import { useEffect, useState } from "react";
import { Quote, Star, Send } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { fetchTestimonials, submitTestimonial, API_BASE_URL } from "@/lib/api";
import { toast } from "sonner";

interface Testimonial {
  id?: number;
  text: string;
  name: string;
  location: string;
  rating?: number;
}

const staticTestimonials: Testimonial[] = [
  {
    text: "Azzurro Contractors was able to diagnose the problems very quickly and they fixed all of them. It really felt like a blessing for us because some of these problems were ongoing for almost a year. We were so happy with the quality and speed of the work.",
    name: "Naveed",
    location: "Thornton Heath, Croydon",
    rating: 5,
  },
  {
    text: "The work done was completed with care and a quality finish. The team were very respectful and trustworthy. Complete redevelopment of our 1 bedroom apartment was handled flawlessly.",
    name: "Felipe",
    location: "Chelsea, London",
    rating: 5,
  },
  {
    text: "Excellent service from start to finish. The kitchen renovation exceeded our expectations. Professional team, always on time, and the attention to detail was remarkable.",
    name: "Sarah",
    location: "Greenwich, London",
    rating: 5,
  },
  {
    text: "We hired Azzurro for a full bathroom remodel and couldn't be happier. They suggested great ideas we hadn't considered and delivered everything on budget.",
    name: "James",
    location: "Richmond, London",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, offset } = useParallax(0.15);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(staticTestimonials);

  useEffect(() => {
    fetchTestimonials().then((data) => {
      if (data && Array.isArray(data) && data.length > 0) {
        setTestimonials(data);
      }
    });
  }, []);

  return (
    <section id="testimonials" ref={ref} className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
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
            What Our <span className="bg-gradient-to-r from-secondary via-gold-light to-secondary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">Clients</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name + i}
              className="group relative p-8 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-500 hover:-translate-y-1 scroll-reveal"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-secondary/60 group-hover:text-secondary group-hover:scale-110 transition-all duration-500" />
                {t.rating && (
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                )}
              </div>
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

        {/* Leave Feedback CTA */}
        <div className="mt-16 text-center scroll-reveal">
          <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
            Leave Your <span className="bg-gradient-to-r from-secondary via-gold-light to-secondary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">Feedback</span>
          </h3>
          <p className="font-body text-sm text-primary-foreground/60 mb-6">
            Share your experience with us — your feedback helps us improve.
          </p>
          <a
            href="https://azzurrocontractors.com/guestbook/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 font-body font-semibold text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-gold-light transition-all duration-300 active:scale-[0.98] shadow-lg shadow-secondary/30 uppercase tracking-wide"
          >
            <Star className="w-4 h-4" /> Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}
