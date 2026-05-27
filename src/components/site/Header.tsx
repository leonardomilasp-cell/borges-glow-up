import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Facebook, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/nb/logo.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="hidden md:flex items-center justify-between px-6 lg:px-12 py-2 text-xs text-muted-foreground border-b border-border/60">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Phone className="size-3.5 text-primary" /> (43) 3354-2494</span>
          <span className="flex items-center gap-2"><MapPin className="size-3.5 text-primary" /> Cambé — PR</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.instagram.com/newborgesoficial/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Instagram className="size-4" /></a>
          <a href="#" className="hover:text-primary transition-colors"><Facebook className="size-4" /></a>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="New Borges Filtros" width={120} height={80} className="h-10 w-auto object-contain" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display font-bold tracking-tight">New Borges</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Filtros Industriais</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map(n => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} activeProps={{ className: "text-primary" }} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <a href="https://wa.link/x20tj3" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
          Solicitar orçamento
        </a>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-3">
          {nav.map(n => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1 text-foreground/90">{n.label}</Link>
          ))}
          <a href="https://wa.link/x20tj3" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-gradient-primary px-4 py-2.5 font-semibold text-primary-foreground">Orçamento</a>
        </div>
      )}
    </header>
  );
}
