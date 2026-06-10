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
import caixaSaoHero from "@/assets/nb/produtos/caixa-sao-1500-hero.jpg";
import caixaSaoInterno from "@/assets/nb/produtos/caixa-sao-1500-interno.jpg";
import caixaSaoProduto from "@/assets/nb/produtos/caixa-sao-1500-produto.jpg";

export type Categoria = "Elemento filtrante" | "Filtro" | "Caixa separadora";

export interface Equivalencia {
  marca: string;
  modelo: string;
}

export interface Produto {
  slug: string;
  name: string;
  category: Categoria;
  img: string;
  shortDescription: string;
  longDescription?: string;
  dimensional?: string[];
  construcao?: string;
  meioFiltrante?: string;
  areaFiltrante?: string;
  vazao?: string;
  aplicacao?: string;
  equivalencias?: Equivalencia[];
  destaques?: string[];
}

export const produtos: Produto[] = [
  {
    slug: "filtro-turbo-diesel-50-v",
    name: "FILTRO TURBO DIESEL 50 V",
    category: "Filtro",
    img: turbo50v,
    shortDescription:
      "Filtração de óleo diesel em sistemas de grande porte com necessidade de alta vazão e instalação vertical.",
    longDescription:
      "O Filtro Turbo Diesel 50 V é indicado para operações de abastecimento intensivo em sistemas de grande porte, oferecendo alta vazão e instalação vertical. Projetado para reter partículas sólidas e separar água do diesel, prolonga a vida útil do motor e dos injetores.",
    vazao: "Alta vazão — recomendado para sistemas de grande porte",
    aplicacao: "Postos internos, tanques de armazenamento e bombas de transferência.",
    destaques: [
      "Instalação vertical",
      "Alta vazão de filtragem",
      "Compatível com elementos coalescentes da linha NBF",
    ],
  },
  {
    slug: "filtro-turbo-diesel-50-b",
    name: "FILTRO TURBO DIESEL 50 B",
    category: "Filtro",
    img: turbo50b,
    shortDescription:
      "Filtração de óleo diesel em sistemas de altíssima vazão, para operações contínuas e severas.",
    longDescription:
      "Indicado para operações contínuas e severas, como abastecimento de grandes frotas e tanques. Garante separação eficiente de água e retenção de partículas em altas vazões.",
    aplicacao: "Grandes frotas, tanques de armazenamento e operações 24/7.",
    destaques: ["Altíssima vazão", "Operação contínua", "Alta retenção de partículas"],
  },
  {
    slug: "filtro-turbo-diesel-40-b",
    name: "FILTRO TURBO DIESEL 40 B",
    category: "Filtro",
    img: turbo40b,
    shortDescription:
      "Filtração de óleo diesel em sistemas de alto volume para abastecimento interno e tanques.",
    aplicacao: "Abastecimento interno, tanques de armazenamento e bombas de transferência.",
    destaques: ["Alto volume", "Robusto e durável"],
  },
  {
    slug: "filtro-turbo-diesel-10-b",
    name: "FILTRO TURBO DIESEL 10 B",
    category: "Filtro",
    img: turbo40b,
    shortDescription:
      "Filtração de óleo diesel para abastecimento interno, tanques, bombas e sistemas de transferência.",
    destaques: ["Reduz impurezas", "Protege motores e injetores"],
  },
  {
    slug: "elemento-coalescente-hidrofobico-nbf-40pp",
    name: "Elemento Coalescente Hidrofóbico NBF-40PP",
    category: "Elemento filtrante",
    img: nbf40pp,
    shortDescription:
      "Elemento filtrante de alta performance para separação de água e retenção de sólidos em combustíveis.",
    construcao:
      "Tampas em Nylon injetado, corpo e tubos em chapa expandida de aço galvanizado.",
    meioFiltrante: "Dois estágios — papel celulose externo e papel aquablock interno.",
    destaques: ["Alta eficiência", "Separação eficaz de água", "Maior vida útil"],
  },
  {
    slug: "elemento-coalescente-hidrofobico-nbf-30ti",
    name: "Elemento Coalescente Hidrofóbico NBF-30TI",
    category: "Elemento filtrante",
    img: nbf30ti,
    shortDescription:
      "Alta eficiência na coalescência e remoção de água do combustível.",
    construcao: "Tampas em Nylon injetado, corpo e tubos em aço galvanizado.",
    meioFiltrante: "Dois estágios — papel celulose 25µ e papel aquablock 5µ.",
    destaques: ["Alta coalescência", "Robusto"],
  },
  {
    slug: "elemento-coalescente-hidrofobico-nbf-29tp",
    name: "Elemento Coalescente Hidrofóbico NBF-29TP",
    category: "Elemento filtrante",
    img: nbf29tp,
    shortDescription:
      "Aplicações exigentes na filtragem de combustíveis e fluidos industriais.",
    destaques: ["Excelente capacidade de retenção", "Construção robusta"],
  },
  {
    slug: "elemento-coalescente-hidrofobico-nbf-28fl",
    name: "Elemento Coalescente Hidrofóbico NBF-28FL",
    category: "Elemento filtrante",
    img: nbf28fl,
    shortDescription:
      "Máxima eficiência na separação de água e retenção de partículas em sistemas de combustível.",
    construcao: "Tampas em Nylon injetado, corpo e tubos em chapa expandida.",
    meioFiltrante: "Dois estágios — celulose externo e aquablock interno.",
    destaques: ["Alta eficiência", "Longa vida útil"],
  },
  {
    slug: "elemento-coalescente-hidrofobico-nbf-23fm",
    name: "Elemento Coalescente Hidrofóbico NBF-23FM",
    category: "Elemento filtrante",
    img: nbf23fm,
    shortDescription:
      "Remoção eficiente de água (livre e emulsificada) e contaminantes sólidos.",
    destaques: ["Remove água livre e emulsificada", "Retém contaminantes sólidos"],
  },
  {
    slug: "elemento-coalescente-hidrofobico-nbf-21pp",
    name: "Elemento Coalescente Hidrofóbico NBF-21PP",
    category: "Elemento filtrante",
    img: nbf21pp,
    shortDescription:
      "Alto desempenho na separação de água e retenção de partículas.",
    destaques: ["Construção robusta", "Longa vida útil"],
  },
  {
    slug: "elemento-coalescente-hidrofobico-nbf-11",
    name: "Elemento Coalescente Hidrofóbico NBF-11",
    category: "Elemento filtrante",
    img: nbf11,
    shortDescription:
      "Máxima eficiência na separação de água e retenção de contaminantes sólidos.",
    destaques: ["Alta eficiência", "Indicado para abastecimento"],
  },
  {
    slug: "elemento-coalescente-hidrofobico-nbf-10pp",
    name: "Elemento Coalescente Hidrofóbico NBF-10PP",
    category: "Elemento filtrante",
    img: nbf10pp,
    shortDescription:
      "Elemento separador de partículas sólidas, água e óleo combustível.",
    longDescription:
      "O Elemento Coalescente Hidrofóbico NBF-10PP é um separador de partículas sólidas, água e óleo combustível, projetado para garantir alta eficiência na coalescência, proteger equipamentos e sistemas, realizar separação eficaz de água e impurezas e aumentar a vida útil do combustível.",
    dimensional: [
      "Ø ext. = 153 mm",
      "Ø int. = 38,5 mm",
      "Altura total = 373 mm",
    ],
    construcao:
      "Tampas em Nylon injetado, corpo e tubos em chapa expandida de aço galvanizado.",
    meioFiltrante:
      "Dois estágios — 1º papel celulose (externo) 25µ e papel aquablock (interno) 5µ.",
    areaFiltrante: "14959 cm²",
    equivalencias: [
      { marca: "PETROPURO", modelo: "SELCOM 100" },
      { marca: "PURODIESEL", modelo: "FM 100" },
      { marca: "ENGEMAI", modelo: "EC-5245" },
      { marca: "COMBOIO GASCOM", modelo: "SELCOM 100" },
      { marca: "ROMANELLI", modelo: "SELCOM 100" },
      { marca: "FILTROS BARRA", modelo: "BPA-1720" },
      { marca: "UNIFILTER", modelo: "UDCP100" },
    ],
    destaques: [
      "Alta eficiência na coalescência",
      "Protege equipamentos e sistemas",
      "Separação eficaz de água e impurezas",
      "Maior vida útil do combustível",
    ],
  },
  {
    slug: "elemento-coalescente-hidrofobico-nbf-10dl",
    name: "Elemento Coalescente Hidrofóbico NBF-10DL",
    category: "Elemento filtrante",
    img: nbf11,
    shortDescription:
      "Elemento filtrante de alta robustez para remoção de água e contaminantes.",
    destaques: ["Alta robustez", "Elevada eficiência"],
  },
  {
    slug: "elemento-coalescente-hidrofobico-nbf-08pf",
    name: "Elemento Coalescente Hidrofóbico NBF-08PF",
    category: "Elemento filtrante",
    img: nbf11,
    shortDescription:
      "Remoção eficiente de água líquida, aerossóis e partículas sólidas em combustíveis.",
    destaques: ["Alta performance", "Remove aerossóis"],
  },
  {
    slug: "elemento-coalescente-hidrofobico-nbf-07",
    name: "Elemento Coalescente Hidrofóbico NBF-07",
    category: "Elemento filtrante",
    img: nbf10pp,
    shortDescription:
      "Remoção de água líquida, aerossóis e partículas em sistemas de combustíveis e fluidos.",
    destaques: ["Alta eficiência"],
  },
  {
    slug: "elemento-coalescente-hidrofobico-nbf-4ms",
    name: "Elemento Coalescente Hidrofóbico NBF-4MS",
    category: "Elemento filtrante",
    img: nbf10pp,
    shortDescription:
      "Cartucho de alta eficiência para remoção de aerossóis líquidos, umidade e sólidos em ar comprimido e gases.",
    destaques: ["Ar comprimido e gases", "Alta eficiência"],
  },
  {
    slug: "nbf-3ms",
    name: "NBF-3MS",
    category: "Elemento filtrante",
    img: nbf3ms,
    shortDescription: "Elemento filtrante NBF-3MS para aplicações industriais de filtragem fina.",
    destaques: ["Filtragem fina industrial"],
  },
  {
    slug: "caixa-separadora-agua-oleo",
    name: "Caixa Separadora Água/Óleo",
    category: "Caixa separadora",
    img: turbo50v,
    shortDescription:
      "Caixa separadora desenvolvida para remover óleos e graxas de efluentes antes do descarte ou reuso.",
    longDescription:
      "Equipamento utilizado em postos de combustíveis, oficinas mecânicas, lava-rápidos e indústrias para separar água e óleo, atendendo às exigências ambientais vigentes.",
    aplicacao:
      "Postos de combustíveis, oficinas mecânicas, lava-rápidos e indústrias.",
    destaques: [
      "Atende normas ambientais",
      "Alta eficiência de separação",
      "Construção robusta",
    ],
  },
];

export const getProdutoBySlug = (slug: string) =>
  produtos.find((p) => p.slug === slug);
