// Flat list of all products. Each product belongs to a category (`category` field).
// export const PRODUCTS = [
//   // ---- Stand-Up Pouches ----


// Helpers

export const PRODUCTS = [
  // ---- Printed Rolls ----
  {
    num: 1,
    id: "snack-printed-roll",
    category: "printed-rolls",
    name: "Snack Printed Roll",
    type: "Printed Roll · Snacks",
    short: "Rotogravure printed multi-layer rolls for FFS snack lines.",
    description: "High-resolution rotogravure printed multi-layer rolls for FFS snack lines.",
    image: "https://images.unsplash.com/photo-1607082352121-fa243f3dde32?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1607082352121-fa243f3dde32?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Snacks",
    material: "BOPP / PE",
    features: ["High Barrier", "Multi-layer", "Food Safe"],
    finishes: ["Gloss Finish"],
    specs: {
      Material: "BOPP / PE",
      Reel_Width: "60 mm – 1000 mm",
      Reel_Diameter: "Up to 600 mm",
      Print_Colours: "Up to 10",
      Core: "3 inch / 6 inch",
      Treatment: "Corona treated",
      Finish: "Glossy",
      MOQ: "Custom",
    },
    applications: ["Snacks", "Wafers", "Chips"],
  },
  {
    num: 2,
    id: "confectionery-printed-roll",
    category: "printed-rolls",
    name: "Confectionery Printed Roll",
    type: "Printed Roll · Confectionery",
    short: "High-speed confectionery wrappers with vibrant rotogravure print.",
    description: "Premium confectionery wrappers for high-speed wrapping lines.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Confectionery",
    material: "BOPP / PE",
    features: ["High Speed", "Food Safe", "Custom Print"],
    finishes: ["Gloss Finish"],
    specs: {
      Material: "BOPP / PE",
      Reel_Width: "40 mm – 600 mm",
      Print_Colours: "Up to 8",
      Core: "3 inch",
      Finish: "Glossy",
      MOQ: "Custom",
    },
    applications: ["Confectionery", "Chocolates", "Toffees"],
  },
  {
    num: 3,
    id: "sachet-printed-roll",
    category: "printed-rolls",
    name: "Sachet Printed Roll",
    type: "Printed Roll · Sachets",
    short: "High-barrier rolls for sachet packing — shampoo, sauces, masala.",
    description: "Narrow-width high-barrier rolls for sachet packing machines.",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Sachets",
    material: "PET / PE",
    features: ["High Barrier", "Narrow Web", "Food Safe"],
    finishes: ["Matte Finish"],
    specs: {
      Material: "PET / PE",
      Reel_Width: "40 mm – 300 mm",
      Print_Colours: "Up to 8",
      Core: "3 inch",
      Finish: "Matte",
      MOQ: "Custom",
    },
    applications: ["Shampoo", "Sauces", "Masala", "Salt"],
  },

  {
    num: 4,
    id: "snack-printed-roll",
    category: "printed-rolls",
    name: "Snack Printed Roll",
    type: "Printed Roll · Snacks",
    short: "Rotogravure printed multi-layer rolls for FFS snack lines.",
    description: "High-resolution rotogravure printed multi-layer rolls for FFS snack lines.",
    image: "https://images.unsplash.com/photo-1607082352121-fa243f3dde32?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1607082352121-fa243f3dde32?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Snacks",
    material: "BOPP / PE",
    features: ["High Barrier", "Multi-layer", "Food Safe"],
    finishes: ["Gloss Finish"],
    specs: {
      Material: "BOPP / PE",
      Reel_Width: "60 mm – 1000 mm",
      Reel_Diameter: "Up to 600 mm",
      Print_Colours: "Up to 10",
      Core: "3 inch / 6 inch",
      Treatment: "Corona treated",
      Finish: "Glossy",
      MOQ: "Custom",
    },
    applications: ["Snacks", "Wafers", "Chips"],
  },
  {
    num: 5,
    id: "rotogravure-printed-roll",
    category: "printed-rolls",
    name: "Rotogravure Printed Roll",
    type: "Printed Roll · Flexible Packaging",
    short: "High-quality printed film rolls for automatic packaging machines.",
    description:
      "Custom rotogravure printed laminate rolls designed for high-speed packaging lines, delivering sharp graphics and reliable sealing performance.",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Food Packaging",
    material: "PET / MET PET / PE",
    features: [
      "High-Quality Printing",
      "Moisture Protection",
      "Heat Sealable",
      "Custom Lamination",
      "Multiple Film Structures",
      "Custom Roll Dimensions"
    ],
    finishes: ["Gloss Finish", "Matte Finish"],
    specs: {
      Material: "PET / BOPP / PE / MET PET",
      Thickness: "Custom",
      Printing: "Rotogravure",
      Colors: "Up to 10 Colors, Subject to Specification",
      Roll_Type: "Printed Laminate Roll",
      Finish: "Glossy / Matte",
      Seal_Type: "Heat Seal, Depending on Structure",
      MOQ: "Custom"
    },
    applications: [
      "Snacks",
      "Biscuits",
      "Chips",
      "Spices",
      "Tea",
      "Coffee"
    ]
  },
  {
    num: 6,
    id: "aluminium-foil-laminated-roll",
    category: "printed-rolls",
    name: "Aluminium Foil Laminated Roll",
    type: "Printed Roll · High Barrier",
    short: "Barrier packaging film for products requiring additional protection.",
    description:
      "Laminated packaging rolls incorporating aluminium foil for applications requiring protection against moisture, light and oxygen.",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "High-Barrier Packaging",
    material: "PET / Aluminium Foil / PE",
    features: [
      "Light Barrier",
      "Moisture Barrier",
      "Oxygen Barrier Options",
      "Custom Printing",
      "Heat Sealable Options",
      "Custom Roll Width"
    ],
    finishes: ["Gloss Finish", "Matte Finish"],
    specs: {
      Material: "PET / AL Foil / PE",
      Thickness: "Custom",
      Printing: "Rotogravure / Flexographic, Subject to Specification",
      Colors: "Custom",
      Roll_Type: "Foil Laminated Roll",
      Finish: "Glossy / Matte",
      Seal_Type: "Heat Seal, Depending on Structure",
      MOQ: "Custom"
    },
    applications: [
      "Coffee",
      "Spices",
      "Pharmaceutical Packaging",
      "Food Ingredients",
      "Nutritional Products",
      "Industrial Products"
    ]
  },

  // ---- Pouches ----
  {
    num: 7,
    id: "coffee-stand-up-pouch",
    category: "pouches",
    name: "Coffee Stand-Up Pouch",
    type: "Stand-Up Pouch · Coffee",
    short: "Premium stand-up pouch for coffee packaging with excellent barrier protection.",
    description:
      "Premium stand-up pouch for coffee packaging with excellent barrier protection. Engineered to preserve freshness, aroma and shelf life.",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Coffee",
    material: "PET / MET PET / PE",
    features: ["High Barrier", "Moisture Resistant", "Oxygen Barrier", "Puncture Resistant", "Leak Proof", "Food Safe"],
    finishes: ["Matte Finish"],
    specs: {
      Material: "PET / MET PET / PE",
      Thickness: "80–120 Microns",
      Printing: "Rotogravure",
      Colors: "Up to 10 Colors",
      Pouch_Type: "Stand-Up",
      Finish: "Glossy / Matte",
      Seal_Type: "Heat Seal",
      MOQ: "Custom",
    },
    applications: ["Coffee", "Tea", "Dry Fruits", "Snacks", "Masala", "Pharma"],
  },
  {
    num: 8,
    id: "tea-stand-up-pouch",
    category: "pouches",
    name: "Tea Stand-Up Pouch",
    type: "Stand-Up Pouch · Tea",
    short: "Aroma-locked stand-up pouches for premium tea blends.",
    description: "Aroma-locked stand-up pouches engineered for premium tea blends, preserving fragrance and color.",
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Tea",
    material: "BOPP / PE",
    features: ["High Barrier", "Aroma Lock", "Custom Print", "Food Safe"],
    finishes: ["Gloss Finish"],
    specs: {
      Material: "BOPP / PE",
      Thickness: "70–100 Microns",
      Printing: "Rotogravure",
      Colors: "Up to 9 Colors",
      Pouch_Type: "Stand-Up",
      Finish: "Glossy",
      Seal_Type: "Heat Seal",
      MOQ: "Custom",
    },
    applications: ["Tea", "Herbs", "Coffee"],
  },
  {
    num: 9,
    id: "dry-fruits-stand-up-pouch",
    category: "pouches",
    name: "Dry Fruits Stand-Up Pouch",
    type: "Stand-Up Pouch · Dry Fruits",
    short: "High-clarity window pouches for premium dry fruits packaging.",
    description: "High-clarity window pouches with zip lock for premium dry fruits and nuts.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Dry Fruits",
    material: "PET / PE",
    features: ["Window", "Zip Lock", "Moisture Resistant", "Food Safe"],
    finishes: ["Gloss Finish"],
    specs: {
      Material: "PET / PE",
      Thickness: "90–130 Microns",
      Printing: "Rotogravure",
      Colors: "Up to 8 Colors",
      Pouch_Type: "Stand-Up",
      Finish: "Glossy",
      Seal_Type: "Heat Seal + Zipper",
      MOQ: "Custom",
    },
    applications: ["Dry Fruits", "Nuts", "Snacks"],
  },
  {
    num: 10,
    id: "snacks-stand-up-pouch",
    category: "pouches",
    name: "Snacks Stand-Up Pouch",
    type: "Stand-Up Pouch · Snacks",
    short: "High-volume snack stand-up pouches with shelf-ready aesthetics.",
    description: "Vibrant, high-volume snack pouches optimised for retail shelf presence.",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Snacks",
    material: "BOPP / PE",
    features: ["High Barrier", "Custom Print", "Food Safe"],
    finishes: ["Gloss Finish", "Matte Finish"],
    specs: {
      Material: "BOPP / PE",
      Thickness: "60–100 Microns",
      Printing: "Rotogravure",
      Colors: "Up to 10 Colors",
      Pouch_Type: "Stand-Up",
      Finish: "Glossy / Matte",
      Seal_Type: "Heat Seal",
      MOQ: "Custom",
    },
    applications: ["Snacks", "Wafers", "Chips"],
  },
  {
    num: 11,
    id: "pet-food-stand-up-pouch",
    category: "pouches",
    name: "Pet Food Stand-Up Pouch",
    type: "Stand-Up Pouch · Pet Food",
    short: "Heavy-duty pet food pouches with high-barrier protection.",
    description: "Heavy-duty stand-up pouches with high-barrier laminates engineered for pet food and treats.",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Pet Food",
    material: "PET / MET PET / PE",
    features: ["High Barrier", "Puncture Resistant", "Food Safe", "Zip Lock"],
    finishes: ["Matte Finish"],
    specs: {
      Material: "PET / MET PET / PE",
      Thickness: "120–180 Microns",
      Printing: "Rotogravure",
      Colors: "Up to 8 Colors",
      Pouch_Type: "Stand-Up",
      Finish: "Matte",
      Seal_Type: "Heat Seal + Zipper",
      MOQ: "Custom",
    },
    applications: ["Pet Food", "Treats"],
  },
  {
    num: 12,
    id: "pharma-stand-up-pouch",
    category: "pouches",
    name: "Pharma Stand-Up Pouch",
    type: "Stand-Up Pouch · Pharma",
    short: "Tamper-evident pharma pouches with high-barrier laminate.",
    description: "Pharma-grade stand-up pouches with tamper-evident features and high-barrier laminates.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Pharma",
    material: "Kraft",
    features: ["High Barrier", "Tamper Evident", "Food Safe"],
    finishes: ["Matte Finish"],
    specs: {
      Material: "Kraft Laminate",
      Thickness: "100–140 Microns",
      Printing: "Rotogravure",
      Colors: "Up to 6 Colors",
      Pouch_Type: "Stand-Up",
      Finish: "Matte",
      Seal_Type: "Heat Seal",
      MOQ: "Custom",
    },
    applications: ["Pharma", "Nutraceuticals"],
  },


  {
    num: 13,
    id: "wafer-center-seal-pouch",
    category: "pouches",
    name: "Wafer Center Seal Pouch",
    type: "Center Seal Pouch · Wafers",
    short: "Pillow style center seal pouches for high-speed wafer lines.",
    description: "Economical pillow-style center seal pouches for wafer and biscuit lines.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Wafers",
    material: "BOPP / PE",
    features: ["High Speed Sealing", "Moisture Resistant"],
    finishes: ["Gloss Finish"],
    specs: {
      Material: "BOPP / PE",
      Thickness: "40 – 120 microns",
      Width: "40 – 250 mm",
      Printing: "Rotogravure",
      Seal: "Center back seal",
      MOQ: "Custom",
    },
    applications: ["Wafers", "Biscuits"],
  },
  {
    num: 14,
    id: "chocolate-center-seal-pouch",
    category: "pouches",
    name: "Chocolate Center Seal Pouch",
    type: "Center Seal Pouch · Chocolate",
    short: "Premium chocolate wrappers with vibrant print and seal integrity.",
    description: "Premium center seal pouches engineered for chocolate brands.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Chocolate",
    material: "PET / PE",
    features: ["High Barrier", "Premium Print"],
    finishes: ["Matte Finish"],
    specs: {
      Material: "PET / PE",
      Thickness: "60 – 100 microns",
      Printing: "Rotogravure",
      Seal: "Center back seal",
      MOQ: "Custom",
    },
    applications: ["Chocolate", "Confectionery"],
  },
  {
    num: 15,
    id: "namkeen-center-seal-pouch",
    category: "pouches",
    name: "Namkeen Center Seal Pouch",
    type: "Center Seal Pouch · Namkeen",
    short: "High-volume namkeen pouches with crisp print and strong seals.",
    description: "Crisp printed center seal pouches for namkeen and savoury snacks.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Namkeen",
    material: "BOPP / PE",
    features: ["High Barrier", "Custom Print"],
    finishes: ["Gloss Finish"],
    specs: {
      Material: "BOPP / PE",
      Thickness: "40 – 100 microns",
      Printing: "Rotogravure",
      Seal: "Center back seal",
      MOQ: "Custom",
    },
    applications: ["Namkeen", "Snacks"],
  },
  {
    num: 16,
    id: "shampoo-three-side-seal",
    category: "pouches",
    name: "Shampoo Sachet Pouch",
    type: "Three Side Seal · Shampoo",
    short: "High-barrier three side seal sachets for shampoo and gels.",
    description: "Three-side seal sachets engineered for shampoo, conditioner and personal care liquids.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Personal Care",
    material: "PET / PE",
    features: ["Leak Proof", "Tamper Evident"],
    finishes: ["Gloss Finish"],
    specs: {
      Material: "PET / PE",
      Thickness: "50 – 100 microns",
      Printing: "Rotogravure",
      Seal: "Three side heat seal",
      MOQ: "Custom",
    },
    applications: ["Shampoo", "Conditioner", "Gels"],
  },
  {
    num: 17,
    id: "sauce-three-side-seal",
    category: "pouches",
    name: "Sauce Sachet Pouch",
    type: "Three Side Seal · Sauce",
    short: "Food-safe sauce sachets with leak-proof seals.",
    description: "Food-safe sauce sachets with tamper-evident leak-proof seals for QSR and retail.",
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Food",
    material: "PET / PE",
    features: ["Leak Proof", "Food Safe", "High Barrier"],
    finishes: ["Gloss Finish"],
    specs: {
      Material: "PET / Al / PE",
      Thickness: "60 – 120 microns",
      Printing: "Rotogravure",
      Seal: "Three side heat seal",
      MOQ: "Custom",
    },
    applications: ["Ketchup", "Sauces", "Chutney"],
  },
  {
    num: 18,
    id: "pharma-three-side-seal",
    category: "pouches",
    name: "Pharma Strip Pouch",
    type: "Three Side Seal · Pharma",
    short: "Tamper-evident pharma strip pouches with foil barrier.",
    description: "Tamper-evident pharma strip pouches with high-barrier foil laminate.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Pharma",
    material: "PET / MET PET / PE",
    features: ["High Barrier", "Tamper Evident", "Sterile Grade"],
    finishes: ["Matte Finish"],
    specs: {
      Material: "PET / Al / PE",
      Thickness: "60 – 100 microns",
      Printing: "Rotogravure",
      Seal: "Three side heat seal",
      MOQ: "Custom",
    },
    applications: ["Pharma", "Nutraceuticals", "Samples"],
  },
  {
    num: 19,
    id: "juice-spout-pouch",
    category: "pouches",
    name: "Juice Spout Pouch",
    type: "Spout Pouch · Juice",
    short: "Stand-up spout pouches for juices, beverages and liquids.",
    description: "Premium stand-up spout pouches for juices, smoothies and beverages.",
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Beverages",
    material: "PET / PE",
    features: ["Leak Proof", "Re-closable", "Premium Look"],
    finishes: ["Gloss Finish"],
    specs: {
      Material: "PET / NYLON / PE",
      Capacity: "50 ml – 2000 ml",
      Spout: "Side / Corner / Top",
      Thickness: "120 – 200 microns",
      MOQ: "Custom",
    },
    applications: ["Juice", "Smoothie", "Beverages"],
  },
  {
    num: 20,
    id: "soap-spout-pouch",
    category: "pouches",
    name: "Liquid Soap Spout Pouch",
    type: "Spout Pouch · Liquid Soap",
    short: "Refill spout pouches for liquid soap, handwash and detergents.",
    description: "Eco-friendly refill spout pouches for handwash, liquid soap and detergents.",
    image: "https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Personal Care",
    material: "PET / PE",
    features: ["Leak Proof", "Re-closable", "Eco Refill"],
    finishes: ["Matte Finish"],
    specs: {
      Material: "PET / NYLON / PE",
      Capacity: "200 ml – 1000 ml",
      Spout: "Corner",
      Thickness: "120 – 180 microns",
      MOQ: "Custom",
    },
    applications: ["Handwash", "Liquid Soap", "Detergent"],
  },
  {
    num: 21,
    id: "sanitizer-spout-pouch",
    category: "pouches",
    name: "Sanitizer Spout Pouch",
    type: "Spout Pouch · Sanitizer",
    short: "Spout pouches engineered for sanitizers and alcohol-based liquids.",
    description: "Spout pouches engineered with alcohol-resistant laminates.",
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Personal Care",
    material: "PET / MET PET / PE",
    features: ["Leak Proof", "Alcohol Resistant", "High Barrier"],
    finishes: ["Gloss Finish"],
    specs: {
      Material: "PET / NYLON / PE",
      Capacity: "100 ml – 500 ml",
      Spout: "Top",
      Thickness: "140 – 200 microns",
      MOQ: "Custom",
    },
    applications: ["Sanitizer", "Alcohol Liquids"],
  },
  {
    num: 22,
    id: "coffee-zip-lock-pouch",
    category: "pouches",
    name: "Coffee Zip Lock Pouch",
    type: "Zip Lock Pouch · Coffee",
    short: "Reusable zip lock pouches for premium coffee brands.",
    description: "Premium re-closable zip lock pouches engineered for coffee freshness.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Coffee",
    material: "PET / PE",
    features: ["Zip Lock", "High Barrier", "Premium Print"],
    finishes: ["Matte Finish"],
    specs: {
      Material: "PET / MET PET / PE",
      Thickness: "80 – 180 microns",
      Printing: "Rotogravure",
      Zipper: "Press-to-close",
      MOQ: "Custom",
    },
    applications: ["Coffee", "Tea"],
  },
  {
    num: 23,
    id: "dryfruit-zip-lock-pouch",
    category: "pouches",
    name: "Dry Fruit Zip Lock Pouch",
    type: "Zip Lock Pouch · Dry Fruits",
    short: "Window zip lock pouches for dry fruits and nuts.",
    description: "High-clarity window pouches with zip lock for premium dry fruits and nuts.",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Dry Fruits",
    material: "PET / PE",
    features: ["Zip Lock", "Window", "Moisture Resistant"],
    finishes: ["Gloss Finish"],
    specs: {
      Material: "PET / PE",
      Thickness: "90 – 140 microns",
      Printing: "Rotogravure",
      Zipper: "Press-to-close",
      MOQ: "Custom",
    },
    applications: ["Dry Fruits", "Nuts"],
  },
  {
    num: 24,
    id: "frozen-zip-lock-pouch",
    category: "pouches",
    name: "Frozen Food Zip Lock Pouch",
    type: "Zip Lock Pouch · Frozen Food",
    short: "Freeze-resistant zip lock pouches for frozen food retail.",
    description: "Freeze-resistant zip lock pouches engineered for frozen food retail.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1600",
    ],
    application: "Frozen Food",
    material: "PET / PE",
    features: ["Zip Lock", "Freeze Resistant", "Food Safe"],
    finishes: ["Matte Finish"],
    specs: {
      Material: "PET / PE",
      Thickness: "100 – 160 microns",
      Printing: "Rotogravure",
      Zipper: "Slider",
      MOQ: "Custom",
    },
    applications: ["Frozen Food", "Seafood"],
  },
  {
    num: 25,
    id: "coffee-stand-up-pouch",
    category: "pouches",
    name: "Coffee Stand-Up Pouch",
    type: "Stand-Up Pouch · Coffee",
    short: "Premium stand-up pouch for coffee packaging with barrier protection.",
    description:
      "Custom stand-up coffee pouch designed to protect aroma and freshness. Optional zipper, tear notch and degassing valve can be specified.",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Coffee",
    material: "PET / MET PET / PE",
    features: [
      "High Barrier Options",
      "Moisture Resistant",
      "Aroma Protection",
      "Resealable Zipper Option",
      "Custom Printing",
      "Optional Degassing Valve"
    ],
    finishes: ["Matte Finish", "Gloss Finish", "Soft Touch, Subject to Availability"],
    specs: {
      Material: "PET / MET PET / PE",
      Thickness: "80–120 Microns, Depending on Requirements",
      Printing: "Rotogravure / Digital, Subject to Availability",
      Colors: "Custom",
      Pouch_Type: "Stand-Up",
      Finish: "Glossy / Matte",
      Seal_Type: "Heat Seal",
      MOQ: "Custom"
    },
    applications: [
      "Coffee",
      "Tea",
      "Dry Fruits",
      "Snacks",
      "Masala"
    ]
  },
  {
    num: 26,
    id: "three-side-seal-sachet",
    category: "pouches",
    name: "Three-Side Seal Sachet",
    type: "Sachet · Three-Side Seal",
    short: "Compact sealed sachets for single-use and sample packaging.",
    description:
      "Three-side seal sachets designed for small product quantities, promotional samples and single-use packaging formats.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Single-Use Packaging",
    material: "PET / PE or Custom Laminate",
    features: [
      "Compact Packaging",
      "Custom Dimensions",
      "Custom Printing",
      "Heat-Sealed Edges",
      "Barrier Material Options",
      "Easy-Open Options"
    ],
    finishes: ["Gloss Finish", "Matte Finish"],
    specs: {
      Material: "PET / PE / Laminated Film",
      Thickness: "Custom",
      Printing: "Rotogravure / Flexographic, Subject to Specification",
      Colors: "Custom",
      Pouch_Type: "Three-Side Seal",
      Finish: "Glossy / Matte",
      Seal_Type: "Heat Seal",
      MOQ: "Custom"
    },
    applications: [
      "Shampoo",
      "Sauces",
      "Spices",
      "Cosmetics",
      "Personal Care",
      "Sample Products"
    ]
  },

  // ---- Woven Bags ----
  {
    num: 27,
    id: "pp-woven-rice-bag",
    category: "woven-bags",
    name: "PP Woven Rice Bag",
    type: "Woven Bag · Agriculture",
    short: "Durable polypropylene woven bags for grain and rice packaging.",
    description:
      "Woven polypropylene bags manufactured for bulk agricultural packaging, with customizable dimensions, weight capacity and printing.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Rice and Grains",
    material: "Polypropylene (PP)",
    features: [
      "Strong Woven Fabric",
      "Custom Printing",
      "Multiple Capacity Options",
      "Lamination Option",
      "Custom Dimensions",
      "Suitable for Bulk Packaging"
    ],
    finishes: ["Unlaminated", "Laminated", "BOPP Laminated"],
    specs: {
      Material: "Polypropylene (PP)",
      Thickness: "Fabric GSM as Required",
      Printing: "Flexographic / BOPP Printed Options",
      Colors: "Custom",
      Bag_Type: "Woven Sack",
      Finish: "Laminated / Unlaminated",
      Closure: "Stitched or Custom",
      MOQ: "Custom"
    },
    applications: [
      "Rice",
      "Grains",
      "Pulses",
      "Animal Feed",
      "Sugar",
      "Agricultural Products"
    ]
  },
  {
    num: 28,
    id: "bopp-laminated-woven-bag",
    category: "woven-bags",
    name: "BOPP Laminated Woven Bag",
    type: "Woven Bag · Printed Packaging",
    short: "Printed woven bags combining product branding and durable construction.",
    description:
      "BOPP laminated woven bags offer a printable outer surface and strong woven construction for branded agricultural and industrial packaging.",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Branded Bulk Packaging",
    material: "PP Woven Fabric / BOPP Film",
    features: [
      "High-Quality Graphics",
      "Durable Woven Structure",
      "Custom Sizes",
      "Lamination",
      "Branding Options",
      "Bulk Packaging"
    ],
    finishes: ["Gloss Finish", "Matte Finish"],
    specs: {
      Material: "PP Woven Fabric / BOPP Film",
      Thickness: "Custom Fabric GSM",
      Printing: "BOPP Printed Film",
      Colors: "Custom",
      Bag_Type: "Laminated Woven Sack",
      Finish: "Glossy / Matte",
      Closure: "Stitched or Custom",
      MOQ: "Custom"
    },
    applications: [
      "Rice",
      "Flour",
      "Fertilizers",
      "Animal Feed",
      "Pet Food",
      "Building Materials"
    ]
  },

  // ---- Corrugated Boxes ----
  {
    num: 29,
    id: "shipping-corrugated-box",
    category: "corrugated-boxes",
    name: "Shipping Corrugated Box",
    type: "Corrugated Box · Shipping",
    short: "Protective corrugated cartons for shipping, storage and distribution.",
    description:
      "Custom corrugated shipping boxes made for product handling and transport, with board strength and dimensions selected to suit the application.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1607082352121-fa243f3dde32?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Shipping and Distribution",
    material: "Corrugated Paperboard",
    features: [
      "Custom Dimensions",
      "Multiple Ply Options",
      "Stacking Strength Options",
      "Custom Printing",
      "Protective Packaging",
      "Recyclable Paper-Based Material Options"
    ],
    finishes: ["Kraft", "White Top", "Printed"],
    specs: {
      Material: "Corrugated Paperboard",
      Ply: "3-Ply / 5-Ply / 7-Ply Options",
      Printing: "Flexographic / Custom",
      Colors: "Custom",
      Box_Type: "Shipping Carton",
      Finish: "Kraft / White / Printed",
      Closure: "Flap Closure",
      MOQ: "Custom"
    },
    applications: [
      "E-Commerce",
      "Electronics",
      "Industrial Goods",
      "Textiles",
      "Automotive Parts",
      "Consumer Products"
    ]
  },
  {
    num: 31,
    id: "heavy-duty-export-box",
    category: "corrugated-boxes",
    name: "Heavy-Duty Export Box",
    type: "Corrugated Box · Industrial",
    short: "Heavy-duty corrugated packaging for industrial shipping and export.",
    description:
      "Custom-engineered corrugated cartons for heavier products and demanding shipping conditions. Board grade, construction and dimensions are selected according to load requirements.",
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Industrial Export Packaging",
    material: "Heavy-Duty Corrugated Board",
    features: [
      "Heavy-Duty Construction Options",
      "Custom Dimensions",
      "Stacking Performance Options",
      "Custom Inserts",
      "Export Packaging Design",
      "Custom Branding"
    ],
    finishes: ["Kraft", "Printed"],
    specs: {
      Material: "Heavy-Duty Corrugated Paperboard",
      Ply: "5-Ply / 7-Ply or Specified Construction",
      Printing: "Flexographic / Custom",
      Colors: "Custom",
      Box_Type: "Heavy-Duty Export Carton",
      Finish: "Kraft / Printed",
      Closure: "Flap / Custom",
      MOQ: "Custom"
    },
    applications: [
      "Machinery Parts",
      "Automotive Components",
      "Industrial Equipment",
      "Export Goods",
      "Electrical Equipment",
      "Heavy Products"
    ]
  },

  // ---- Carton Boxes ----
  {
    num: 32,
    id: "printed-mono-carton",
    category: "carton-boxes",
    name: "Printed Mono Carton",
    type: "Carton Box · Retail Packaging",
    short: "Custom printed paperboard cartons for retail product presentation.",
    description:
      "Folding mono cartons with custom printing and finishing options for consumer products, designed to support shelf presentation and product identification.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1607082352121-fa243f3dde32?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Retail Packaging",
    material: "Paperboard",
    features: [
      "Custom Printing",
      "Custom Die-Cut Shapes",
      "Retail-Ready Design",
      "Finishing Options",
      "Multiple Board Grades",
      "Branding Support"
    ],
    finishes: ["Gloss Lamination", "Matte Lamination", "Spot UV, Subject to Availability"],
    specs: {
      Material: "Paperboard / Folding Box Board",
      Thickness: "Board GSM as Required",
      Printing: "Offset Printing",
      Colors: "Custom",
      Box_Type: "Folding Mono Carton",
      Finish: "Gloss / Matte / Specialty Finish",
      Closure: "Tuck-End or Custom",
      MOQ: "Custom"
    },
    applications: [
      "Cosmetics",
      "Personal Care",
      "Food Products",
      "Electronics Accessories",
      "Consumer Goods",
      "Retail Products"
    ]
  },
  {
    num: 33,
    id: "pharmaceutical-carton",
    category: "carton-boxes",
    name: "Pharmaceutical Carton",
    type: "Carton Box · Healthcare",
    short: "Printed paperboard cartons for pharmaceutical and healthcare packaging.",
    description:
      "Custom paperboard cartons designed for pharmaceutical and healthcare product packaging, with print layouts and dimensions tailored to product requirements.",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Pharmaceutical Packaging",
    material: "Pharmaceutical-Grade Paperboard, as Specified",
    features: [
      "Clear Product Information",
      "Custom Dimensions",
      "High-Quality Printing",
      "Batch Information Printing",
      "Custom Die-Cut Design",
      "Tamper-Evident Design Options"
    ],
    finishes: ["Matte Finish", "Gloss Finish"],
    specs: {
      Material: "Paperboard as Specified",
      Thickness: "Custom Board GSM",
      Printing: "Offset Printing",
      Colors: "Custom",
      Box_Type: "Pharmaceutical Carton",
      Finish: "Matte / Glossy",
      Closure: "Tuck-End / Custom",
      MOQ: "Custom"
    },
    applications: [
      "Medicine Boxes",
      "Healthcare Products",
      "Medical Devices",
      "Nutritional Products",
      "Personal Care Products"
    ]
  },

  // ---- Paper Bags ----
  {
    num: 34,
    id: "kraft-shopping-bag",
    category: "paper-bags",
    name: "Kraft Shopping Bag",
    type: "Paper Bag · Retail",
    short: "Custom kraft paper shopping bags for retail and takeaway use.",
    description:
      "Paper shopping bags available with custom dimensions, handle styles and branding for retail stores, boutiques and food businesses.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1607082352121-fa243f3dde32?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Retail Shopping",
    material: "Kraft Paper",
    features: [
      "Custom Printing",
      "Multiple Paper Grades",
      "Handle Options",
      "Custom Dimensions",
      "Branding Options",
      "Recyclable Paper Options"
    ],
    finishes: ["Natural Kraft", "Printed", "Coated, Subject to Specification"],
    specs: {
      Material: "Kraft Paper",
      GSM: "Custom",
      Printing: "Flexographic / Offset, Subject to Specification",
      Colors: "Custom",
      Bag_Type: "Shopping Bag",
      Finish: "Natural / Printed",
      Handle: "Twisted Paper / Flat Paper / Custom",
      MOQ: "Custom"
    },
    applications: [
      "Retail Stores",
      "Clothing Stores",
      "Gift Shops",
      "Bakeries",
      "Grocery Stores",
      "Food Takeaway"
    ]
  },
  {
    num: 35,
    id: "printed-food-paper-bag",
    category: "paper-bags",
    name: "Printed Food Paper Bag",
    type: "Paper Bag · Food Packaging",
    short: "Custom paper bags for bakeries, takeaway and food service.",
    description:
      "Paper bags for bakery and food-service packaging, available in multiple sizes and print options. Food-contact suitability depends on the selected material and intended use.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Food Service",
    material: "Kraft Paper / Food-Suitable Paper, as Required",
    features: [
      "Custom Sizes",
      "Printed Branding",
      "Multiple Paper Grades",
      "Folded Bag Options",
      "Custom Design",
      "Food-Contact Material Options"
    ],
    finishes: ["Natural Kraft", "Printed"],
    specs: {
      Material: "Kraft / Specified Paper Grade",
      GSM: "Custom",
      Printing: "Flexographic / Custom",
      Colors: "Custom",
      Bag_Type: "Food Paper Bag",
      Finish: "Natural / Printed",
      Handle: "Handleless / Custom",
      MOQ: "Custom"
    },
    applications: [
      "Bakeries",
      "Restaurants",
      "Takeaway Food",
      "Grocery Stores",
      "Cafes",
      "Food Retail"
    ]
  },

  // ---- Stretch and Shrink Films ----
  {
    num: 36,
    id: "industrial-stretch-film",
    category: "stretch-shrink-films",
    name: "Industrial Stretch Film",
    type: "Stretch Film · Pallet Wrapping",
    short: "Stretch film for securing palletized products during storage and transport.",
    description:
      "Stretch wrapping film for bundling and stabilizing pallet loads, available in different widths, thicknesses and roll formats.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Pallet Wrapping",
    material: "LLDPE",
    features: [
      "Load Stabilization",
      "Flexible Film Thickness",
      "Manual and Machine Options",
      "Dust Protection",
      "Multiple Roll Widths",
      "Secure Bundling"
    ],
    finishes: ["Clear", "Colored, Subject to Availability"],
    specs: {
      Material: "LLDPE",
      Thickness: "Custom Microns",
      Printing: "Plain / Custom, Subject to Availability",
      Colors: "Clear / Custom Options",
      Film_Type: "Stretch Film",
      Finish: "Clear / Colored",
      Roll_Type: "Hand Roll / Machine Roll",
      MOQ: "Custom"
    },
    applications: [
      "Warehousing",
      "Logistics",
      "Manufacturing",
      "Palletized Goods",
      "Distribution Centers",
      "Industrial Shipping"
    ]
  },
  {
    num: 37,
    id: "shrink-packaging-film",
    category: "stretch-shrink-films",
    name: "Shrink Packaging Film",
    type: "Shrink Film · Product Bundling",
    short: "Shrink film for bundling products and creating a close-fitting outer wrap.",
    description:
      "Packaging shrink film selected according to product shape, packaging equipment and required shrink performance.",
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Product Bundling",
    material: "PE / POF / PVC, Depending on Application",
    features: [
      "Multiple Film Material Options",
      "Custom Thickness",
      "Product Bundling",
      "Machine-Compatible Options",
      "Clear Presentation",
      "Custom Roll Sizes"
    ],
    finishes: ["Clear", "Printed, Subject to Availability"],
    specs: {
      Material: "PE / POF / PVC, Depending on Requirements",
      Thickness: "Custom",
      Printing: "Plain / Custom, Subject to Availability",
      Colors: "Custom",
      Film_Type: "Shrink Film",
      Finish: "Clear / Custom",
      Roll_Type: "Roll / Center-Folded, Depending on Film",
      MOQ: "Custom"
    },
    applications: [
      "Beverage Multipacks",
      "Consumer Goods",
      "Retail Products",
      "Industrial Products",
      "Product Bundling",
      "Distribution Packaging"
    ]
  },

  // ---- Plastic Liners ----
  {
    num: 38,
    id: "industrial-ldpe-liner",
    category: "plastic-liners",
    name: "Industrial LDPE Liner",
    type: "Plastic Liner · Industrial Packaging",
    short: "Polyethylene liners for containers, cartons and industrial materials.",
    description:
      "Custom LDPE liners designed to fit containers, cartons and bulk packaging systems, with dimensions and thickness tailored to the application.",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Industrial Inner Packaging",
    material: "LDPE",
    features: [
      "Custom Dimensions",
      "Multiple Thickness Options",
      "Moisture Protection",
      "Container Compatibility",
      "Custom Bag Formats",
      "Industrial Packaging Options"
    ],
    finishes: ["Natural", "Clear", "Colored, Subject to Availability"],
    specs: {
      Material: "LDPE",
      Thickness: "Custom Microns",
      Printing: "Plain / Custom, Subject to Availability",
      Colors: "Natural / Clear / Custom",
      Liner_Type: "Industrial Liner",
      Finish: "Plain",
      Seal_Type: "Open / Sealed, Depending on Design",
      MOQ: "Custom"
    },
    applications: [
      "Industrial Containers",
      "Carton Liners",
      "Chemical Packaging",
      "Manufacturing",
      "Warehousing",
      "Bulk Material Storage"
    ]
  },
  {
    num: 39,
    id: "woven-sack-inner-liner",
    category: "plastic-liners",
    name: "Woven Sack Inner Liner",
    type: "Plastic Liner · Bulk Packaging",
    short: "Inner liners for woven sacks requiring an additional packaging layer.",
    description:
      "Custom polyethylene inner liners for woven sacks to provide an additional barrier against moisture and contamination, depending on the selected film and closure.",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1600&q=80"
    ],
    application: "Woven Sack Inner Packaging",
    material: "LDPE / HDPE",
    features: [
      "Custom Sack Fit",
      "Moisture Protection Options",
      "Custom Thickness",
      "Flexible Dimensions",
      "Multiple Closure Options",
      "Bulk Packaging Compatibility"
    ],
    finishes: ["Clear", "Natural"],
    specs: {
      Material: "LDPE / HDPE",
      Thickness: "Custom Microns",
      Printing: "Plain / Custom, Subject to Availability",
      Colors: "Clear / Natural",
      Liner_Type: "Woven Sack Inner Liner",
      Finish: "Plain",
      Closure: "Open / Tied / Custom",
      MOQ: "Custom"
    },
    applications: [
      "Rice",
      "Grains",
      "Fertilizers",
      "Industrial Powders",
      "Chemical Materials",
      "Bulk Ingredients"
    ]
  }
];

export const productsByCategory = (catId) => PRODUCTS.filter((p) => p.category === catId);
export const productBySlug = (slug) => PRODUCTS.find((p) => p.id === slug);

// Filter constants used by Products listing page
export const PRODUCT_CATEGORIES = ["All", "Pouches", "Rolls", "Laminates"];
export const PRODUCT_MATERIALS = ["All", "PET", "BOPP", "LDPE", "NYLON", "Kraft"];
export const PRODUCT_APPLICATIONS = ["All", "Food", "Pharma", "Personal Care", "Industrial", "Beverages"];
export const PRODUCT_FEATURES_FILTER = ["High Barrier", "Leak Proof", "Food Safe", "Recyclable", "Moisture Resistant"];
