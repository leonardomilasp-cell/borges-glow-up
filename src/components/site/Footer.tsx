import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/nb/logo.png";

const emailParts = ["comercial", "newborges.com.br"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-32">
      <div className="px-6 lg:px-12 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="New Borges Filtros" width={120} height={80} className="h-12 w-auto object-contain" />
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-md">
            Há 11 anos fabricando filtros e elementos filtrantes de alta performance para usinas, fazendas, transportadoras e aviação.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Navegação</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Início</Link></li>
            <li><Link to="/produtos" className="hover:text-primary">Produtos</Link></li>
            <li><Link to="/sobre" className="hover:text-primary">Sobre nós</Link></li>
            <li><Link to="/contato" className="hover:text-primary">Contato</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contato</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="size-4 text-primary" /> (43) 3354-2494</li>
            <li className="flex items-center gap-2"><MapPin className="size-4 text-primary" /> Cambé — PR</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-primary" /> <span>{emailParts[0]}&#64;{emailParts[1]}</span></li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="https://www.instagram.com/newborgesoficial/" target="_blank" rel="noreferrer" className="size-9 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"><Instagram className="size-4" /></a>
            <a href="#" className="size-9 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"><Facebook className="size-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 px-6 lg:px-12 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} New Borges Filtros. Todos os direitos reservados.</span>
        <span>Cambé — Paraná — Brasil</span>
      </div>
    </footer>
  );
}
