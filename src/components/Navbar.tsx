/**
 * ============================================
 * 🧭 NAVBAR - CONFIGURAÇÃO
 * ============================================
 * 
 * Para alterar telefone/email:
 *   Procure por "tel:" e "mailto:" e troque pelos dados corretos.
 * 
 * Para alterar nome da empresa:
 *   Procure por "Azzurro" e "Contractors Ltd" e troque.
 * 
 * ============================================
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronRight, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Animate active indicator pill
  useEffect(() => {
    if (!navRef.current) return;
    const activeEl = navRef.current.querySelector('[data-active="true"]') as HTMLElement;
    if (activeEl) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setActiveIndicator({
        left: elRect.left - navRect.left,
        width: elRect.width,
      });
    }
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary" />
        <div className="container relative flex items-center justify-between py-2">
          <div className="flex items-center gap-2 text-xs font-body text-primary-foreground/50">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </div>
          <div className="flex items-center gap-8 text-sm font-body text-primary-foreground/80">
            {/* ⚠️ ALTERE AQUI: Telefone da empresa */}
            <a href="tel:02071013821" className="flex items-center gap-2 hover:text-primary-foreground transition-colors group">
              <div className="w-6 h-6 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                <Phone className="w-3 h-3" />
              </div>
              0207 1013 821
            </a>
            {/* ⚠️ ALTERE AQUI: Email da empresa */}
            <a href="mailto:contact@azzurrocontractors.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors group">
              <div className="w-6 h-6 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                <Mail className="w-3 h-3" />
              </div>
              contact@azzurrocontractors.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-card/80 backdrop-blur-xl shadow-xl shadow-primary/5 border-border/50"
            : "bg-card border-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              <img
                src={logo}
                alt="Azzurro Contractors"
                className="h-14 w-14 object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 animate-glow-pulse"
              />
              <div className="absolute -inset-1 rounded-full bg-secondary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="leading-tight overflow-hidden">
              {/* ⚠️ ALTERE AQUI: Nome da empresa */}
              <span className="font-display text-xl font-bold text-primary tracking-wide transition-all duration-500 group-hover:tracking-wider inline-block">
                Azzurro
              </span>
              <span className="block text-[0.65rem] font-body text-muted-foreground tracking-[0.25em] uppercase transition-all duration-500 group-hover:tracking-[0.4em] group-hover:text-secondary">
                Contractors Ltd
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            <ul ref={navRef} className="relative flex items-center gap-0.5 p-1 rounded-full bg-muted/50">
              {/* Animated active pill */}
              <div
                className="absolute top-1 h-[calc(100%-8px)] rounded-full bg-primary/10 border border-primary/20 transition-all duration-300 ease-out"
                style={{
                  left: `${activeIndicator.left}px`,
                  width: `${activeIndicator.width}px`,
                  opacity: activeIndicator.width > 0 ? 1 : 0,
                }}
              />
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    data-active={isActive(link.href)}
                    className={`relative px-4 py-2 text-sm font-body font-medium rounded-full transition-all duration-300 active:scale-[0.97] ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="group relative px-6 py-2.5 text-sm font-body font-semibold bg-secondary text-secondary-foreground rounded-full hover:bg-gold-light transition-all duration-300 active:scale-[0.97] shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Get a Free Quote
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-gold-light to-secondary bg-[length:200%_auto] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-foreground rounded-full hover:bg-muted transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-current rounded transition-all duration-300 ${open ? "top-[9px] rotate-45" : "top-1"}`} />
              <span className={`absolute left-0 top-[9px] h-0.5 w-5 bg-current rounded transition-all duration-300 ${open ? "opacity-0 scale-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-current rounded transition-all duration-300 ${open ? "top-[9px] -rotate-45" : "top-[17px]"}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-400 ease-out ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <div className="container pb-6 pt-2 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                className={`group flex items-center justify-between px-4 py-3.5 text-sm font-body font-medium rounded-xl transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-primary bg-primary/5 border border-primary/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/80"
                }`}
                style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              >
                {link.label}
                <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                  isActive(link.href) ? "text-primary" : "text-muted-foreground/40 group-hover:text-foreground/60 group-hover:translate-x-0.5"
                }`} />
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="mt-3 flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-body font-semibold bg-secondary text-secondary-foreground rounded-xl hover:bg-gold-light transition-colors shadow-md shadow-secondary/20"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="mt-4 pt-4 border-t border-border/50 flex flex-col gap-3 px-2">
              {/* ⚠️ ALTERE AQUI: Telefone e email */}
              <a href="tel:02071013821" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                0207 1013 821
              </a>
              <a href="mailto:contact@azzurrocontractors.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                contact@azzurrocontractors.com
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
