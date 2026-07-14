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
import sao57 from "@/assets/nb/produtos/sao/sao-57.jpg.asset.json";
import sao58 from "@/assets/nb/produtos/sao/sao-58.jpg.asset.json";
import sao59 from "@/assets/nb/produtos/sao/sao-59.jpg.asset.json";
import sao60 from "@/assets/nb/produtos/sao/sao-60.jpg.asset.json";
import sao61 from "@/assets/nb/produtos/sao/sao-61.jpg.asset.json";
import sao62 from "@/assets/nb/produtos/sao/sao-62.jpg.asset.json";
import sao63 from "@/assets/nb/produtos/sao/sao-63.jpg.asset.json";
import sao64 from "@/assets/nb/produtos/sao/sao-64.jpg.asset.json";
import sao65 from "@/assets/nb/produtos/sao/sao-65.jpg.asset.json";
import sao66 from "@/assets/nb/produtos/sao/sao-66.jpg.asset.json";
import sao67 from "@/assets/nb/produtos/sao/sao-67.jpg.asset.json";
import sao68 from "@/assets/nb/produtos/sao/sao-68.jpg.asset.json";
import sao69 from "@/assets/nb/produtos/sao/sao-69.jpg.asset.json";
import sao71 from "@/assets/nb/produtos/sao/sao-71.jpg.asset.json";
import sao72 from "@/assets/nb/produtos/sao/sao-72.jpg.asset.json";
import sao73 from "@/assets/nb/produtos/sao/sao-73.jpg.asset.json";
import sao74 from "@/assets/nb/produtos/sao/sao-74.jpg.asset.json";
import sao75 from "@/assets/nb/produtos/sao/sao-75.jpg.asset.json";
import sao76 from "@/assets/nb/produtos/sao/sao-76.jpg.asset.json";
import sao77 from "@/assets/nb/produtos/sao/sao-77.jpg.asset.json";
import sao78 from "@/assets/nb/produtos/sao/sao-78.jpg.asset.json";
import sao79 from "@/assets/nb/produtos/sao/sao-79.jpg.asset.json";
import sao80 from "@/assets/nb/produtos/sao/sao-80.jpg.asset.json";
import sao81 from "@/assets/nb/produtos/sao/sao-81.jpg.asset.json";
import sao82 from "@/assets/nb/produtos/sao/sao-82.jpg.asset.json";
import sao83 from "@/assets/nb/produtos/sao/sao-83.jpg.asset.json";
import sao84 from "@/assets/nb/produtos/sao/sao-84.jpg.asset.json";
import saoNewCover from "@/assets/nb/produtos/sao/sao-new-cover.png.asset.json";
import saoNewInterno1 from "@/assets/nb/produtos/sao/sao-new-interno-1.png.asset.json";
import saoNewInterno2 from "@/assets/nb/produtos/sao/sao-new-interno-2.png.asset.json";
import saoNewAberta from "@/assets/nb/produtos/sao/sao-new-aberta.png.asset.json";
import saoNewManual from "@/assets/nb/produtos/sao/sao-new-manual.png.asset.json";

export type Categoria = "Elemento filtrante" | "Filtro" | "Caixa separadora";

export interface Equivalencia {
  marca: string;
  modelo: string;
}

export interface Secao {
  title: string;
  text?: string;
  items?: string[];
}

export interface Produto {
  slug: string;
  name: string;
  category: Categoria;
  img: string;
  gallery?: string[];
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
  secoes?: Secao[];
  videoUrl?: string;
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
    name: "Caixa Separadora de Água e Óleo S.A.O. 1500",
    category: "Caixa separadora",
    img: saoNewCover.url,
    gallery: [
      saoNewCover.url, saoNewAberta.url, saoNewInterno1.url, saoNewInterno2.url, saoNewManual.url,
      caixaSaoHero,
      sao57.url, sao58.url, sao59.url, sao60.url, sao61.url, sao62.url,
      sao63.url, sao64.url, sao65.url, sao66.url, sao67.url, sao68.url,
      sao69.url, sao71.url, sao72.url, sao73.url, sao74.url, sao75.url,
      sao76.url, sao77.url, sao78.url, sao79.url, sao80.url, sao81.url,
      sao82.url, sao83.url, sao84.url,
      caixaSaoInterno, caixaSaoProduto,
    ],
    shortDescription:
      "Equipamento ecologicamente correto para separação de água e óleo em postos, oficinas, indústrias e lava-rápidos — vazão até 1.500 L/h.",
    longDescription:
      "A Caixa Separadora de Água e Óleo New Borges Ambiental S.A.O. 1500 é indicada para locais que geram efluentes oleosos, como postos de abastecimento, oficinas mecânicas, lavadores, indústrias, fazendas e transportadoras. Produzida em polietileno de alta densidade pelo processo de rotomoldagem, confere ao produto alta resistência, estanqueidade e impermeabilidade, atendendo aos parâmetros da NBR 14.605-2:2010 — Sistema de drenagem oleosa.",
    vazao: "Até 1.500 L/h",
    aplicacao:
      "Postos de abastecimento, oficinas mecânicas, lavadores, indústrias, fazendas e transportadoras.",
    dimensional: [
      "Entrada e saída: Ø 50 mm",
      "Com tampa: 845 × 560 × 690 mm (C × L × A)",
      "Sem tampa: 815 × 552 × 655 mm (C × L × A)",
    ],
    construcao:
      "Polietileno de alta densidade pelo processo de rotomoldagem — alta resistência, estanqueidade e impermeabilidade.",
    destaques: [
      "Vazão de até 1.500 L/h",
      "Atende a NBR 14.605-2:2010",
      "Equipamento ecologicamente correto",
      "Placas coalescentes laváveis (reutilizáveis)",
      "Skimmer ajustável para coleta de óleo",
      "Cesto coletor para retenção de detritos",
    ],
    secoes: [
      {
        title: "Componentes",
        items: [
          "01 Cesto coletor — sistema de gradeamento",
          "01 Dupla camada de placas coalescentes laváveis — retenção de óleo",
          "01 Skimmer ajustável — coleta de óleo",
          "01 Reservatório de óleo",
          "Entrada e saída em Ø 50 mm",
          "Parafusos e porcas de plástico (trava divisória da entrada)",
        ],
      },
      {
        title: "Funcionamento",
        text: "A caixa separadora limita o lançamento de efluentes contaminados com óleos e graxas na rede de esgoto, dentro dos padrões exigidos pela NBR 14.605. O processo é totalmente físico e ocorre em quatro etapas:",
        items: [
          "Gradeamento — retém partículas maiores (gravetos, folhas, bituca de cigarro).",
          "Coalescência — dupla camada de placas coalescentes separa o óleo da água.",
          "Coleta do óleo — skimmer ajustável drena o óleo separado para o reservatório.",
          "Saída — efluente livre de sólidos e óleo, dentro dos padrões exigidos.",
        ],
      },
      {
        title: "Instalação",
        text: "O dimensionamento e a instalação devem seguir a NBR 14.605-2:2010. A S.A.O. deve receber toda a água contaminada pelas canaletas do piso e não deve receber águas pluviais. É instalada em vala com berço de alvenaria, nivelada pelo centro, com inclinação mínima de 2% no tubo de entrada. Antes de liberar o funcionamento, encher a caixa com água limpa até o nível máximo.",
      },
      {
        title: "Manutenção e limpeza",
        text: "Drenagem periódica do óleo pelo skimmer e retirada dos detritos do cesto coletor. A limpeza completa envolve retirar as placas coalescentes, lavá-las com água limpa e reinstalar. A periodicidade depende do volume de contaminantes — iniciar mensalmente e ajustar conforme a operação.",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/v9Rza5JpViI",
  },
];

export const getProdutoBySlug = (slug: string) =>
  produtos.find((p) => p.slug === slug);
