import { useState, useRef, useCallback, useEffect } from "react";

import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeBathroom from "@/assets/before-bathroom.jpg";
import afterBathroom from "@/assets/after-bathroom.jpg";
import beforeLiving from "@/assets/before-living.jpg";
import afterLiving from "@/assets/after-living.jpg";
import beforeKitchen2 from "@/assets/before-kitchen2.jpg";
import afterKitchen2 from "@/assets/after-kitchen2.jpg";
import beforeBedroom from "@/assets/before-bedroom.jpg";
import afterBedroom from "@/assets/after-bedroom.jpg";
import beforeExterior from "@/assets/before-exterior.jpg";
import afterExterior from "@/assets/after-exterior.jpg";

const projects = [
  { title: "Kitchen Renovation", location: "Chelsea, London", before: beforeKitchen, after: afterKitchen },
  { title: "Bathroom Remodel", location: "Croydon, Surrey", before: beforeBathroom, after: afterBathroom },
  { title: "Living Room Transformation", location: "Kensington, London", before: beforeLiving, after: afterLiving },
  { title: "Modern Kitchen Upgrade", location: "Brixton, London", before: beforeKitchen2, after: afterKitchen2 },
  { title: "Master Bedroom Makeover", location: "Greenwich, London", before: beforeBedroom, after: afterBedroom },
  { title: "Exterior Renovation", location: "Richmond, London", before: beforeExterior, after: afterExterior },
];

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove as EventListener);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-col-resize select-none shadow-lg shadow-primary/5"
      onMouseDown={(e) => { dragging.current = true; updatePosition(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; updatePosition(e.touches[0].clientX); }}
    >
      <img src={after} alt={`${title} after`} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={before} alt={`${title} before`} className="absolute inset-0 w-full h-full object-cover" style={{ width: `${containerRef.current?.offsetWidth || 100}px`, maxWidth: "none" }} />
      </div>

      <div className="absolute top-0 bottom-0 z-10" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
        <div className="w-0.5 h-full bg-card/90 shadow-md" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
            <path d="M7 4L3 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 4L17 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-primary/80 backdrop-blur-sm font-body text-xs font-semibold text-primary-foreground uppercase tracking-wider">
        Before
      </div>
      <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-secondary/90 backdrop-blur-sm font-body text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
        After
      </div>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-secondary font-semibold mb-3">Our Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            Before & After Gallery
          </h2>
          <p className="mt-4 font-body text-muted-foreground leading-relaxed">
            Drag the slider to see the transformation. Every project showcases our commitment to quality craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={p.title} className="scroll-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <BeforeAfterSlider before={p.before} after={p.after} title={p.title} />
              <div className="mt-4">
                <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
