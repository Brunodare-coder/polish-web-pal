import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Quote request sent! We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="scroll-reveal-left">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-secondary font-semibold mb-3">Contact Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6 text-balance">
              Start Your New Project Today
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-md">
              All of our quotes are free, detailed and transparent. Get in touch and let us help transform your property.
            </p>

            <div className="flex flex-col gap-6">
              <a href="tel:02071013821" className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="font-body font-medium text-foreground">0207 1013 821</p>
                </div>
              </a>
              <a href="mailto:contact@azzurrocontractors.com" className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-body font-medium text-foreground">contact@azzurrocontractors.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
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

          {/* Form */}
          <div className="scroll-reveal-right">
            <form onSubmit={handleSubmit} className="p-8 bg-card rounded-lg shadow-xl shadow-primary/5 border border-border space-y-5">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Get a Free Quote</h3>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">Name *</label>
                <input required type="text" className="w-full px-4 py-3 font-body text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-shadow" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input required type="email" className="w-full px-4 py-3 font-body text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-shadow" />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Phone *</label>
                  <input required type="tel" className="w-full px-4 py-3 font-body text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-shadow" />
                </div>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">How did you find us?</label>
                <select className="w-full px-4 py-3 font-body text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-shadow text-foreground">
                  <option value="">Select an option</option>
                  <option>A friend's suggestion</option>
                  <option>Internet search</option>
                  <option>Facebook</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">Project Details *</label>
                <textarea required rows={4} className="w-full px-4 py-3 font-body text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-shadow resize-none" />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 font-body font-semibold text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-gold-light transition-colors active:scale-[0.98] disabled:opacity-60 shadow-sm"
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
