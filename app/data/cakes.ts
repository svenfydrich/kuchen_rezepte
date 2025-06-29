export interface Cake {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
}

export const cakes: Cake[] = [
  {
    id: "bananenbrot",
    name: "🍌 Bananenbrot",
    description: "Der ist definitiv am einfachsten zu machen. 👍",
    image: "/images/bananenbrot-card.jpg",
    ingredients: [
      "4 (sehr) reife Bananen",
      "200 Gramm Zucker",
      "150 Gramm Sonnenblumen Öl",
      "1 TL Vanilleextrakt",
      "100 Gramm Weizenmehl",
      "100 Gramm Dinkelmehl",
      "2 TL Backpulver",
      "1 TL Natron",
      "1/2 TL Salz",
      "1 TL Zimt",
      "1 TL Kardamom",
      "100 Gramm gehackte Schokolade",
    ],
    instructions: [
      "In einem Messbecher die Bananen mit dem Öl pürieren (alternativ zerstampfen und dann das Öl dazu geben und gut verrühren)",
      "Den Zucker und das Vanilleextrakt zu der Bananen-Öl-Mischung geben und alles verrühren.",
      "Die restlichen trockenen Zutaten, also Weizen- & Dinkelmehl, Backpulver, Natron, Salz, Zimt und Kardamom in einer Rührschüssel vermengen.",
      "Die Banane-Öl-Zucker-Mischung zu den trockenen Zutaten geben und mit einem Schneebesen verrühren (du brauchst hierzu wirklich kein Rührgerät).",
      "Zum Schluss die gehackte Schokolade unterheben.",
      "Den Teig in eine, mit Backpapier ausgelegte, Kastenform geben.",
      "Bei 180°C Ober- / Unterhitze für ca. 40 Minuten auf mittlerer Schiene backen. Dann mit Alufolie abdecken und weitere 20 Minuten backen.",
      "Das vegane Bananenbrot in der Kastenform abkühlen lassen.",
    ],
    prepTime: "20 Minuten",
    cookTime: "60 Minuten",
  },
  {
    id: "kaesekuchen",
    name: "🧀 KeinKäsekuchen",
    description: "Einfach 1 kg Alpro Vanillejoghurt hallo 😭",
    image: "/images/kaesekuchen-card.jpg",
    ingredients: [
      "250 Gramm Weizenmehl",
      "1 Päckchen Vanillezucker",
      "1 EL Backpuler",
      "50 ml Agavendicksaft",
      "100 Gramm Margarine (auf Zimmertemperatur)",
      "30 ml Pflanzenmilch (optional falls der Teig zu trocken ist)",
      "1 Kg Sojajoghurt (gerne mit Vanillegeschmack wenn du magst)",
      "2 Päckchen Vanillepudding-Pulver (je Packung ca. 40 Gramm)",
      "2 Päckchen Vanillezucker",
      "60 Gramm Zucker (je nach verwendetem Sojajoghurt reicht auch weniger Zucker)",
    ],
    instructions: [
      "Die trockenen Zutaten, also Mehl, Vanillezucker und Backpulver vermengen.",
      "Die nassen Zutaten, also Agavendicksaft, Margarine und Pflanzenmilch (optional falls der Teig zu trocken ist) zu den trockenen hinzugeben.",
      "Alles zu einem glatten Teig verkneten.",
      "Die Backform fetten oder den Boden mit Backpapier auslegen.",
      "Den Teig auf einer bemehlten Arbeitsfläche ausrollen und danach in die Form legen. Der Teig sollte so groß sein, dass du am Rand der Backform ca. 5cm Rand nach oben ziehen kannst.",
      "Den Boden mit einer Gabel an mehreren Stellen einstechen.",
      "Den Joghurt mit dem Vanillepudding-Pulver und dem Vanillezucker verrühren.",
      "Den Zucker dazu geben und ebenfalls unterrühren. Tipp: Wenn du gesüßten Sojajoghurt, zum Beispiel mit Vanillegeschmack, nimmst, reichen hier auch 50 Gramm Zucker.",
      "Die Füllung auf den Teig in der Backform geben.",
      "Den Kuchen bei 180°C Ober/-Unterhitze für 60 Minuten backen. Nach 30 Minuten mit Alufolie abdecken, damit der Rand nicht zu dunkel wird.",
      "Nach dem Backen gut auskühlen lassen. Der Kuchen ist eventuell noch etwas weich, wird aber fest, sobald er ganz kalt ist.",
      "Den gekühlten veganen Käsekuchen mit frischen Beeren servieren.",
    ],
    prepTime: "30 Minuten",
    cookTime: "60 Minuten",
  },
  {
    id: "karottenkuchen",
    name: "🥕 Karottenkuchen",
    description: "450 g Karotten geraspelt für das Teil 🙃",
    image: "/images/karottenkuchen-card.jpg",
    ingredients: [
      "450 Gramm Karotten (fein geraspelt)",
      "120 Gramm Zucker",
      "150 Gramm pflanzliches Öl",
      "200 Gramm Mehl",
      "200 Gramm gemahlene Nüsse (ich habe Haselnuss verwendet)",
      "1 Päckchen Backpulver",
      "1 Päckchen Vanillezucker",
      "2 TL gemahlener Zimt",
      "1 Messerspitze gemahlene Nelke",
      "100 ml pflanzliche Milch",
      "50 ml Wasser mit Kohlensäure",
    ],
    instructions: [
      "Die Karotten von Hand fein raspeln oder mit einer Küchenmaschine zerkleinern.",
      "Die trockenen Zutaten, also Zucker, Mehl, gemahlene Nüsse, Backpulver, Vanillezucker, Zimt und Nelken vermengen.",
      "Die Karotten-Raspel unter die trockenen Zutaten heben.",
      "Pflanzendrink, Mineralwasser und Öl zu den anderen Zutaten geben und alles gut verrühren.",
      "Den Teig in eine gefettete oder mit Backpapier ausgelegte Kuchenform geben.",
      "Bei 180°C Ober-/Unterhitze für ungefähr 45 Minuten backen.",
    ],
    prepTime: "30 Minuten",
    cookTime: "45 Minuten",
  },
];

export function getCakeById(id: string): Cake | undefined {
  return cakes.find((cake) => cake.id === id);
}
