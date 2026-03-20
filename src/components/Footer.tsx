import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Azzurro" className="h-10 w-10 object-contain" />
              <div className="leading-tight">
                <span className="font-display text-lg font-bold tracking-wide">Azzurro</span>
                <span className="block text-xs font-body text-primary-foreground/60 tracking-[0.15em] uppercase">Contractors Ltd</span>
              </div>
            </Link>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Providing integrated solutions and services to customers around England. Company Number: 111 170 28
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Accredited By</h4>
            <div className="flex flex-wrap gap-4">
              {["ECS", "Gas Safe", "NICEIC"].map((name) => (
                <div key={name} className="px-4 py-2 rounded-md bg-primary-foreground/10 font-body text-xs font-medium text-primary-foreground/80 border border-primary-foreground/10">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Azzurro Contractors Ltd. All Rights Reserved.</p>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
