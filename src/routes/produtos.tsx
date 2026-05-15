import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import prodCoal from "@/assets/nb/filtro-CP-Fenolica.jpg";
import prodCupula from "@/assets/nb/Filtro-cupula-Aluminio-com-dreno.jpg";
import prodAlta from "@/assets/nb/Filtro-Alta-Vazao.jpg";
import prodNbf28 from "@/assets/nb/NBF-28.jpg";
import prodNbf14 from "@/assets/nb/NBF-14-1.jpg";
import prodNbf13 from "@/assets/nb/Filtro-NBF-13.jpg";
import prodCpInox from "@/assets/nb/Filtro-CP-Tela-inox.jpg";
import prod50b from "@/assets/nb/Filtro-50-b.jpg";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — New Borges Filtros" },
      { name: "description", content: "Catálogo completo: 17 modelos de filtros e elementos filtrantes coalescentes hidrofóbicos e filtros turbo diesel." },
      { property: "og:title", content: "Produtos — New Borges Filtros" },
      { property: "og:description", content: "Conheça a linha completa de filtros New Borges." },
    ],
  }),
  component: Produtos,
});

const coalescentes = [
  { name: "NBF-07", img: prodNbf13 },
  { name: "NBF-08PF", img: prodCoal },
  { name: "NBF-10DL", img: prodCupula },
  { name: "NBF-10PP", img: prodCpInox },
  { name: "NBF-11", img: prodNbf14 },
  { name: "NBF-21PP", img: prodCoal },
  { name: "NBF-23FM", img: prodCupula },
  { name: "NBF-28FL", img: prodNbf28 },
  { name: "NBF-29TP", img: prodNbf13 },
  { name: "NBF-30TI", img: prodCpInox },
  { name: "NBF-40PP", img: prodNbf14 },
  { name: "NBF-4MS", img: prodCoal },
  { name: "NBF-3MS", img: prodNbf28 },
];

const turbo = [
  { name: "FILTRO TURBO DIESEL 10 B", img: prod50b },
  { name: "FILTRO TURBO DIESEL 40 B", img: prodAlta },
  { name: "FILTRO TURBO DIESEL 50 B", img: prod50b },
  { name: "FILTRO TURBO DIESEL 50 V", img: prodAlta },
];

function Produtos() {
  return (
    <Layout>
      <section className="relative bg-hero px-6 lg:px-12 pt-20 pb-16">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Catálogo completo</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold max-w-3xl">Nossos <span className="text-gradient">produtos</span>.</h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">17 modelos de filtros e elementos filtrantes para os mais variados segmentos. Confiabilidade, inovação e excelência em cada peça.</p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Linha NBF</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Elementos Coalescentes Hidrofóbicos</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Separação eficiente de água e impurezas em sistemas de abastecimento de combustível.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {coalescentes.map(p => (
            <div key={p.name} className="group rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/50 transition shadow-soft">
              <div className="aspect-square overflow-hidden bg-background">
                <img src={p.img} alt={p.name} loading="lazy" width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <span className="inline-block text-[10px] uppercase tracking-wider text-primary border border-primary/30 bg-primary/5 rounded-full px-2.5 py-1">Coalescente</span>
                <h3 className="mt-3 font-display font-semibold leading-snug">Elemento Coalescente Hidrofóbico {p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Linha Turbo Diesel</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Filtros Turbo Diesel</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Alta vazão e robustez para operações de campo e abastecimento de frotas.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {turbo.map(p => (
            <div key={p.name} className="group rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/50 transition shadow-soft">
              <div className="aspect-square overflow-hidden bg-background">
                <img src={p.img} alt={p.name} loading="lazy" width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <span className="inline-block text-[10px] uppercase tracking-wider text-primary border border-primary/30 bg-primary/5 rounded-full px-2.5 py-1">Turbo Diesel</span>
                <h3 className="mt-3 font-display font-semibold leading-snug">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
