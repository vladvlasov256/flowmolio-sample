export interface Product {
  name: string;
  short_description: string;
  style: string;
  price: string;
  image_url: string;
  description: string;
  material: string;
}

export const initialProduct: Product = {
  name: "Berkely",
  short_description: "Top handle bag",
  style: "Style #42876 GRYSG 5090",
  price: "$895",
  image_url: "https://try.flowmol.io/images/image1.png",
  description: "The Berkely handbag features a structured silhouette with a sophisticated flap closure and silver-tone turn lock. Crafted from premium suede and leather in a versatile grey tone, this elegant bag includes a top handle and detachable shoulder strap for multiple carrying options.",
  material: "Suede and leather combination with textile lining. Metal hardware with silver-tone finish.\n- Avoid exposure to moisture and direct sunlight\n- Store in the provided dust bag when not in use\n- Clean suede with a specialized suede brush\n- Treat leather portions with appropriate leather conditioner"
};

export const imageOptions = [
  { value: "https://try.flowmol.io/images/image1.png", label: "Product Image 1" },
  { value: "https://try.flowmol.io/images/image2.png", label: "Product Image 2" },
  { value: "https://try.flowmol.io/images/image3.png", label: "Product Image 3" },
  { value: "https://try.flowmol.io/images/image4.png", label: "Product Image 4" },
];