import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import turbo50v from "@/assets/nb/produtos/turbo-50v.jpg";
import turbo50b from "@/assets/nb/produtos/turbo-50b.jpg";
import turbo40b from "@/assets/nb/produtos/turbo-40b.jpg";
import nbf40pp from "@/assets/nb/produtos/nbf-40pp.jpg";
import nbf30ti from "@/assets/nb/produtos/nbf-30ti.png";
import nbf29tp from "@/assets/nb/produtos/nbf-29tp.png";
import nbf28fl from "@/assets/nb/produtos/nbf-28fl.png";
import nbf23fm from "@/assets/nb/produtos/nbf-23fm.png";
import nbf21pp from "@/assets/nb/produtos/nbf-21pp.png";
import nbf11 from "@/assets/nb/produtos/nbf-11.png";
import nbf10pp from "@/assets/nb/produtos/nbf-10pp.png";
import nbf3ms from "@/assets/nb/produtos/nbf-3ms.png";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — New Borges Filtros" },
      { name: "description", content: "Conheça toda a linha de elementos filtrantes coalescentes hidrofóbicos e filtros turbo diesel New Borges." },
      { property: "og:title", content: "Produtos — New Borges Filtros" },
      { property: "og:description", content: "Catálogo completo: elementos filtrantes e filtros de combustível New Borges." },
    ],
  }),
  component: Produtos,
});

type Categoria = "Elemento filtrante" | "Filtro";

interface Produto {
  name: string;
  category: Categoria;
  img: string;
  description: string;
}

const produtos: Produto[] = [
  {
    name: "FILTRO TURBO DIESEL 50 V",
    category: "Filtro",
    img: turbo50v,
    description:
      "Filtração de óleo diesel em sistemas de grande porte com necessidade de alta vazão e instalação vertical, indicado para operações de abastecimento intensivo.",
  },
  {
    name: "FILTRO TURBO DIESEL 50 B",
    category: "Filtro",
    img: turbo50b,
    description:
      "Filtração de óleo diesel em sistemas de altíssima vazão, indicado para operações contínuas e severas, como abastecimento de grandes frotas e tanques.",
  },
  {
    name: "FILTRO TURBO DIESEL 40 B",
    category: "Filtro",
    img: turbo40b,
    description:
      "Filtração de óleo diesel em sistemas de alto volume, indicado para abastecimento interno, tanques de armazenamento e bombas de transferência.",
  },
  {
    name: "FILTRO TURBO DIESEL 10 B",
    category: "Filtro",
    img: turbo40b,
    description:
      "Filtração de óleo diesel para abastecimento interno, tanques, bombas e sistemas de transferência, reduzindo impurezas e protegendo motores e injetores.",
  },
  {
    name: "Elemento Coalescente Hidrofóbico NBF-40PP",
    category: "Elemento filtrante",
    img: nbf40pp,
    description:
      "Elemento filtrante de alta performance da linha de Filtragem de Combustíveis e Fluidos Industriais, projetado para separação de água e retenção de sólidos.",
  },
  {
    name: "Elemento Coalescente Hidrofóbico NBF-30TI",
    category: "Elemento filtrante",
    img: nbf30ti,
    description:
      "Modelo NBF-30TI da linha de Filtragem de Combustíveis e Fluidos Industriais — alta eficiência na coalescência e remoção de água do combustível.",
  },
  {
    name: "Elemento Coalescente Hidrofóbico NBF-29TP",
    category: "Elemento filtrante",
    img: nbf29tp,
    description:
      "Modelo NBF-29TP, indicado para aplicações exigentes na filtragem de combustíveis e fluidos industriais com excelente capacidade de retenção.",
  },
  {
    name: "Elemento Coalescente Hidrofóbico NBF-28FL",
    category: "Elemento filtrante",
    img: nbf28fl,
    description:
      "Modelo NBF-28FL projetado para máxima eficiência na separação de água e na retenção de partículas em sistemas de combustível.",
  },
  {
    name: "Elemento Coalescente Hidrofóbico NBF-23FM",
    category: "Elemento filtrante",
    img: nbf23fm,
    description:
      "Desenvolvido para a remoção eficiente de água (livre e emulsificada) e contaminantes sólidos presentes em combustíveis e fluidos industriais.",
  },
  {
    name: "Elemento Coalescente Hidrofóbico NBF-21PP",
    category: "Elemento filtrante",
    img: nbf21pp,
    description:
      "Aplicações que exigem alto desempenho na separação de água e retenção de partículas, com construção robusta e longa vida útil.",
  },
  {
    name: "Elemento Coalescente Hidrofóbico NBF-11",
    category: "Elemento filtrante",
    img: nbf11,
    description:
      "Projetado para garantir máxima eficiência na separação de água e retenção de contaminantes sólidos em sistemas de abastecimento de combustível.",
  },
  {
    name: "Elemento Coalescente Hidrofóbico NBF-10PP",
    category: "Elemento filtrante",
    img: nbf10pp,
    description:
      "Elemento separador de partículas sólidas, água e óleo combustível. Dimensional: Ø ext. = 153 mm | Ø int. = 38,5 mm.",
  },
  {
    name: "Elemento Coalescente Hidrofóbico NBF-10DL",
    category: "Elemento filtrante",
    img: nbf11,
    description:
      "Elemento filtrante de alta robustez e elevada eficiência, projetado para a remoção de água e contaminantes em sistemas de filtragem de combustíveis.",
  },
  {
    name: "Elemento Coalescente Hidrofóbico NBF-08PF",
    category: "Elemento filtrante",
    img: nbf11,
    description:
      "Elemento filtrante de alta performance, desenvolvido para a remoção eficiente de água líquida, aerossóis e partículas sólidas em combustíveis.",
  },
  {
    name: "Elemento Coalescente Hidrofóbico NBF-07",
    category: "Elemento filtrante",
    img: nbf10pp,
    description:
      "Elemento filtrante de alta eficiência, projetado para a remoção de água líquida, aerossóis e partículas em sistemas de combustíveis e fluidos.",
  },
  {
    name: "Elemento Coalescente Hidrofóbico NBF-4MS",
    category: "Elemento filtrante",
    img: nbf10pp,
    description:
      "Cartucho filtrante de alta eficiência, desenvolvido para a remoção de aerossóis líquidos, umidade e contaminantes sólidos em ar comprimido e gases.",
  },
  {
    name: "NBF-3MS",
    category: "Elemento filtrante",
    img: nbf3ms,
    description: "Elemento filtrante NBF/3MS para aplicações industriais de filtragem fina.",
  },
];

type Filter = "Todos" | Categoria;

function Produtos() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const lista = filter === "Todos" ? produtos : produtos.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="relative bg-hero px-6 lg:px-12 pt-20 pb-16">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Catálogo completo</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold max-w-3xl">
            Conheça nossos <span className="text-gradient">produtos</span>.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            Com a New Borges, você abastece com a certeza de que está protegendo seu equipamento e seu investimento.
          </p>
          <a
            href="https://w.app/newborges"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:opacity-90 transition"
          >
            Quero um Orçamento
          </a>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 max-w-[1400px] mx-auto">
        <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)} className="mb-10">
          <TabsList className="h-auto p-1">
            <TabsTrigger value="Todos" className="px-4 py-2">Todos</TabsTrigger>
            <TabsTrigger value="Elemento filtrante" className="px-4 py-2">Elemento filtrante</TabsTrigger>
            <TabsTrigger value="Filtro" className="px-4 py-2">Filtro</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {lista.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/50 transition shadow-soft flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-background">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="inline-block self-start text-[10px] uppercase tracking-wider text-primary border border-primary/30 bg-primary/5 rounded-full px-2.5 py-1">
                  {p.category}
                </span>
                <h3 className="mt-3 font-display font-semibold leading-snug">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                <a
                  href="https://w.app/newborges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-medium text-primary hover:underline"
                >
                  Solicitar orçamento →
                </a>
              </div>
            </article>
          ))}
        </div>

        {lista.length === 0 && (
          <p className="text-center text-muted-foreground py-12">Nenhum produto encontrado nesta categoria.</p>
        )}
      </section>
    </Layout>
  );
}
