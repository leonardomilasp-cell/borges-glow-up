import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Zap, Award, Truck, Wheat, Factory, Plane, CheckCircle2, Sparkles } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import hero from "@/assets/nb/produtos-hero.png";
import segFazendas from "@/assets/seg-fazendas.jpg";
import segTrans from "@/assets/seg-transportadoras.jpg";
import segUsinas from "@/assets/seg-usinas.jpg";
import segAviacao from "@/assets/seg-aviacao.jpg";
import prodCoal from "@/assets/nb/Filtro-cupula-Aluminio-com-dreno.jpg";
import prodCupula from "@/assets/nb/Filtro-CP-Tela-inox.jpg";
import prodAlta from "@/assets/nb/Filtro-Alta-Vazao.jpg";
import prodNbf from "@/assets/nb/NBF-14-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Borges — Filtros e Elementos Filtrantes Industriais" },
      { name: "description", content: "Há 11 anos fabricando filtros e elementos filtrantes de alta performance para usinas, fazendas, transportadoras e aviação." },
      { property: "og:title", content: "New Borges — Filtros Industriais" },
      { property: "og:description", content: "Filtros e elementos filtrantes de alta performance. Confiabilidade, inovação e excelência." },
    ],
  }),
  component: Index,
});

const segmentos = [
  { name: "Usinas", icon: Factory, img: segUsinas },
  { name: "Fazendas", icon: Wheat, img: segFazendas },
  { name: "Transportadoras", icon: Truck, img: segTrans },
  { name: "Aviação", icon: Plane, img: segAviacao },
];

const produtos = [
  { name: "Filtro Cúpula Alumínio com Dreno", tag: "Cúpula", img: prodCoal },
  { name: "Filtro CP Tela Inox", tag: "Tela Inox", img: prodCupula },
  { name: "Filtro de Alta Vazão", tag: "Alta Vazão", img: prodAlta },
  { name: "Filtro NBF-14", tag: "Linha NBF", img: prodNbf },
];

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="relative px-6 lg:px-12 pt-20 pb-32 grid lg:grid-cols-12 gap-10 items-center max-w-[1400px] mx-auto">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur px-4 py-1.5 text-xs">
              <Sparkles className="size-3.5 text-primary" />
              <span className="text-muted-foreground">Há</span>
              <span className="font-semibold text-foreground">11 anos no mercado</span>
            </div>
            <h1 className="mt-6 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Filtros que <span className="text-gradient">protegem</span> a sua operação.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Fabricamos filtros e elementos filtrantes de alta performance para usinas, fazendas, transportadoras e aviação. Confiabilidade, inovação e excelência em cada peça.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.link/x20tj3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
                Solicitar orçamento <ArrowRight className="size-4" />
              </a>
              <Link to="/produtos" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 backdrop-blur px-6 py-3.5 font-semibold hover:border-primary transition">
                Ver produtos
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "10+", l: "anos no mercado" },
                { v: "4", l: "setores atendidos" },
                { v: "100%", l: "fabricação nacional" },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-10 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <div className="relative">
              <img src={hero} alt="Linha de filtros e elementos filtrantes New Borges" width={1600} height={1200} className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>

        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "Qualidade certificada", desc: "Atendemos os mais rigorosos padrões da indústria, com testes em cada lote produzido." },
            { icon: Zap, title: "Pronta entrega", desc: "Grande estoque disponível para envio rápido e operação sem paradas." },
            { icon: Award, title: "Preço justo", desc: "Fabricação própria garante o melhor custo-benefício do mercado nacional." },
          ].map(d => (
            <div key={d.title} className="group relative rounded-2xl bg-gradient-card border border-border p-7 hover:border-primary/50 transition shadow-soft">
              <div className="size-12 rounded-xl bg-primary/10 grid place-items-center text-primary mb-5 group-hover:scale-110 transition">
                <d.icon className="size-6" />
              </div>
              <h3 className="font-display text-xl font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Nossos produtos</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl">Mais que filtros, soluções de filtragem.</h2>
          </div>
          <Link to="/produtos" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
            Ver todos os produtos <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {produtos.map(p => (
            <div key={p.name} className="group rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/50 transition shadow-soft">
              <div className="aspect-square overflow-hidden bg-background">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <span className="inline-block text-[10px] uppercase tracking-wider text-primary border border-primary/30 bg-primary/5 rounded-full px-2.5 py-1">{p.tag}</span>
                <h3 className="mt-3 font-display font-semibold leading-snug">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE / MELHOR OPÇÃO */}
      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="rounded-3xl bg-gradient-card border border-border p-8 md:p-16 grid lg:grid-cols-2 gap-10 items-center shadow-elegant">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Sobre nós</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">A sua melhor opção em <span className="text-gradient">elementos filtrantes</span>.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Ao escolher o elemento filtrante certo, três pilares importam: qualidade do equipamento, preço justo e confiabilidade da empresa. A New Borges entrega os três.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Atendemos uma vasta gama de filtros de várias marcas presentes no mercado, prezando pela qualidade aliada a um atendimento ágil e a uma logística eficiente de pronta entrega.
            </p>
            <Link to="/sobre" className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary text-primary px-6 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition">
              Saiba mais <ArrowRight className="size-4" />
            </Link>
          </div>
          <ul className="space-y-4">
            {[
              "Vasta gama de elementos filtrantes para diferentes marcas",
              "Estoque robusto para entrega imediata",
              "Equipe técnica para suporte e dimensionamento",
              "Fabricação nacional com controle total de qualidade",
              "Atendimento ágil e personalizado",
            ].map(t => (
              <li key={t} className="flex items-start gap-3 p-4 rounded-xl bg-surface-elevated border border-border">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEGMENTOS */}
      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Quem atendemos</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Setores estratégicos confiam na New Borges.</h2>
          <p className="mt-5 text-muted-foreground">Filtros projetados para reduzir impurezas, evitar contaminações e prolongar a vida útil de motores e sistemas de abastecimento.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segmentos.map(s => (
            <div key={s.name} className="group relative rounded-2xl overflow-hidden border border-border h-80 shadow-soft">
              <img src={s.img} alt={s.name} loading="lazy" width={1024} height={1280} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="size-10 rounded-lg bg-primary/90 grid place-items-center text-primary-foreground mb-3">
                  <s.icon className="size-5" />
                </div>
                <h3 className="font-display text-2xl font-bold">{s.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 text-center shadow-glow">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight">
              Precisa de um filtro específico? Fale com nossa equipe técnica.
            </h2>
            <p className="mt-5 text-primary-foreground/80 max-w-xl mx-auto">Atendimento rápido, orçamento sem compromisso e a melhor logística do mercado.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://wa.link/x20tj3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition">
                Solicitar orçamento <ArrowRight className="size-4" />
              </a>
              <a href="https://wa.link/x20tj3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 text-primary-foreground px-6 py-3.5 font-semibold hover:bg-primary-foreground/10 transition">
                (43) 3354-2494
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VÍDEOS */}
      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Conteúdo</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Vídeos explicativos dos nossos produtos</h2>
          <p className="mt-5 text-muted-foreground">Conheça em detalhes a linha New Borges e veja nossos filtros em funcionamento.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {["T0S_mHM4od4", "F_e2MjbHRn0", "v9Rza5JpViI", "u-rSd6cJnXM"].map(id => (
            <div key={id} className="rounded-2xl overflow-hidden border border-border bg-gradient-card shadow-soft">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Vídeo New Borges"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

    </Layout>
  );
}
