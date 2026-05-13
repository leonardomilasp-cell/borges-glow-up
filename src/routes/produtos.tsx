import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import prodCoal from "@/assets/nb/filtro-CP-Fenolica.jpg";
import prodCupula from "@/assets/nb/Filtro-cupula-Aluminio-com-dreno.jpg";
import prodAlta from "@/assets/nb/Filtro-Alta-Vazao.jpg";
import prodNbf from "@/assets/nb/NBF-28.jpg";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — New Borges Filtros" },
      { name: "description", content: "Linha completa de filtros e elementos filtrantes: coalescentes, cúpulas, alta vazão e linha NBF." },
      { property: "og:title", content: "Produtos — New Borges Filtros" },
      { property: "og:description", content: "Conheça nossa linha completa de filtros e elementos filtrantes industriais." },
    ],
  }),
  component: Produtos,
});

const linhas = [
  {
    title: "Elementos Coalescentes Hidrofóbicos",
    desc: "Separação de água e impurezas com máxima eficiência. Ideais para filtragem de combustível em aviação e usinas.",
    img: prodCoal,
    items: ["NBF-23FM", "NBF-21PP", "NBF-11", "NBF-10PP"],
  },
  {
    title: "Filtros Cúpula em Alumínio",
    desc: "Carcaças resistentes com dreno integrado para aplicações em fazendas, postos e operações de campo.",
    img: prodCupula,
    items: ["Cúpula com dreno", "Cúpula CP Fenólica", "Cúpula CP Tela Inox"],
  },
  {
    title: "Filtros de Alta Vazão",
    desc: "Soluções para grandes volumes, com perda de carga reduzida e elevada capacidade de retenção.",
    img: prodAlta,
    items: ["Filtro 50-B", "Filtro 50-B com braçadeira", "Linha Alta Vazão"],
  },
  {
    title: "Linha NBF",
    desc: "Filtros de linha completa para os mais diversos sistemas de abastecimento e transferência de fluidos.",
    img: prodNbf,
    items: ["NBF-13", "NBF-14", "NBF-28"],
  },
];

function Produtos() {
  return (
    <Layout>
      <section className="relative bg-hero px-6 lg:px-12 pt-20 pb-16">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Catálogo</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold max-w-3xl">Nossos <span className="text-gradient">produtos</span>.</h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">Confiabilidade, inovação e excelência. Conheça a linha New Borges de filtros e elementos filtrantes para os mais variados segmentos.</p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto space-y-10">
        {linhas.map((l, i) => (
          <div key={l.title} className={`grid lg:grid-cols-2 gap-8 items-center rounded-3xl bg-gradient-card border border-border p-6 md:p-10 shadow-soft ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="aspect-square rounded-2xl overflow-hidden bg-background border border-border">
              <img src={l.img} alt={l.title} loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">{l.title}</h2>
              <p className="mt-4 text-muted-foreground">{l.desc}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {l.items.map(it => (
                  <li key={it} className="text-sm rounded-lg border border-border bg-surface-elevated px-3 py-2.5 hover:border-primary/50 transition">{it}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
