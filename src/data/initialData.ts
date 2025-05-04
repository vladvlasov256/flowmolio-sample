export interface Product {
  name: string;
  short_description: string;
  style: string;
  price: string;
  image_url: string;
  description: string;
  material: string;
  care_instructions: string[];
}

export const initialProduct: Product = {
  name: "Berkely",
  short_description: "Top handle bag",
  style: "Style #42876 GRYSG 5090",
  price: "$895",
  image_url: "https://try.flowmol.io/images/examples/image2.png",
  description: "The Berkely handbag features a structured silhouette with a sophisticated flap closure and silver-tone turn lock. Crafted from premium suede and leather in a versatile grey tone, this elegant bag includes a top handle and detachable shoulder strap for multiple carrying options.",
  material: "Suede and leather combination with textile lining. Metal hardware with silver-tone finish.",
  care_instructions: [
    "Avoid exposure to moisture and direct sunlight",
    "Store in the provided dust bag when not in use",
    "Clean suede with a specialized suede brush",
    "Treat leather portions with appropriate leather conditioner"
  ]
};

export const imageOptions = [
  { value: "https://try.flowmol.io/images/examples/image1.png", label: "Product Image 1" },
  { value: "https://try.flowmol.io/images/examples/image2.png", label: "Product Image 2" },
  { value: "https://try.flowmol.io/images/examples/image3.png", label: "Product Image 3" },
  { value: "https://try.flowmol.io/images/examples/image4.png", label: "Product Image 4" },
];