// Generate static HTML site from React project.
import { produtos } from "../dev-server/src/data/produtos";
import * as fs from "fs";
import * as path from "path";

const ROOT = "/dev-server";
const OUT = "/tmp/newborges-html";
const ASSETS_SRC = path.join(ROOT, "src/assets");

// Clean
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.join(OUT, "assets/nb/produtos/sao"), { recursive: true });
fs.mkdirSync(path.join(OUT, "produtos"), { recursive: true });

// Copy assets folder (excluding .asset.json)
function copyDir(src: string, dst: string) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else if (!entry.name.endsWith(".asset.json")) fs.copyFileSync(s, d);
  }
}
copyDir(ASSETS_SRC, path.join(OUT, "assets"));

// Download sao asset images from URL
async function downloadSao() {
  const saoDir = path.join(ROOT, "src/assets/nb/produtos/sao");
  for (const f of fs.readdirSync(saoDir)) {
    if (!f.endsWith(".asset.json")) continue;
    const meta = JSON.parse(fs.readFileSync(path.join(saoDir, f), "utf8"));
    const url = `https://cdn.lovable.dev${meta.url}`;
    const outName = f.replace(".asset.json", "");
    const outPath = path.join(OUT, "assets/nb/produtos/sao", outName);
    try {
      const res = await fetch(url);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(outPath, buf);
      } else {
        console.warn("fail", url, res.status);
      }
    } catch (e) {
      console.warn("err", url, e);
    }
  }
}

// Resolve image: input may be imported asset (string url ending in .png/.jpg) or a /__l5e/... url
function resolveImg(input: string): string {
  if (!input) return "";
  if (input.startsWith("/__l5e/")) {
    // sao asset → mapped to assets/nb/produtos/sao/<name>
    const name = input.split("/").pop()!;
    return `assets/nb/produtos/sao/${name}`;
  }
  // Vite import paths are like "/src/assets/nb/produtos/x.jpg" in JSON; but our import gives basename only via ESM resolution
  // In our generator, importing TS gives us strings like "/src/assets/..." or absolute file:// or just filename. We'll match by basename.
  const base = input.split("/").pop()!.split("?")[0];
  // search for it under OUT/assets
  const found = findFile(path.join(OUT, "assets"), base);
  if (found) return path.relative(OUT, found).replace(/\\/g, "/");
  return input;
}
function findFile(dir: string, name: string): string | null {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { const r = findFile(p, name); if (r) return r; }
    else if (e.name === name) return p;
  }
  return null;
}

const baseHead = (title: string, desc: string, pathPrefix = "") => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(desc)}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(desc)}" />
<link rel="icon" href="${pathPrefix}assets/nb/logo.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>
<script>tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter','sans-serif'], display: ['Space Grotesk','Inter','sans-serif'] }, colors: { brand: { DEFAULT: '#7BC043', dark: '#5fa530' } } } } }</script>
<link rel="stylesheet" href="${pathPrefix}assets/styles.css" />
</head>
<body class="font-sans bg-white text-slate-900 antialiased">`;

const header = (pathPrefix = "") => `
<header class="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
  <div class="hidden md:flex items-center justify-between px-6 lg:px-12 py-2 text-xs text-slate-500 border-b border-slate-100">
    <div class="flex items-center gap-6"><span>📞 (43) 3354-2494</span><span>📍 Cambé — PR</span></div>
    <div class="flex items-center gap-3"><a href="https://www.instagram.com/newborgesoficial/" target="_blank" class="hover:text-brand">Instagram</a></div>
  </div>
  <div class="flex items-center justify-between px-6 lg:px-12 py-4">
    <a href="${pathPrefix}index.html" class="flex items-center gap-3">
      <img src="${pathPrefix}assets/nb/logo.png" alt="New Borges" class="h-10 w-auto object-contain" />
      <div class="leading-tight hidden sm:block">
        <div class="font-display font-bold tracking-tight">New Borges</div>
        <div class="text-[10px] uppercase tracking-[0.2em] text-slate-500">Filtros Industriais</div>
      </div>
    </a>
    <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
      <a href="${pathPrefix}index.html" class="hover:text-brand">Início</a>
      <a href="${pathPrefix}produtos.html" class="hover:text-brand">Produtos</a>
      <a href="${pathPrefix}sobre.html" class="hover:text-brand">Sobre</a>
      <a href="${pathPrefix}contato.html" class="hover:text-brand">Contato</a>
    </nav>
    <a href="https://wa.link/x20tj3" target="_blank" class="hidden md:inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-brand-dark transition">Solicitar orçamento</a>
  </div>
</header>`;

const footer = (pathPrefix = "") => `
<footer class="border-t border-slate-200 bg-slate-50 mt-32">
  <div class="px-6 lg:px-12 py-16 grid gap-12 md:grid-cols-4 max-w-[1400px] mx-auto">
    <div class="md:col-span-2">
      <img src="${pathPrefix}assets/nb/logo.png" alt="New Borges" class="h-12 w-auto object-contain" />
      <p class="mt-5 text-sm text-slate-600 max-w-md">Há 11 anos fabricando filtros e elementos filtrantes de alta performance para usinas, fazendas, transportadoras e aviação.</p>
    </div>
    <div>
      <div class="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">Navegação</div>
      <ul class="space-y-2 text-sm">
        <li><a href="${pathPrefix}index.html" class="hover:text-brand">Início</a></li>
        <li><a href="${pathPrefix}produtos.html" class="hover:text-brand">Produtos</a></li>
        <li><a href="${pathPrefix}sobre.html" class="hover:text-brand">Sobre nós</a></li>
        <li><a href="${pathPrefix}contato.html" class="hover:text-brand">Contato</a></li>
      </ul>
    </div>
    <div>
      <div class="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">Contato</div>
      <ul class="space-y-3 text-sm text-slate-600">
        <li>📞 (43) 3354-2494</li>
        <li>📍 Cambé — PR</li>
        <li>✉️ contato@newborges.com.br</li>
      </ul>
    </div>
  </div>
  <div class="border-t border-slate-200 py-5 px-6 lg:px-12 text-xs text-slate-500 flex justify-between max-w-[1400px] mx-auto">
    <span>© ${new Date().getFullYear()} New Borges Filtros</span>
    <span>Cambé — Paraná — Brasil</span>
  </div>
</footer>
</body></html>`;

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// === INDEX ===
const indexHtml = baseHead("New Borges — Filtros e Elementos Filtrantes Industriais", "Há 11 anos fabricando filtros e elementos filtrantes de alta performance para usinas, fazendas, transportadoras e aviação.") + header() + `
<section class="relative overflow-hidden bg-gradient-to-br from-lime-50 via-white to-emerald-50">
  <div class="px-6 lg:px-12 pt-20 pb-32 grid lg:grid-cols-12 gap-10 items-center max-w-[1400px] mx-auto">
    <div class="lg:col-span-7">
      <div class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur px-4 py-1.5 text-xs">
        <span class="text-slate-500">Há</span><span class="font-semibold">11 anos no mercado</span>
      </div>
      <h1 class="mt-6 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">Filtros que <span class="text-brand">protegem</span> a sua operação.</h1>
      <p class="mt-6 text-lg text-slate-600 max-w-xl">Fabricamos filtros e elementos filtrantes de alta performance para usinas, fazendas, transportadoras e aviação.</p>
      <div class="mt-9 flex flex-wrap gap-3">
        <a href="https://wa.link/x20tj3" target="_blank" class="rounded-full bg-brand px-6 py-3.5 font-semibold text-white shadow hover:bg-brand-dark transition">Solicitar orçamento →</a>
        <a href="produtos.html" class="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold hover:border-brand">Ver produtos</a>
      </div>
    </div>
    <div class="lg:col-span-5"><img src="assets/nb/produtos-hero.png" alt="Filtros New Borges" class="w-full" /></div>
  </div>
</section>

<section class="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
  <div class="grid md:grid-cols-3 gap-6">
    ${[
      ["Qualidade certificada", "Atendemos os mais rigorosos padrões da indústria."],
      ["Pronta entrega", "Grande estoque disponível para envio rápido."],
      ["Preço justo", "Fabricação própria garante o melhor custo-benefício."],
    ].map(([t, d]) => `<div class="rounded-2xl border border-slate-200 p-7 bg-gradient-to-b from-white to-slate-50 shadow-sm"><h3 class="font-display text-xl font-semibold">${t}</h3><p class="mt-2 text-sm text-slate-600">${d}</p></div>`).join("")}
  </div>
</section>

<section class="px-6 lg:px-12 py-16 max-w-[1400px] mx-auto">
  <div class="flex items-end justify-between flex-wrap gap-4 mb-12">
    <div>
      <div class="text-xs uppercase tracking-[0.3em] text-brand mb-3">Nossos produtos</div>
      <h2 class="font-display text-4xl md:text-5xl font-bold">Mais que filtros, soluções de filtragem.</h2>
    </div>
    <a href="produtos.html" class="text-sm font-semibold text-brand hover:underline">Ver todos →</a>
  </div>
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
    ${produtos.slice(0, 4).map(p => `<a href="produtos/${p.slug}.html" class="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-brand transition shadow-sm"><div class="aspect-square overflow-hidden bg-slate-50"><img src="${resolveImg(p.img as string)}" alt="${escapeHtml(p.name)}" class="w-full h-full object-cover group-hover:scale-105 transition" /></div><div class="p-5"><span class="inline-block text-[10px] uppercase tracking-wider text-brand border border-brand/30 bg-brand/5 rounded-full px-2.5 py-1">${p.category}</span><h3 class="mt-3 font-display font-semibold">${escapeHtml(p.name)}</h3></div></a>`).join("")}
  </div>
</section>

<section class="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
  <div class="text-center max-w-2xl mx-auto mb-14">
    <h2 class="font-display text-4xl md:text-5xl font-bold">Vídeos explicativos</h2>
  </div>
  <div class="grid sm:grid-cols-2 gap-6">
    ${["T0S_mHM4od4","F_e2MjbHRn0","v9Rza5JpViI","u-rSd6cJnXM"].map(id => `<div class="rounded-2xl overflow-hidden border border-slate-200 aspect-video"><iframe src="https://www.youtube.com/embed/${id}" class="w-full h-full" allowfullscreen loading="lazy"></iframe></div>`).join("")}
  </div>
</section>
` + footer();

fs.writeFileSync(path.join(OUT, "index.html"), indexHtml);

// === PRODUTOS LIST ===
const produtosHtml = baseHead("Produtos — New Borges Filtros", "Conheça toda a linha de filtros e elementos filtrantes New Borges.") + header() + `
<section class="relative bg-gradient-to-br from-lime-50 via-white to-emerald-50 px-6 lg:px-12 pt-20 pb-16">
  <div class="max-w-[1400px] mx-auto">
    <div class="text-xs uppercase tracking-[0.3em] text-brand mb-3">Catálogo completo</div>
    <h1 class="font-display text-5xl md:text-6xl font-bold">Conheça nossos <span class="text-brand">produtos</span>.</h1>
    <a href="https://wa.link/x20tj3" target="_blank" class="inline-flex mt-6 px-5 py-2.5 rounded-full bg-brand text-white font-medium shadow hover:bg-brand-dark transition">Quero um Orçamento</a>
  </div>
</section>

<section class="px-6 lg:px-12 py-16 max-w-[1400px] mx-auto">
  <div class="mb-10 flex flex-wrap gap-2" id="filters">
    ${["Todos","Elemento filtrante","Filtro","Caixa separadora"].map((c,i) => `<button data-filter="${c}" class="filter-btn px-4 py-2 rounded-full text-sm font-medium border ${i===0?'bg-brand text-white border-brand':'border-slate-300 hover:border-brand'}">${c}</button>`).join("")}
  </div>
  <div id="grid" class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    ${produtos.map(p => `<a href="produtos/${p.slug}.html" data-cat="${p.category}" class="product-card group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-brand transition shadow-sm flex flex-col"><div class="aspect-square overflow-hidden bg-slate-50"><img src="${resolveImg(p.img as string)}" alt="${escapeHtml(p.name)}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition" /></div><div class="p-5 flex flex-col flex-1"><span class="inline-block self-start text-[10px] uppercase tracking-wider text-brand border border-brand/30 bg-brand/5 rounded-full px-2.5 py-1">${p.category}</span><h3 class="mt-3 font-display font-semibold leading-snug">${escapeHtml(p.name)}</h3><p class="mt-2 text-sm text-slate-600 flex-1">${escapeHtml(p.shortDescription)}</p><span class="mt-4 text-sm font-medium text-brand group-hover:underline">Ver detalhes →</span></div></a>`).join("")}
  </div>
</section>

<script>
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => { b.classList.remove('bg-brand','text-white','border-brand'); b.classList.add('border-slate-300'); });
    btn.classList.add('bg-brand','text-white','border-brand');
    document.querySelectorAll('.product-card').forEach(c => {
      c.style.display = (f === 'Todos' || c.dataset.cat === f) ? '' : 'none';
    });
  });
});
</script>
` + footer();
fs.writeFileSync(path.join(OUT, "produtos.html"), produtosHtml);

// === PRODUTO DETALHE ===
for (const p of produtos) {
  const gallery = (p.gallery && p.gallery.length > 0 ? p.gallery : [p.img]).map(g => resolveImg(g as string));
  const related = produtos.filter(x => x.category === p.category && x.slug !== p.slug).slice(0, 4);

  const html = baseHead(`${p.name} — New Borges Filtros`, p.shortDescription, "../") + header("../") + `
<section class="px-6 lg:px-12 pt-12 pb-6 max-w-[1400px] mx-auto">
  <nav class="text-sm text-slate-500 mb-6"><a href="../index.html" class="hover:text-brand">Início</a> / <a href="../produtos.html" class="hover:text-brand">Produtos</a> / <span class="text-slate-900">${escapeHtml(p.name)}</span></nav>
</section>

<section class="px-6 lg:px-12 pb-16 max-w-[1400px] mx-auto">
  <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
    <div class="space-y-4">
      <button type="button" onclick="openLightbox(currentIdx)" class="block w-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm cursor-zoom-in">
        <img id="mainImg" src="${gallery[0]}" alt="${escapeHtml(p.name)}" class="w-full h-full object-contain aspect-square bg-white" />
      </button>
      ${gallery.length > 1 ? `<div class="grid grid-cols-4 sm:grid-cols-5 gap-2">
        ${gallery.map((src, i) => `<button type="button" data-idx="${i}" onclick="setMain(${i})" class="thumb rounded-xl overflow-hidden border ${i===0?'border-brand ring-2 ring-brand/30':'border-slate-200 hover:border-brand'}"><img src="${src}" loading="lazy" alt="img ${i+1}" class="w-full h-full object-cover aspect-square" /></button>`).join("")}
      </div>` : ""}
    </div>
    <div>
      <span class="inline-block text-[10px] uppercase tracking-wider text-brand border border-brand/30 bg-brand/5 rounded-full px-2.5 py-1">${p.category}</span>
      <h1 class="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">${escapeHtml(p.name)}</h1>
      <p class="mt-5 text-lg text-slate-600 leading-relaxed">${escapeHtml(p.longDescription ?? p.shortDescription)}</p>
      ${p.destaques?.length ? `<ul class="mt-6 space-y-2">${p.destaques.map(d=>`<li class="flex items-start gap-2 text-sm"><span class="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-brand"></span><span>${escapeHtml(d)}</span></li>`).join("")}</ul>` : ""}
      <a href="https://wa.link/x20tj3" target="_blank" class="inline-flex mt-8 px-6 py-3 rounded-full bg-brand text-white font-medium shadow hover:bg-brand-dark transition">Solicitar orçamento via WhatsApp</a>
    </div>
  </div>

  ${(p.dimensional || p.construcao || p.meioFiltrante || p.areaFiltrante || p.vazao || p.aplicacao) ? `<div class="mt-16 grid md:grid-cols-2 gap-5">
    ${p.dimensional ? `<div class="rounded-2xl border border-slate-200 p-5 bg-slate-50"><div class="text-xs uppercase tracking-wider text-brand font-semibold mb-2">Dimensional</div><ul class="text-sm space-y-1">${p.dimensional.map(d=>`<li>${escapeHtml(d)}</li>`).join("")}</ul></div>` : ""}
    ${p.construcao ? `<div class="rounded-2xl border border-slate-200 p-5 bg-slate-50"><div class="text-xs uppercase tracking-wider text-brand font-semibold mb-2">Construção</div><div class="text-sm">${escapeHtml(p.construcao)}</div></div>` : ""}
    ${p.meioFiltrante ? `<div class="rounded-2xl border border-slate-200 p-5 bg-slate-50"><div class="text-xs uppercase tracking-wider text-brand font-semibold mb-2">Meio Filtrante</div><div class="text-sm">${escapeHtml(p.meioFiltrante)}</div></div>` : ""}
    ${p.areaFiltrante ? `<div class="rounded-2xl border border-slate-200 p-5 bg-slate-50"><div class="text-xs uppercase tracking-wider text-brand font-semibold mb-2">Área Filtrante</div><div class="text-sm">${escapeHtml(p.areaFiltrante)}</div></div>` : ""}
    ${p.vazao ? `<div class="rounded-2xl border border-slate-200 p-5 bg-slate-50"><div class="text-xs uppercase tracking-wider text-brand font-semibold mb-2">Vazão</div><div class="text-sm">${escapeHtml(p.vazao)}</div></div>` : ""}
    ${p.aplicacao ? `<div class="rounded-2xl border border-slate-200 p-5 bg-slate-50"><div class="text-xs uppercase tracking-wider text-brand font-semibold mb-2">Aplicação</div><div class="text-sm">${escapeHtml(p.aplicacao)}</div></div>` : ""}
  </div>` : ""}

  ${p.equivalencias?.length ? `<div class="mt-12"><h2 class="font-display text-2xl font-bold mb-4">Equivalência</h2><div class="rounded-2xl border border-slate-200 overflow-hidden"><table class="w-full text-sm"><thead class="bg-brand/5 text-brand uppercase text-xs tracking-wider"><tr><th class="text-left px-5 py-3">Marca</th><th class="text-left px-5 py-3">Modelo</th></tr></thead><tbody>${p.equivalencias.map(e=>`<tr class="border-t border-slate-200"><td class="px-5 py-3 font-medium">${escapeHtml(e.marca)}</td><td class="px-5 py-3 text-slate-600">${escapeHtml(e.modelo)}</td></tr>`).join("")}</tbody></table></div></div>` : ""}

  ${p.secoes?.length ? `<div class="mt-16 space-y-8">${p.secoes.map(s=>`<div class="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8"><h2 class="font-display text-2xl font-bold mb-3">${escapeHtml(s.title)}</h2>${s.text?`<p class="text-slate-600 mb-3">${escapeHtml(s.text)}</p>`:""}${s.items?.length?`<ul class="space-y-2">${s.items.map(it=>`<li class="flex items-start gap-2 text-sm"><span class="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0"></span><span>${escapeHtml(it)}</span></li>`).join("")}</ul>`:""}</div>`).join("")}</div>` : ""}

  ${p.videoUrl ? `<div class="mt-16"><h2 class="font-display text-2xl font-bold mb-4">Vídeo do produto</h2><div class="rounded-2xl overflow-hidden border border-slate-200 aspect-video bg-black"><iframe src="${p.videoUrl}" class="w-full h-full" allowfullscreen></iframe></div></div>` : ""}

  ${related.length ? `<div class="mt-20"><h2 class="font-display text-2xl font-bold mb-6">Produtos relacionados</h2><div class="grid sm:grid-cols-2 md:grid-cols-4 gap-5">${related.map(r=>`<a href="${r.slug}.html" class="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-brand transition shadow-sm"><div class="aspect-square overflow-hidden bg-slate-50"><img src="${resolveImg(r.img as string)}" alt="${escapeHtml(r.name)}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition" /></div><div class="p-4"><h3 class="font-display font-semibold text-sm">${escapeHtml(r.name)}</h3></div></a>`).join("")}</div></div>` : ""}
</section>

<div id="lightbox" class="fixed inset-0 z-[100] bg-black/90 hidden items-center justify-center p-4" onclick="closeLightbox()">
  <button onclick="event.stopPropagation();closeLightbox()" class="absolute top-4 right-4 text-white text-3xl w-10 h-10 rounded-full bg-white/10 hover:bg-white/20">×</button>
  <button onclick="event.stopPropagation();navLightbox(-1)" class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl w-12 h-12 rounded-full bg-white/10 hover:bg-white/20">‹</button>
  <button onclick="event.stopPropagation();navLightbox(1)" class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl w-12 h-12 rounded-full bg-white/10 hover:bg-white/20">›</button>
  <img id="lbImg" onclick="event.stopPropagation()" class="max-w-[95vw] max-h-[90vh] object-contain rounded-lg" />
  <div id="lbCount" class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 px-3 py-1 rounded-full"></div>
</div>

<script>
const gallery = ${JSON.stringify(gallery)};
let currentIdx = 0;
let lbIdx = 0;
function setMain(i) {
  currentIdx = i;
  document.getElementById('mainImg').src = gallery[i];
  document.querySelectorAll('.thumb').forEach((t, idx) => {
    t.classList.toggle('border-brand', idx === i);
    t.classList.toggle('ring-2', idx === i);
    t.classList.toggle('ring-brand/30', idx === i);
    t.classList.toggle('border-slate-200', idx !== i);
  });
}
function openLightbox(i) {
  lbIdx = i;
  document.getElementById('lbImg').src = gallery[i];
  document.getElementById('lbCount').textContent = (i+1) + ' / ' + gallery.length;
  document.getElementById('lightbox').classList.remove('hidden');
  document.getElementById('lightbox').classList.add('flex');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.getElementById('lightbox').classList.remove('flex');
  document.body.style.overflow = '';
}
function navLightbox(d) {
  lbIdx = (lbIdx + d + gallery.length) % gallery.length;
  document.getElementById('lbImg').src = gallery[lbIdx];
  document.getElementById('lbCount').textContent = (lbIdx+1) + ' / ' + gallery.length;
}
document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox').classList.contains('hidden')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') navLightbox(1);
  if (e.key === 'ArrowLeft') navLightbox(-1);
});
document.querySelectorAll('.thumb').forEach(t => {
  t.addEventListener('dblclick', () => openLightbox(parseInt(t.dataset.idx)));
});
</script>
` + footer("../");

  fs.writeFileSync(path.join(OUT, "produtos", `${p.slug}.html`), html);
}

// === SOBRE ===
const sobreHtml = baseHead("Sobre nós — New Borges Filtros", "Conheça a New Borges: 11 anos fabricando filtros industriais.") + header() + `
<section class="bg-gradient-to-br from-lime-50 via-white to-emerald-50 px-6 lg:px-12 pt-20 pb-16">
  <div class="max-w-[1400px] mx-auto"><div class="text-xs uppercase tracking-[0.3em] text-brand mb-3">Sobre nós</div><h1 class="font-display text-5xl md:text-6xl font-bold">Uma década entregando <span class="text-brand">confiabilidade</span>.</h1></div>
</section>
<section class="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12">
  <div class="space-y-5 text-slate-600 leading-relaxed">
    <p>A <strong class="text-slate-900">New Borges</strong> nasceu com um propósito claro: fornecer ao mercado brasileiro filtros e elementos filtrantes que combinem qualidade, performance e preço justo.</p>
    <p>Mais que fabricar filtros, oferecemos confiabilidade, inovação e excelência, entregando soluções que protegem, otimizam e impulsionam a performance dos sistemas de abastecimento.</p>
    <p>Com uma vasta gama de produtos compatíveis com diferentes marcas e um estoque robusto para pronta entrega, atendemos desde pequenos clientes até grandes operações industriais.</p>
  </div>
  <div class="grid gap-4">
    ${[["Missão","Proteger e otimizar sistemas de abastecimento com filtros de alta performance."],["Visão","Ser referência nacional em fabricação de filtros e elementos filtrantes."],["Valores","Qualidade, inovação, atendimento ágil, ética e compromisso."]].map(([t,d])=>`<div class="rounded-2xl border border-slate-200 p-6 bg-slate-50 shadow-sm"><h3 class="font-display text-lg font-semibold">${t}</h3><p class="text-sm text-slate-600 mt-1">${d}</p></div>`).join("")}
  </div>
</section>
` + footer();
fs.writeFileSync(path.join(OUT, "sobre.html"), sobreHtml);

// === CONTATO ===
const contatoHtml = baseHead("Contato — New Borges Filtros", "Entre em contato para orçamentos e suporte técnico.") + header() + `
<section class="bg-gradient-to-br from-lime-50 via-white to-emerald-50 px-6 lg:px-12 pt-20 pb-16">
  <div class="max-w-[1400px] mx-auto"><div class="text-xs uppercase tracking-[0.3em] text-brand mb-3">Fale conosco</div><h1 class="font-display text-5xl md:text-6xl font-bold">Solicite seu <span class="text-brand">orçamento</span>.</h1></div>
</section>
<section class="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto grid lg:grid-cols-5 gap-8">
  <div class="lg:col-span-2 space-y-4">
    ${[["Telefone","(43) 3354-2494","https://wa.link/x20tj3"],["E-mail","contato@newborges.com.br","mailto:contato@newborges.com.br"],["Endereço","Cambé — Paraná, Brasil","#"],["Instagram","@newborgesoficial","https://www.instagram.com/newborgesoficial/"]].map(([l,v,h])=>`<a href="${h}" target="_blank" class="block rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-brand transition"><div class="text-xs uppercase tracking-wider text-slate-500">${l}</div><div class="font-semibold mt-1">${v}</div></a>`).join("")}
  </div>
  <form action="https://wa.link/x20tj3" class="lg:col-span-3 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
    <h2 class="font-display text-2xl font-bold">Envie sua mensagem</h2>
    <p class="text-sm text-slate-600 mt-1">Preencha o formulário e entraremos em contato.</p>
    <div class="mt-6 grid sm:grid-cols-2 gap-4">
      <div><label class="text-xs uppercase tracking-wider text-slate-500">Nome *</label><input required class="mt-1.5 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 focus:border-brand outline-none" /></div>
      <div><label class="text-xs uppercase tracking-wider text-slate-500">Empresa</label><input class="mt-1.5 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 focus:border-brand outline-none" /></div>
      <div><label class="text-xs uppercase tracking-wider text-slate-500">E-mail *</label><input type="email" required class="mt-1.5 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 focus:border-brand outline-none" /></div>
      <div><label class="text-xs uppercase tracking-wider text-slate-500">Telefone</label><input class="mt-1.5 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 focus:border-brand outline-none" /></div>
    </div>
    <div class="mt-4"><label class="text-xs uppercase tracking-wider text-slate-500">Mensagem</label><textarea rows="5" required class="mt-1.5 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 focus:border-brand outline-none"></textarea></div>
    <button class="mt-6 inline-flex rounded-full bg-brand px-6 py-3.5 font-semibold text-white shadow hover:bg-brand-dark transition">Enviar mensagem</button>
  </form>
</section>
` + footer();
fs.writeFileSync(path.join(OUT, "contato.html"), contatoHtml);

// styles.css minimal extras
fs.writeFileSync(path.join(OUT, "assets/styles.css"), `/* Extras */
body { font-family: 'Inter', sans-serif; }
.font-display { font-family: 'Space Grotesk', sans-serif; letter-spacing: -0.02em; }
`);

await downloadSao();

console.log("Generated to", OUT);
