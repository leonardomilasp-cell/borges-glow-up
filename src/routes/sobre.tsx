import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre nós — New Borges Filtros" },
      { name: "description", content: "Conheça a New Borges: mais de 10 anos fabricando filtros industriais com qualidade, inovação e excelência." },
      { property: "og:title", content: "Sobre a New Borges" },
      { property: "og:description", content: "Mais de uma década protegendo sistemas de abastecimento com filtros de alta performance." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <Layout>
      <section className="relative bg-hero px-6 lg:px-12 pt-20 pb-16">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Sobre nós</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold max-w-3xl">Uma década entregando <span className="text-gradient">confiabilidade</span>.</h1>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>A <span className="text-foreground font-semibold">New Borges</span> nasceu com um propósito claro: fornecer ao mercado brasileiro filtros e elementos filtrantes que combinem qualidade, performance e preço justo.</p>
          <p>Mais que fabricar filtros, oferecemos confiabilidade, inovação e excelência, entregando soluções que protegem, otimizam e impulsionam a performance dos sistemas de abastecimento de usinas, fazendas, transportadoras e do setor de aviação.</p>
          <p>Com uma vasta gama de produtos compatíveis com diferentes marcas e um estoque robusto para pronta entrega, conseguimos atender desde pequenos clientes até grandes operações industriais sem comprometer prazos.</p>
        </div>
        <div className="grid gap-4">
          {[
            { icon: Target, title: "Missão", text: "Proteger e otimizar sistemas de abastecimento com filtros de alta performance, confiáveis e acessíveis." },
            { icon: Eye, title: "Visão", text: "Ser referência nacional em fabricação de filtros e elementos filtrantes industriais." },
            { icon: Heart, title: "Valores", text: "Qualidade, inovação, atendimento ágil, ética e compromisso com cada cliente." },
          ].map(b => (
            <div key={b.title} className="rounded-2xl bg-gradient-card border border-border p-6 flex gap-4 shadow-soft">
              <div className="size-11 shrink-0 rounded-xl bg-primary/10 text-primary grid place-items-center"><b.icon className="size-5" /></div>
              <div>
                <h3 className="font-display text-lg font-semibold">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
