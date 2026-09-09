export const site = {
  name: "MONOBLOCK BLOQUERA",
  slogan: "Construye fuerte, construye seguro.",
  tagline: "Calidad en cada block.",
  qualityLine: "Calidad que se nota. Resistencia que perdura.",
  factoryLine: "Directo de fábrica a tu obra.",
  description:
    "Fabricación y comercialización de productos de concreto para la construcción en Oaxaca. Block, tabicón, adoquín y prefabricados de alta resistencia.",
  phone: "951 471 6357",
  phoneHref: "tel:+529514716357",
  whatsapp: "5219514716357",
  email: "monoblockbloquera@gmail.com",
  address: "Carretera a Guelatao km 2, antiguo camino a Tlalixtac, a un costado del Motel W, San Agustín Yatareni, Oaxaca.",
  addressShort: "Carretera a Guelatao km 2, San Agustín Yatareni, Oaxaca",
  mapsQuery: "Carretera a Guelatao km 2, San Agustín Yatareni, Oaxaca",
  leadTime: "12 a 15 días hábiles",
  social: {
    facebook: "https://www.facebook.com/search/top?q=MONOBLOCK%20BLOQUERA",
    instagram: "https://www.instagram.com/monoblock.bloquera/",
    tiktok: "https://www.tiktok.com/@monoblock.bloquer",
  },
} as const;

export const whatsappHref = (message?: string) => {
  const text = message ?? "Hola, quiero cotizar productos de MONOBLOCK BLOQUERA.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
};
