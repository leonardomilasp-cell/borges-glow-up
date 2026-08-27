import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  Zap,
  Factory,
  Droplets,
  Phone,
  MessageCircle,
  Clock,
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Gauge,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { getProdutoBySlug, type Produto } from "@/data/produtos";

const SLUG = "elemento-coalescente-hidrofobico-nbf-10pp";
const WHATS = "https://wa.link/x20tj3";
const CANONICAL = `https://borges-glow-up.lovable.app/produtos/${SLUG}`;

export const Route = createFileRoute(
  "/produtos/elemento-coalescente-hidrofobico-nbf-10pp",
)({
  head: () => {
    const p = getProdutoBySlug(SLUG);
    const title =
      "Elemento Hidrofóbico NBF-10PP — Pronta Entrega | New Borges";
    const description =
      "NBF-10PP: elemento filtrante coalescente para separação de água e retenção de partículas em diesel. Compatível com Selcom 100, FC 100, EC-5245 e mais. Pronta entrega — fale no WhatsApp.";
    const image = p?.img;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: CANONICAL },
        ...(image ? [{ property: "og:image", content: image as unknown as string }] : []),
        { name: "twitter:card", content: "summary_large_image" },
        ...(image ? [{ name: "twitter:image", content: image as unknown as string }] : []),
      ],
      links: [{ rel: "canonical", href: CANONICAL }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Elemento Hidrofóbico NBF-10PP",
            brand: { "@type": "Brand", name: "New Borges" },
            description,
            image: image ? [image] : undefined,
            category: "Elemento hidrofóbico",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              priceCurrency: "BRL",
              url: CANONICAL,
              seller: { "@type": "Organization", name: "New Borges Filtros" },
            },
          }),
        },
      ],
    };
  },
  loader: () => {
    const produto = getProdutoBySlug(SLUG)!;
    return { produto };
  },
  component: NBF10PPLanding,
});

function NBF10PPLanding() {
  const { produto: p } = Route.useLoaderData() as { produto: Produto };
  const gallery = p.gallery && p.gallery.length > 0 ? p.gallery : [p.img];
  const [active, setActive] = useState(0);

  return (
    <Layout>
      {/* Sticky trust bar */}
      <div className="bg-primary text-primary-foreground text-xs md:text-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-2 flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          <span className="flex items-center gap-1.5"><Truck className="size-4" /> Pronta entrega</span>
          <span className="hidden md:flex items-center gap-1.5"><ShieldCheck className="size-4" /> Alta eficiência</span>
          <span className="flex items-center gap-1.5"><Award className="size-4" /> 11 anos de fábrica</span>
          <span className="hidden md:flex items-center gap-1.5"><Factory className="size-4" /> Envio Brasil todo</span>
        </div>
      </div>

      {/* HERO */}
      <section className="px-6 lg:px-12 pt-10 md:pt-14 pb-10 max-w-[1400px] mx-auto">
        <nav className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Início</Link>
          <span className="mx-2">/</span>
          <Link to="/produtos" className="hover:text-primary">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">NBF-10PP</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-card border border-border shadow-soft group">
              <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                <Zap className="size-3.5" /> Pronta Entrega
              </span>
              <img
                src={gallery[active]}
                alt="Elemento Hidrofóbico NBF-10PP — New Borges"
                className="w-full h-full object-contain aspect-square bg-background"
              />
              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActive((i) => (i - 1 + gallery.length) % gallery.length)}
                    aria-label="Imagem anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 size-11 md:size-12 rounded-full bg-background/90 hover:bg-background border border-border shadow-lg grid place-items-center text-foreground hover:text-primary transition"
                  >
                    <ChevronLeft className="size-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive((i) => (i + 1) % gallery.length)}
                    aria-label="Próxima imagem"
                    className="absolute right-3 top-1/2 -translate-y-1/2 size-11 md:size-12 rounded-full bg-background/90 hover:bg-background border border-border shadow-lg grid place-items-center text-foreground hover:text-primary transition"
                  >
                    <ChevronRight className="size-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 border border-border rounded-full px-3 py-1 text-xs font-medium text-foreground shadow">
                    {active + 1} / {gallery.length}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Copy + CTA */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-primary border border-primary/30 bg-primary/5 rounded-full px-2.5 py-1">
              <Droplets className="size-3.5" /> Coalescente Hidrofóbico
            </span>
            <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">
              Elemento Coalescente{" "}
              <span className="text-primary">NBF-10PP</span>
            </h1>
            <p className="mt-2 text-base md:text-lg text-muted-foreground">
              Separação de <strong className="text-foreground">água</strong>, retenção de{" "}
              <strong className="text-foreground">partículas sólidas</strong> e proteção total
              do seu sistema de diesel.
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-foreground/85">
              Elemento filtrante de <strong>alta eficiência</strong>, com dois estágios de
              filtragem (celulose 25µ + aquablock 5µ). Compatível com os principais filtros do
              mercado — <strong>Selcom 100, FC 100, EC-5245, BPA-1720, UDCP100</strong>.
            </p>

            {/* Bullets de valor */}
            <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
              {[
                "Alta eficiência na coalescência",
                "Separação eficaz de água e impurezas",
                "Protege motores e injetores",
                "Aumenta a vida útil do combustível",
                "Construção robusta em aço galvanizado",
                "Fabricação nacional",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={WHATS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition text-base"
              >
                <MessageCircle className="size-5" />
                Solicitar orçamento no WhatsApp
              </a>
              <a
                href="tel:+554333542494"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-soft hover:opacity-90 transition text-base"
              >
                <Phone className="size-5" />
                (43) 3354-2494
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4 text-primary" />
              <span>Resposta em minutos no horário comercial • Envio para todo o Brasil</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios / diferenciais */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-14 grid md:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: "Pronta entrega", text: "Estoque disponível para envio imediato após a confirmação do pedido." },
            { icon: ShieldCheck, title: "Alta performance", text: "Retém partículas de até 5µ e remove água livre e emulsificada do diesel." },
            { icon: Factory, title: "Direto da fábrica", text: "11 anos fabricando em Cambé-PR. Sem intermediário — melhor preço e suporte." },
            { icon: Gauge, title: "Longa vida útil", text: "Área filtrante de 14.959 cm² garante mais autonomia entre trocas." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-background p-6">
              <b.icon className="size-8 text-primary" />
              <h3 className="mt-3 font-display font-semibold text-lg">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Como funciona</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
            Dupla filtragem em 2 estágios
          </h2>
          <p className="mt-3 text-muted-foreground">
            O NBF-10PP combina retenção de partículas e coalescência de água em um único elemento,
            garantindo diesel limpo e seco para o seu sistema.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { n: "1", t: "Retenção externa (25µ)", d: "Papel celulose retém partículas sólidas e contaminantes maiores presentes no combustível." },
            { n: "2", t: "Coalescência interna (5µ)", d: "Papel aquablock separa a água (livre e emulsificada) e retém partículas finas." },
            { n: "3", t: "Diesel protegido", d: "Combustível limpo e seco entra no sistema, protegendo bombas, filtros e injetores." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-gradient-card p-6 relative">
              <div className="absolute -top-3 -left-3 size-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold shadow-glow">
                {s.n}
              </div>
              <h3 className="font-display font-semibold text-lg mt-2">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA intermediário */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 md:p-12 shadow-glow flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] opacity-80">Pronta entrega</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mt-1">
              Peça hoje e receba rápido — envio para todo o Brasil
            </h3>
            <p className="opacity-90 mt-2 text-sm md:text-base">Fale com um especialista e receba seu orçamento sem compromisso.</p>
          </div>
          <a
            href={WHATS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-primary font-bold hover:opacity-90 transition text-base whitespace-nowrap"
          >
            <MessageCircle className="size-5" />
            Falar no WhatsApp agora
          </a>
        </div>
      </section>

      {/* Especificações */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Especificações técnicas</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Ficha técnica</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <SpecCard title="Dimensional">
            <ul className="space-y-1">
              <li>Ø externo: 153 mm</li>
              <li>Ø interno: 38,5 mm</li>
              <li>Altura total: 373 mm</li>
            </ul>
          </SpecCard>
          <SpecCard title="Área filtrante">14.959 cm²</SpecCard>
          <SpecCard title="Meio filtrante">
            Dois estágios — 1º papel celulose (externo) 25µ e papel aquablock (interno) 5µ.
          </SpecCard>
          <SpecCard title="Construção">
            Tampas em Nylon injetado, corpo e tubos em chapa expandida de aço galvanizado.
          </SpecCard>
        </div>
      </section>

      {/* Equivalências */}
      {p.equivalencias && p.equivalencias.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Compatibilidade</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Tabela de equivalências</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            O NBF-10PP substitui diretamente os principais elementos filtrantes do mercado.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Marca</th>
                  <th className="text-left px-5 py-3 font-semibold">Modelo</th>
                </tr>
              </thead>
              <tbody className="bg-background">
                {p.equivalencias.map((e, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-5 py-3 font-medium">{e.marca}</td>
                    <td className="px-5 py-3 text-muted-foreground">{e.modelo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Para quem é */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
            Ideal para quem armazena ou distribui diesel
          </h2>
          <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">
            Diesel contaminado com água ou partículas <strong>danifica bombas e injetores</strong> —
            trocar o elemento no prazo certo evita paradas e prejuízos.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Postos de combustível",
              "Comboios e transportadoras",
              "Frotas e locadoras",
              "Fazendas e agronegócio",
              "Indústrias com geradores",
              "Mineração e construção",
            ].map((x) => (
              <div key={x} className="rounded-xl border border-border bg-background px-5 py-4 flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="size-4 text-primary" />
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16">
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Dúvidas frequentes</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Perguntas frequentes</h2>
        <div className="mt-8 space-y-3">
          {[
            {
              q: "O NBF-10PP está disponível para pronta entrega?",
              a: "Sim. Trabalhamos com estoque desse modelo. Após a confirmação do pedido, o envio é imediato para todo o Brasil.",
            },
            {
              q: "Ele substitui o Selcom 100, FC 100, EC-5245?",
              a: "Sim. O NBF-10PP é 100% compatível com Petropuro Selcom 100, Purodiesel FC 100, Engemai EC-5245, Filtros Barra BPA-1720, Unifilter UDCP100, Comboio Gascom e Romanelli Selcom 100.",
            },
            {
              q: "Qual é a eficiência de filtragem?",
              a: "Dois estágios: papel celulose 25µ (retenção de partículas) e papel aquablock 5µ (coalescência de água). Remove água livre e emulsificada do diesel.",
            },
            {
              q: "Vocês entregam para todo o Brasil?",
              a: "Sim. Enviamos por transportadora e correios para todos os estados. Informamos o frete no momento do orçamento pelo WhatsApp.",
            },
            {
              q: "Consigo desconto para volume?",
              a: "Sim. Oferecemos condições especiais para revendas, frotas e compras recorrentes. Solicite seu orçamento no WhatsApp e converse com nosso comercial.",
            },
            {
              q: "Emitem nota fiscal?",
              a: "Sim. Emitimos nota fiscal e trabalhamos com Pix, boleto e cartão. Condições e prazos são informados no orçamento.",
            },
          ].map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={WHATS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition"
          >
            <MessageCircle className="size-5" />
            Tirar dúvidas no WhatsApp
          </a>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <div className="rounded-3xl border border-border bg-gradient-card p-8 md:p-14 text-center">
          <span className="inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            <Zap className="size-3.5" /> Pronta entrega
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold">
            Proteja seu diesel hoje mesmo
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Fale agora com nosso time comercial e receba seu orçamento do Elemento NBF-10PP em minutos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition"
            >
              <MessageCircle className="size-5" />
              Solicitar orçamento
            </a>
            <a
              href="tel:+554333542494"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-soft hover:opacity-90 transition"
            >
              <Phone className="size-5" />
              (43) 3354-2494
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={WHATS}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-green-600 text-white font-semibold shadow-2xl hover:bg-green-700 transition"
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline">Fale conosco</span>
      </a>
    </Layout>
  );
}

function SpecCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-gradient-card p-6">
      <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">{title}</div>
      <div className="text-sm text-foreground/90 leading-relaxed">{children}</div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-background overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-medium hover:bg-surface transition"
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown className={`size-5 shrink-0 text-primary transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}
