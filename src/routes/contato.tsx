import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Phone, MapPin, Mail, Instagram, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — New Borges Filtros" },
      { name: "description", content: "Entre em contato para orçamentos, suporte técnico e dimensionamento de filtros industriais." },
      { property: "og:title", content: "Contato — New Borges" },
      { property: "og:description", content: "Solicite seu orçamento de filtros e elementos filtrantes." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="relative bg-hero px-6 lg:px-12 pt-20 pb-16">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Fale conosco</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold max-w-3xl">Solicite seu <span className="text-gradient">orçamento</span>.</h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">Nossa equipe responde rapidamente. Conte para a gente o que você precisa filtrar e cuidaremos do resto.</p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Phone, label: "Telefone", value: "(43) 3354-2494", href: "https://wa.link/x20tj3" },
            { icon: Mail, label: "E-mail", value: "contato@newborges.com.br", href: "mailto:contato@newborges.com.br" },
            { icon: MapPin, label: "Endereço", value: "Cambé — Paraná, Brasil" },
            { icon: Instagram, label: "Instagram", value: "@newborgesoficial", href: "https://www.instagram.com/newborgesoficial/" },
          ].map(c => (
            <a key={c.label} href={c.href ?? "#"} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block rounded-2xl bg-gradient-card border border-border p-5 hover:border-primary/50 transition shadow-soft">
              <div className="flex items-center gap-4">
                <div className="size-11 rounded-xl bg-primary/10 text-primary grid place-items-center"><c.icon className="size-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-semibold">{c.value}</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 rounded-3xl bg-gradient-card border border-border p-8 shadow-elegant"
        >
          <h2 className="font-display text-2xl font-bold">Envie sua mensagem</h2>
          <p className="text-sm text-muted-foreground mt-1">Preencha o formulário e entraremos em contato em breve.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Nome" name="nome" required />
            <Field label="Empresa" name="empresa" />
            <Field label="E-mail" name="email" type="email" required />
            <Field label="Telefone" name="telefone" />
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Mensagem</label>
            <textarea required rows={5} className="mt-1.5 w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 outline-none focus:border-primary transition" placeholder="Descreva o filtro ou aplicação..." />
          </div>
          <a href="https://wa.link/x20tj3" target="_blank" rel="noopener noreferrer" onClick={() => setSent(true)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
            {sent ? "Mensagem enviada ✓" : (<>Enviar mensagem <Send className="size-4" /></>)}
          </a>
        </form>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}{required && " *"}</label>
      <input id={name} name={name} type={type} required={required} className="mt-1.5 w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 outline-none focus:border-primary transition" />
    </div>
  );
}
