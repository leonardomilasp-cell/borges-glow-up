import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { getProdutoBySlug, produtos, type Produto } from "@/data/produtos";

export const Route = createFileRoute("/produtos/$slug")({
  head: ({ params }) => {
    const p = getProdutoBySlug(params.slug);
    const title = p ? `${p.name} — New Borges Filtros` : "Produto — New Borges Filtros";
    const desc = p?.shortDescription ?? "Detalhes do produto New Borges.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const produto = getProdutoBySlug(params.slug);
    if (!produto) throw notFound();
    return { produto };
  },
  notFoundComponent: () => (
    <Layout>
      <section className="px-6 lg:px-12 py-24 max-w-3xl mx-auto text-center">
        <h1 className="font-display text-4xl font-bold mb-4">Produto não encontrado</h1>
        <p className="text-muted-foreground mb-6">
          O produto que você procura não está disponível.
        </p>
        <Link to="/produtos" className="text-primary font-medium hover:underline">
          ← Voltar para o catálogo
        </Link>
      </section>
    </Layout>
  ),
  errorComponent: ProdutoError,
  component: ProdutoDetalhe,
});

function ProdutoError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <Layout>
      <section className="px-6 lg:px-12 py-24 max-w-3xl mx-auto text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Erro ao carregar o produto</h1>
        <p className="text-muted-foreground mb-6">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="text-primary font-medium hover:underline"
        >
          Tentar novamente
        </button>
      </section>
    </Layout>
  );
}

function ProdutoDetalhe() {
  const { produto: p } = Route.useLoaderData() as { produto: Produto };
  const related = produtos.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);

  return (
    <Layout>
      <section className="px-6 lg:px-12 pt-12 pb-6 max-w-[1400px] mx-auto">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Início</Link>
          <span className="mx-2">/</span>
          <Link to="/produtos" className="hover:text-primary">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{p.name}</span>
        </nav>
      </section>

      <section className="px-6 lg:px-12 pb-16 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="rounded-3xl overflow-hidden bg-gradient-card border border-border shadow-soft">
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-full object-contain aspect-square bg-background"
            />
          </div>

          <div>
            <span className="inline-block text-[10px] uppercase tracking-wider text-primary border border-primary/30 bg-primary/5 rounded-full px-2.5 py-1">
              {p.category}
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
              {p.name}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              {p.longDescription ?? p.shortDescription}
            </p>

            {p.destaques && p.destaques.length > 0 && (
              <ul className="mt-6 space-y-2">
                {p.destaques.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 inline-block size-1.5 rounded-full bg-primary" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            )}

            <a
              href="https://wa.link/x20tj3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-8 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:opacity-90 transition"
            >
              Solicitar orçamento via WhatsApp
            </a>
          </div>
        </div>

        {(p.dimensional || p.construcao || p.meioFiltrante || p.areaFiltrante || p.vazao || p.aplicacao) && (
          <div className="mt-16 grid md:grid-cols-2 gap-5">
            {p.dimensional && (
              <Spec title="Dimensional">
                <ul className="space-y-1">
                  {p.dimensional.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </Spec>
            )}
            {p.construcao && <Spec title="Construção">{p.construcao}</Spec>}
            {p.meioFiltrante && <Spec title="Meio Filtrante">{p.meioFiltrante}</Spec>}
            {p.areaFiltrante && <Spec title="Área Filtrante">{p.areaFiltrante}</Spec>}
            {p.vazao && <Spec title="Vazão">{p.vazao}</Spec>}
            {p.aplicacao && <Spec title="Aplicação">{p.aplicacao}</Spec>}
          </div>
        )}

        {p.equivalencias && p.equivalencias.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold mb-4">Equivalência</h2>
            <div className="rounded-2xl border border-border overflow-hidden bg-gradient-card">
              <table className="w-full text-sm">
                <thead className="bg-primary/5 text-primary uppercase text-xs tracking-wider">
                  <tr>
                    <th className="text-left px-5 py-3">Marca</th>
                    <th className="text-left px-5 py-3">Modelo</th>
                  </tr>
                </thead>
                <tbody>
                  {p.equivalencias.map((e, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="px-5 py-3 font-medium">{e.marca}</td>
                      <td className="px-5 py-3 text-muted-foreground">{e.modelo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold mb-6">Produtos relacionados</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/produtos/$slug"
                  params={{ slug: r.slug }}
                  className="group rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/50 transition shadow-soft"
                >
                  <div className="aspect-square overflow-hidden bg-background">
                    <img src={r.img} alt={r.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-sm leading-snug">{r.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}

function Spec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-gradient-card p-5">
      <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">{title}</div>
      <div className="text-sm text-foreground/90 leading-relaxed">{children}</div>
    </div>
  );
}
