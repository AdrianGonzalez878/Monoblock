export type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  image: string;
  alt: string;
};

export type CatalogGroup = {
  title: string;
  items: string[];
};

export const categories: ProductCategory[] = [
  {
    slug: "block-hueco",
    name: "Block hueco",
    summary: "12, 15 y 20 cm. Gris, color y ligero.",
    image: "/images/products/block.jpg",
    alt: "Block hueco de concreto fabricado en MONOBLOCK BLOQUERA, Oaxaca",
  },
  {
    slug: "block-solido",
    name: "Block sólido",
    summary: "Ligero y pesado, en varias medidas.",
    image: "/images/products/solido.jpg",
    alt: "Block sólido de concreto para construcción en Oaxaca",
  },
  {
    slug: "cara-piedra",
    name: "Block cara de piedra",
    summary: "15 y 20 cm. Gris y color.",
    image: "/images/products/cara-piedra.jpg",
    alt: "Block cara de piedra fabricado en MONOBLOCK BLOQUERA, Oaxaca",
  },
  {
    slug: "tabicon",
    name: "Tabicón pesado y ligero",
    summary: "10x14x28 cm. Pesado y ligero.",
    image: "/images/products/tabicon.jpg",
    alt: "Tabicón de concreto pesado y ligero fabricado en MONOBLOCK BLOQUERA, Oaxaca",
  },
  {
    slug: "adoquin",
    name: "Adoquines",
    summary: "Hexagonal, rectangular y tipo roca.",
    image: "/images/products/adoquin.jpg",
    alt: "Adoquín hexagonal de concreto para urbanización en Oaxaca",
  },
  {
    slug: "adopasto",
    name: "Adopasto",
    summary: "10x25x25 cm, gris y color.",
    image: "/images/products/adopasto.jpg",
    alt: "Adopasto de concreto gris y color fabricado en MONOBLOCK",
  },
  {
    slug: "bovedilla",
    name: "Bovedilla",
    summary: "Para losa y entrepiso.",
    image: "/images/products/bovedilla.jpg",
    alt: "Bovedilla de concreto fabricada en MONOBLOCK BLOQUERA, Oaxaca",
  },
];

export const catalog: CatalogGroup[] = [
  {
    title: "Adoquines",
    items: [
      "Hexagonal 6x20x23 cm — gris y color",
      "Hexagonal 6x24x27 cm — gris y color",
      "Hexagonal 8x20x23 cm — gris y color",
      "Hexagonal 8x24x27 cm — gris y color",
      "Rectangular 6x10x20 cm — gris y color",
      "Rectangular 9x10x60 cm — gris y color",
      "Tipo roca 6x12x22.5 cm — gris y color",
      "Adopasto 10x25x25 cm — gris y color",
    ],
  },
  {
    title: "Block y tabicón",
    items: [
      "Tabicón pesado y ligero 10x14x28 cm",
      "Block hueco 12x20x40 cm — gris, color y ligero",
      "Block hueco 15x20x40 cm — gris, color y ligero",
      "Block hueco 20x20x40 cm — gris, color y ligero",
      "Block sólido 12, 14, 15 y 20x20x40 cm",
      "Block sólido pesado en color",
      "Cara de piedra 15x20x40 cm — gris y color",
      "Cara de piedra 20x20x40 cm — gris y color",
    ],
  },
];

export const reasons = [
  {
    title: "Fabricación directa",
    text: "De planta a tu obra, sin intermediarios y con control de cada lote.",
  },
  {
    title: "Variedad de medidas",
    text: "Block, tabicón, adoquín y adopasto para distintos tipos de proyecto.",
  },
  {
    title: "Calidad uniforme",
    text: "Dosificación y procesos pensados para resistencia y consistencia.",
  },
  {
    title: "Entrega confiable",
    text: "Atención a obra particular y a pedidos de mayor volumen.",
  },
  {
    title: "Asesoría real",
    text: "Te ayudamos a elegir la pieza correcta según el uso y la carga.",
  },
  {
    title: "Empresa oaxaqueña",
    text: "Comprometidos con constructoras, desarrolladores y particulares de la región.",
  },
] as const;

export const gallery = [
  { src: "/images/gallery/01.jpg", alt: "Adoquín hexagonal de color en el patio de MONOBLOCK BLOQUERA, Oaxaca" },
  { src: "/images/gallery/02.jpg", alt: "Producción de block de concreto en planta de Oaxaca" },
  { src: "/images/gallery/03.jpg", alt: "Piezas de concreto en patio de la bloquera MONOBLOCK" },
  { src: "/images/gallery/04.jpg", alt: "Block hueco apilado listo para obra" },
  { src: "/images/gallery/05.jpg", alt: "Inventario de productos de concreto vibrocomprimidos en San Agustín Yatareni" },
  { src: "/images/gallery/06.jpg", alt: "Block de concreto listo para entrega a obra" },
  { src: "/images/gallery/07.jpg", alt: "Adoquines de concreto en proceso de curado" },
  { src: "/images/gallery/08.jpg", alt: "Patio de fabricación de MONOBLOCK BLOQUERA en Oaxaca" },
] as const;
