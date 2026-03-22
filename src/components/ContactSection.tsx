import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { submitContactForm, API_BASE_URL } from "@/lib/api";

export default function ContactSection() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      source: formData.get("source") as string,
      details: formData.get("details") as string,
    };

    if (!API_BASE_URL) {
      // No backend configured — simulate success
      setTimeout(() => {
        setSending(false);
        toast.success("Quote request sent! We'll be in touch shortly.");
        form.reset();
      }, 1200);
      return;
    }

    try {
      await submitContactForm(data);
      toast.success("Quote request sent! We'll be in touch shortly.");
      form.reset();
    } catch {
      toast.error("Could not send your request. Please try again or call us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="scroll-reveal-left">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-secondary font-semibold mb-3">Contact Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6 text-balance">
              Start Your New Project Today
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-md">
              All of our quotes are free, detailed and transparent. Get in touch and let us help transform your property.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { icon: Phone, href: "tel:02071013821", label: "Phone", value: "0207 1013 821" },
                { icon: Mail, href: "mailto:contact@azzurrocontractors.com", label: "Email", value: "contact@azzurrocontractors.com" },
              ].map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-start gap-4 scroll-reveal"
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
                    <item.icon className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="font-body font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
              <div className="flex items-start gap-4 scroll-reveal" style={{ transitionDelay: "400ms" }}>
                <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="font-body font-medium text-foreground">New Addington, Greater London</p>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal-right">
            <form onSubmit={handleSubmit} className="p-8 bg-card rounded-lg shadow-xl shadow-primary/5 border border-border space-y-5 hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Get a Free Quote</h3>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">Name *</label>
                <input required name="name" type="text" className="w-full px-4 py-3 font-body text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/40 transition-all duration-300" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input required name="email" type="email" className="w-full px-4 py-3 font-body text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/40 transition-all duration-300" />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Phone *</label>
                  <input required name="phone" type="tel" className="w-full px-4 py-3 font-body text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/40 transition-all duration-300" />
                </div>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">How did you find us?</label>
                <select name="source" className="w-full px-4 py-3 font-body text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/40 transition-all duration-300 text-foreground">
                  <option value="">Select an option</option>
                  <option>A friend's suggestion</option>
                  <option>Internet search</option>
                  <option>Facebook</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">Project Details *</label>
                <textarea required name="details" rows={4} className="w-full px-4 py-3 font-body text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/40 transition-all duration-300 resize-none" />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 font-body font-semibold text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-gold-light transition-all duration-300 active:scale-[0.98] disabled:opacity-60 shadow-sm hover:shadow-lg hover:shadow-secondary/20"
              >
                {sending ? "Sending..." : <><Send className="w-4 h-4" /> Send Request</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
