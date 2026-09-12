export const site = {
  name: "MONOBLOCK BLOQUERA",
  shortName: "MONOBLOCK",
  slogan: "Construye fuerte, construye seguro.",
  tagline: "Calidad en cada block.",
  qualityLine: "Calidad que se nota. Resistencia que perdura.",
  factoryLine: "Directo de fábrica a tu obra.",
  description:
    "Bloquera en San Agustín Yatareni, Oaxaca. Fabricamos productos de concreto vibrocomprimidos: block hueco y sólido, tabicón, adoquín y prefabricados. Directo de fábrica a tu obra.",
  seoTitle: "Bloquera en Oaxaca | Block, tabicón y adoquín | MONOBLOCK",
  url: "https://www.monoblockbloquera.com",
  phone: "951 471 6357",
  phoneHref: "tel:+529514716357",
  telephoneIntl: "+52-951-471-6357",
  whatsapp: "5219514716357",
  email: "monoblockbloquera@gmail.com",
  address: "Carretera a Guelatao km2, San Agustín Yatareni.\n(A un costado del motel W).",
  addressShort: "Carretera a Guelatao km2, San Agustín Yatareni.",
  streetAddress: "Carretera a Guelatao km2 (a un costado del motel W)",
  locality: "San Agustín Yatareni",
  region: "Oaxaca",
  postalCode: "68240",
  country: "MX",
  geo: {
    latitude: 17.0808,
    longitude: -96.6775,
  },
  mapsQuery: "Carretera a Guelatao km 2, San Agustín Yatareni, Oaxaca",
  locale: "es_MX",
  language: "es-MX",
  social: {
    facebook: "https://www.facebook.com/search/top?q=MONOBLOCK%20BLOQUERA",
    instagram: "https://www.instagram.com/monoblock.bloquera/",
    tiktok: "https://www.tiktok.com/@monoblock.bloquer",
  },
} as const;

export const faqs = [
  {
    question: "¿Dónde está la planta de MONOBLOCK BLOQUERA?",
    answer:
      "Estamos en Carretera a Guelatao km2, San Agustín Yatareni. (A un costado del motel W).",
  },
  {
    question: "¿Qué productos de concreto vibrocomprimidos fabrican?",
    answer:
      "Fabricamos productos de concreto vibrocomprimidos: block hueco y sólido, block cara de piedra, tabicón pesado y ligero, adoquín hexagonal, rectangular y tipo roca, adopasto, bovedilla y prefabricados, en gris y color.",
  },
  {
    question: "¿Atienden constructoras y particulares?",
    answer:
      "Sí. Atendemos obra particular y pedidos de mayor volumen para constructoras, desarrolladores, contratistas, arquitectos e ingenieros en Oaxaca.",
  },
  {
    question: "¿Cómo cotizo un pedido?",
    answer:
      "Escríbenos por WhatsApp o llama al 951 471 6357. Indica el producto, la medida y el volumen. Si requieres factura se agrega IVA.",
  },
] as const;

export const whatsappHref = (message?: string) => {
  const text = message ?? "Hola, quiero cotizar productos de MONOBLOCK BLOQUERA.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
};
