import { useEffect, useState } from "react";
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
  const gallery = p.gallery && p.gallery.length > 0 ? p.gallery : [p.img];
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, gallery.length]);

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
          <div className="space-y-4">
            <div className="relative">
              <button
                type="button"
                onClick={() => setLightbox(active)}
                className="block w-full rounded-3xl overflow-hidden bg-gradient-card border border-border shadow-soft cursor-zoom-in group"
                aria-label="Ampliar imagem"
              >
                <img
                  src={gallery[active]}
                  alt={p.name}
                  className="w-full h-full object-contain aspect-square bg-background transition group-hover:scale-[1.02]"
                />
              </button>
              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActive((i) => (i - 1 + gallery.length) % gallery.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-foreground shadow-soft border border-border text-2xl leading-none transition"
                    aria-label="Imagem anterior"
                  >‹</button>
                  <button
                    type="button"
                    onClick={() => setActive((i) => (i + 1) % gallery.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-foreground shadow-soft border border-border text-2xl leading-none transition"
                    aria-label="Próxima imagem"
                  >›</button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs bg-black/60 text-white px-2.5 py-1 rounded-full">
                    {active + 1} / {gallery.length}
                  </div>
                </>
              )}
            </div>
            {gallery.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {gallery.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    onDoubleClick={() => setLightbox(i)}
                    className={`rounded-xl overflow-hidden bg-background border transition ${
                      i === active ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"
                    }`}
                    aria-label={`Ver imagem ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${p.name} — imagem ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover aspect-square"
                    />
                  </button>
                ))}
              </div>
            )}
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

        {p.secoes && p.secoes.length > 0 && (
          <div className="mt-16 space-y-8">
            {p.secoes.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-gradient-card p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold mb-3">{s.title}</h2>
                {s.text && (
                  <p className="text-muted-foreground leading-relaxed mb-3">{s.text}</p>
                )}
                {s.items && s.items.length > 0 && (
                  <ul className="space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 inline-block size-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}


        {p.videoUrl && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-4">Vídeo do produto</h2>
            <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-video bg-black">
              <iframe
                src={p.videoUrl}
                title={`Vídeo — ${p.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
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

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-4 right-4 text-white/90 hover:text-white text-3xl leading-none w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            aria-label="Fechar"
          >×</button>
          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setLightbox((i) => i === null ? i : (i - 1 + gallery.length) % gallery.length); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-4xl w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                aria-label="Anterior"
              >‹</button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setLightbox((i) => i === null ? i : (i + 1) % gallery.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-4xl w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                aria-label="Próxima"
              >›</button>
            </>
          )}
          <img
            src={gallery[lightbox]}
            alt={`${p.name} — imagem ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/40 px-3 py-1 rounded-full">
            {lightbox + 1} / {gallery.length}
          </div>
        </div>
      )}
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
