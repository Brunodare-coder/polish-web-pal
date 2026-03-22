import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
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

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <div className="hidden md:block bg-primary">
        <div className="container flex items-center justify-end gap-8 py-2 text-sm font-body text-primary-foreground/80">
          <a href="tel:02071013821" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Phone className="w-3.5 h-3.5" /> 0207 1013 821
          </a>
          <a href="mailto:contact@azzurrocontractors.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Mail className="w-3.5 h-3.5" /> contact@azzurrocontractors.com
          </a>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-card/95 backdrop-blur-md shadow-lg shadow-primary/5" : "bg-card"
        }`}
      >
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Azzurro Contractors" className="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 animate-glow-pulse" />
            <div className="leading-tight overflow-hidden">
              <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent tracking-wide">
                Azzurro
              </span>
              <span className="block text-sm font-body text-muted-foreground tracking-[0.2em] uppercase transition-all duration-500 group-hover:tracking-[0.35em] group-hover:text-primary/70">
                Contractors Ltd
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`px-4 py-2 text-sm font-body font-medium rounded-md transition-colors active:scale-[0.97] ${
                    isActive(link.href)
                      ? "text-primary bg-muted"
                      : "text-foreground/80 hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="ml-2 px-5 py-2.5 text-sm font-body font-semibold bg-secondary text-secondary-foreground rounded-md hover:bg-gold-light transition-colors active:scale-[0.97] shadow-sm"
              >
                Get a Free Quote
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-left px-4 py-3 text-sm font-body font-medium rounded-md transition-colors ${
                  isActive(link.href) ? "text-primary bg-muted" : "text-foreground/80 hover:text-primary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 px-5 py-3 text-sm font-body font-semibold bg-secondary text-secondary-foreground rounded-md hover:bg-gold-light transition-colors text-center"
            >
              Get a Free Quote
            </Link>
            <div className="mt-2 flex flex-col gap-2 px-4 text-sm text-muted-foreground">
              <a href="tel:02071013821" className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> 0207 1013 821</a>
              <a href="mailto:contact@azzurrocontractors.com" className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> contact@azzurrocontractors.com</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
