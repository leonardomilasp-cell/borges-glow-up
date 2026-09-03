import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { produtos, type Categoria } from "@/data/produtos";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — New Borges Filtros" },
      { name: "description", content: "Conheça toda a linha de elementos filtrantes coalescentes hidrofóbicos, filtros turbo diesel e caixas separadoras New Borges." },
      { property: "og:title", content: "Produtos — New Borges Filtros" },
      { property: "og:description", content: "Catálogo completo: elementos filtrantes, filtros de combustível e caixas separadoras New Borges." },
    ],
  }),
  component: Produtos,
});

type Filter = "Todos" | Categoria;

function Produtos() {
  const location = useLocation();
  const [filter, setFilter] = useState<Filter>("Todos");
  const isProductDetail = location.pathname.replace(/\/+$/, "") !== "/produtos";

  if (isProductDetail) return <Outlet />;

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
            href="https://wa.link/x20tj3"
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
          <TabsList className="h-auto p-1 flex-wrap">
            <TabsTrigger value="Todos" className="px-4 py-2">Todos</TabsTrigger>
            <TabsTrigger value="Elemento Micrônico" className="px-4 py-2">Elemento Micrônico</TabsTrigger>
            <TabsTrigger value="Elemento Coalescente" className="px-4 py-2">Elemento Coalescente</TabsTrigger>
            <TabsTrigger value="Elemento Hidrofóbico" className="px-4 py-2">Elemento Hidrofóbico</TabsTrigger>
            <TabsTrigger value="Filtro" className="px-4 py-2">Filtro</TabsTrigger>
            <TabsTrigger value="Caixa separadora" className="px-4 py-2">Caixa separadora</TabsTrigger>
            <TabsTrigger value="Outros" className="px-4 py-2">Outros</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {lista.map((p) => (
            <Link
              key={p.slug}
              to="/produtos/$slug"
              params={{ slug: p.slug }}
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
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.shortDescription}</p>
                <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
                  Ver detalhes →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {lista.length === 0 && (
          <p className="text-center text-muted-foreground py-12">Nenhum produto encontrado nesta categoria.</p>
        )}
      </section>
    </Layout>
  );
}
