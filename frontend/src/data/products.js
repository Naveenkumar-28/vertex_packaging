// Helpers

const PRODUCT_DATA = [
  // ---- Printed Rolls ----
  {
    num: 1,
    id: "snack-printed-roll",
    category: "printed-rolls",
    name: "Snack Printed Roll",
    type: "Printed Roll · Snacks",
    short: "Rotogravure printed multi-layer rolls for FFS snack lines.",
    description: "High-resolution rotogravure printed multi-layer rolls for FFS snack lines.",
    image: "snack-printed-roll",
    images: [
      "snack-printed-roll"
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
    image: "confectionery-printed-roll",
    images: [
      "confectionery-printed-roll",
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
    image: "sachet-printed-roll",
    images: [
      "sachet-printed-roll",
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
    id: "rotogravure-printed-roll",
    category: "printed-rolls",
    name: "Rotogravure Printed Roll",
    type: "Printed Roll · Flexible Packaging",
    short: "High-quality printed film rolls for automatic packaging machines.",
    description:
      "Custom rotogravure printed laminate rolls designed for high-speed packaging lines, delivering sharp graphics and reliable sealing performance.",
    image: "rotogravure-printed-roll",
    images: [
      "rotogravure-printed-roll"
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
    num: 5,
    id: "aluminium-foil-laminated-roll",
    category: "printed-rolls",
    name: "Aluminium Foil Laminated Roll",
    type: "Printed Roll · High Barrier",
    short: "Barrier packaging film for products requiring additional protection.",
    description:
      "Laminated packaging rolls incorporating aluminium foil for applications requiring protection against moisture, light and oxygen.",
    image: "aluminium-foil-laminated-roll",
    images: [
      "aluminium-foil-laminated-roll"
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
    num: 6,
    id: "coffee-stand-up-pouch",
    category: "pouches",
    name: "Coffee Stand-Up Pouch",
    type: "Stand-Up Pouch · Coffee",
    short: "Premium stand-up pouch for coffee packaging with excellent barrier protection.",
    description:
      "Premium stand-up pouch for coffee packaging with excellent barrier protection. Engineered to preserve freshness, aroma and shelf life.",
    image: "coffee-stand-up-pouch",
    images: [
      "coffee-stand-up-pouch",
      "coffee-stand-up-pouch-1",
      "coffee-stand-up-pouch-2",
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
    num: 7,
    id: "tea-stand-up-pouch",
    category: "pouches",
    name: "Tea Stand-Up Pouch",
    type: "Stand-Up Pouch · Tea",
    short: "Aroma-locked stand-up pouches for premium tea blends.",
    description: "Aroma-locked stand-up pouches engineered for premium tea blends, preserving fragrance and color.",
    image: "tea-stand-up-pouch",
    images: [
      "tea-stand-up-pouch",
      "tea-stand-up-pouch-1",
      "tea-stand-up-pouch-1",
      "tea-stand-up-pouch-1",
      "tea-stand-up-pouch-1",
      "tea-stand-up-pouch-1",
      "tea-stand-up-pouch-1",
      "tea-stand-up-pouch-1",
      "tea-stand-up-pouch-1",
      "tea-stand-up-pouch-1",
      "tea-stand-up-pouch-1",
      "tea-stand-up-pouch-1",
      "tea-stand-up-pouch-1",
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
    num: 8,
    id: "dry-fruits-stand-up-pouch",
    category: "pouches",
    name: "Dry Fruits Stand-Up Pouch",
    type: "Stand-Up Pouch · Dry Fruits",
    short: "High-clarity window pouches for premium dry fruits packaging.",
    description: "High-clarity window pouches with zip lock for premium dry fruits and nuts.",
    image: "dry-fruits-stand-up-pouch",
    images: [
      "dry-fruits-stand-up-pouch"
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
    num: 9,
    id: "snacks-stand-up-pouch",
    category: "pouches",
    name: "Snacks Stand-Up Pouch",
    type: "Stand-Up Pouch · Snacks",
    short: "High-volume snack stand-up pouches with shelf-ready aesthetics.",
    description: "Vibrant, high-volume snack pouches optimised for retail shelf presence.",
    image: "snacks-stand-up-pouch",
    images: [
      "snacks-stand-up-pouch",
      "snacks-stand-up-pouch-1",
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
    num: 10,
    id: "pet-food-stand-up-pouch",
    category: "pouches",
    name: "Pet Food Stand-Up Pouch",
    type: "Stand-Up Pouch · Pet Food",
    short: "Heavy-duty pet food pouches with high-barrier protection.",
    description: "Heavy-duty stand-up pouches with high-barrier laminates engineered for pet food and treats.",
    image: "pet-food-stand-up-pouch",
    images: [
      "pet-food-stand-up-pouch",
      "pet-food-stand-up-pouch-1",
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
    num: 11,
    id: "pharma-stand-up-pouch",
    category: "pouches",
    name: "Pharma Stand-Up Pouch",
    type: "Stand-Up Pouch · Pharma",
    short: "Tamper-evident pharma pouches with high-barrier laminate.",
    description: "Pharma-grade stand-up pouches with tamper-evident features and high-barrier laminates.",
    image: "pharma-stand-up-pouch",
    images: [
      "pharma-stand-up-pouch",
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
    num: 12,
    id: "wafer-center-seal-pouch",
    category: "pouches",
    name: "Wafer Center Seal Pouch",
    type: "Center Seal Pouch · Wafers",
    short: "Pillow style center seal pouches for high-speed wafer lines.",
    description: "Economical pillow-style center seal pouches for wafer and biscuit lines.",
    image: "wafer-center-seal-pouch",
    images: [
      "wafer-center-seal-pouch",
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
    num: 13,
    id: "chocolate-center-seal-pouch",
    category: "pouches",
    name: "Chocolate Center Seal Pouch",
    type: "Center Seal Pouch · Chocolate",
    short: "Premium chocolate wrappers with vibrant print and seal integrity.",
    description: "Premium center seal pouches engineered for chocolate brands.",
    image: "chocolate-center-seal-pouch",
    images: [
      "chocolate-center-seal-pouch",
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
    num: 14,
    id: "namkeen-center-seal-pouch",
    category: "pouches",
    name: "Namkeen Center Seal Pouch",
    type: "Center Seal Pouch · Namkeen",
    short: "High-volume namkeen pouches with crisp print and strong seals.",
    description: "Crisp printed center seal pouches for namkeen and savoury snacks.",
    image: "namkeen-center-seal-pouch",
    images: [
      "namkeen-center-seal-pouch",
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
    num: 15,
    id: "shampoo-three-side-seal",
    category: "pouches",
    name: "Shampoo Sachet Pouch",
    type: "Three Side Seal · Shampoo",
    short: "High-barrier three side seal sachets for shampoo and gels.",
    description: "Three-side seal sachets engineered for shampoo, conditioner and personal care liquids.",
    image: "shampoo-three-side-seal",
    images: [
      "shampoo-three-side-seal",
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
    num: 16,
    id: "sauce-three-side-seal",
    category: "pouches",
    name: "Sauce Sachet Pouch",
    type: "Three Side Seal · Sauce",
    short: "Food-safe sauce sachets with leak-proof seals.",
    description: "Food-safe sauce sachets with tamper-evident leak-proof seals for QSR and retail.",
    image: "sauce-three-side-seal",
    images: [
      "sauce-three-side-seal",
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
    num: 17,
    id: "pharma-three-side-seal",
    category: "pouches",
    name: "Pharma Strip Pouch",
    type: "Three Side Seal · Pharma",
    short: "Tamper-evident pharma strip pouches with foil barrier.",
    description: "Tamper-evident pharma strip pouches with high-barrier foil laminate.",
    image: "pharma-three-side-seal",
    images: [
      "pharma-three-side-seal",
      "pharma-three-side-seal-1",
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
    num: 18,
    id: "juice-spout-pouch",
    category: "pouches",
    name: "Juice Spout Pouch",
    type: "Spout Pouch · Juice",
    short: "Stand-up spout pouches for juices, beverages and liquids.",
    description: "Premium stand-up spout pouches for juices, smoothies and beverages.",
    image: "juice-spout-pouch",
    images: [
      "juice-spout-pouch",
      "juice-spout-pouch-1",
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
    num: 19,
    id: "soap-spout-pouch",
    category: "pouches",
    name: "Liquid Soap Spout Pouch",
    type: "Spout Pouch · Liquid Soap",
    short: "Refill spout pouches for liquid soap, handwash and detergents.",
    description: "Eco-friendly refill spout pouches for handwash, liquid soap and detergents.",
    image: "soap-spout-pouch",
    images: [
      "soap-spout-pouch",
      "soap-spout-pouch-1",
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
    num: 20,
    id: "sanitizer-spout-pouch",
    category: "pouches",
    name: "Sanitizer Spout Pouch",
    type: "Spout Pouch · Sanitizer",
    short: "Spout pouches engineered for sanitizers and alcohol-based liquids.",
    description: "Spout pouches engineered with alcohol-resistant laminates.",
    image: "sanitizer-spout-pouch",
    images: [
      "sanitizer-spout-pouch",
      "sanitizer-spout-pouch-1",
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
    num: 21,
    id: "coffee-zip-lock-pouch",
    category: "pouches",
    name: "Coffee Zip Lock Pouch",
    type: "Zip Lock Pouch · Coffee",
    short: "Reusable zip lock pouches for premium coffee brands.",
    description: "Premium re-closable zip lock pouches engineered for coffee freshness.",
    image: "coffee-zip-lock-pouch",
    images: [
      "coffee-zip-lock-pouch",
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
    num: 22,
    id: "dryfruit-zip-lock-pouch",
    category: "pouches",
    name: "Dry Fruit Zip Lock Pouch",
    type: "Zip Lock Pouch · Dry Fruits",
    short: "Window zip lock pouches for dry fruits and nuts.",
    description: "High-clarity window pouches with zip lock for premium dry fruits and nuts.",
    image: "dryfruit-zip-lock-pouch",
    images: [
      "dryfruit-zip-lock-pouch",
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
    num: 23,
    id: "frozen-zip-lock-pouch",
    category: "pouches",
    name: "Frozen Food Zip Lock Pouch",
    type: "Zip Lock Pouch · Frozen Food",
    short: "Freeze-resistant zip lock pouches for frozen food retail.",
    description: "Freeze-resistant zip lock pouches engineered for frozen food retail.",
    image: "frozen-zip-lock-pouch",
    images: [
      "frozen-zip-lock-pouch",
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
    num: 24,
    id: "three-side-seal-sachet",
    category: "pouches",
    name: "Three-Side Seal Sachet",
    type: "Sachet · Three-Side Seal",
    short: "Compact sealed sachets for single-use and sample packaging.",
    description:
      "Three-side seal sachets designed for small product quantities, promotional samples and single-use packaging formats.",
    image: "three-side-seal-sachet",
    images: [
      "three-side-seal-sachet",
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
    num: 25,
    id: "pp-woven-rice-bag",
    category: "woven-bags",
    name: "PP Woven Rice Bag",
    type: "Woven Bag · Agriculture",
    short: "Durable polypropylene woven bags for grain and rice packaging.",
    description:
      "Woven polypropylene bags manufactured for bulk agricultural packaging, with customizable dimensions, weight capacity and printing.",
    image: "pp-woven-rice-bag",
    images: [
      "pp-woven-rice-bag",
      "pp-woven-rice-bag-1"
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
    num: 26,
    id: "bopp-laminated-woven-bag",
    category: "woven-bags",
    name: "BOPP Laminated Woven Bag",
    type: "Woven Bag · Printed Packaging",
    short: "Printed woven bags combining product branding and durable construction.",
    description:
      "BOPP laminated woven bags offer a printable outer surface and strong woven construction for branded agricultural and industrial packaging.",
    image: "bopp-laminated-woven-bag",
    images: [
      "bopp-laminated-woven-bag"
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
    num: 27,
    id: "shipping-corrugated-box",
    category: "corrugated-boxes",
    name: "Shipping Corrugated Box",
    type: "Corrugated Box · Shipping",
    short: "Protective corrugated cartons for shipping, storage and distribution.",
    description:
      "Custom corrugated shipping boxes made for product handling and transport, with board strength and dimensions selected to suit the application.",
    image: "shipping-corrugated-box",
    images: [
      "shipping-corrugated-box",
      "shipping-corrugated-box-1"
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
    num: 28,
    id: "heavy-duty-export-box",
    category: "corrugated-boxes",
    name: "Heavy-Duty Export Box",
    type: "Corrugated Box · Industrial",
    short: "Heavy-duty corrugated packaging for industrial shipping and export.",
    description:
      "Custom-engineered corrugated cartons for heavier products and demanding shipping conditions. Board grade, construction and dimensions are selected according to load requirements.",
    image: "heavy-duty-export-box",
    images: [
      "heavy-duty-export-box"
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
    num: 29,
    id: "printed-mono-carton",
    category: "carton-boxes",
    name: "Printed Mono Carton",
    type: "Carton Box · Retail Packaging",
    short: "Custom printed paperboard cartons for retail product presentation.",
    description:
      "Folding mono cartons with custom printing and finishing options for consumer products, designed to support shelf presentation and product identification.",
    image: "printed-mono-carton",
    images: [
      "printed-mono-carton",
      "printed-mono-carton-1",
      "printed-mono-carton-2"
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
    num: 30,
    id: "pharmaceutical-carton",
    category: "carton-boxes",
    name: "Pharmaceutical Carton",
    type: "Carton Box · Healthcare",
    short: "Printed paperboard cartons for pharmaceutical and healthcare packaging.",
    description:
      "Custom paperboard cartons designed for pharmaceutical and healthcare product packaging, with print layouts and dimensions tailored to product requirements.",
    image: "pharmaceutical-carton",
    images: [
      "pharmaceutical-carton"
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
    num: 31,
    id: "kraft-shopping-bag",
    category: "paper-bags",
    name: "Kraft Shopping Bag",
    type: "Paper Bag · Retail",
    short: "Custom kraft paper shopping bags for retail and takeaway use.",
    description:
      "Paper shopping bags available with custom dimensions, handle styles and branding for retail stores, boutiques and food businesses.",
    image: "kraft-shopping-bag",
    images: [
      "kraft-shopping-bag",
      "kraft-shopping-bag-1",
      "kraft-shopping-bag-2"
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
    num: 32,
    id: "printed-food-paper-bag",
    category: "paper-bags",
    name: "Printed Food Paper Bag",
    type: "Paper Bag · Food Packaging",
    short: "Custom paper bags for bakeries, takeaway and food service.",
    description:
      "Paper bags for bakery and food-service packaging, available in multiple sizes and print options. Food-contact suitability depends on the selected material and intended use.",
    image: "printed-food-paper-bag",
    images: [
      "printed-food-paper-bag",
      "printed-food-paper-bag-1"
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
    num: 33,
    id: "industrial-stretch-film",
    category: "stretch-shrink-films",
    name: "Industrial Stretch Film",
    type: "Stretch Film · Pallet Wrapping",
    short: "Stretch film for securing palletized products during storage and transport.",
    description:
      "Stretch wrapping film for bundling and stabilizing pallet loads, available in different widths, thicknesses and roll formats.",
    image: "industrial-stretch-film",
    images: [
      "industrial-stretch-film"
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
    num: 34,
    id: "shrink-packaging-film",
    category: "stretch-shrink-films",
    name: "Shrink Packaging Film",
    type: "Shrink Film · Product Bundling",
    short: "Shrink film for bundling products and creating a close-fitting outer wrap.",
    description:
      "Packaging shrink film selected according to product shape, packaging equipment and required shrink performance.",
    image: "shrink-packaging-film",
    images: [
      "shrink-packaging-film",
      "shrink-packaging-film-1"
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
    num: 35,
    id: "industrial-ldpe-liner",
    category: "plastic-liners",
    name: "Industrial LDPE Liner",
    type: "Plastic Liner · Industrial Packaging",
    short: "Polyethylene liners for containers, cartons and industrial materials.",
    description:
      "Custom LDPE liners designed to fit containers, cartons and bulk packaging systems, with dimensions and thickness tailored to the application.",
    image: "industrial-ldpe-liner",
    images: [
      "industrial-ldpe-liner",
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
    num: 36,
    id: "woven-sack-inner-liner",
    category: "plastic-liners",
    name: "Woven Sack Inner Liner",
    type: "Plastic Liner · Bulk Packaging",
    short: "Inner liners for woven sacks requiring an additional packaging layer.",
    description:
      "Custom polyethylene inner liners for woven sacks to provide an additional barrier against moisture and contamination, depending on the selected film and closure.",
    image: "woven-sack-inner-liner",
    images: [
      "woven-sack-inner-liner",
      "woven-sack-inner-liner-1"
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
  },
  // ───────── Fertilizer & Chemical Packaging ─────────
  {
    num: 37,
    id: "fertilizer-liner-bag",
    category: "plastic-liners",
    name: "Fertilizer Liner Bag",
    type: "Plastic Liner · Fertilizer Packaging",
    short: "Polyethylene liners that add a moisture barrier inside fertilizer sacks.",
    description:
      "Custom polyethylene liner bags for fertilizer sacks to help reduce moisture ingress and product caking, depending on the selected film thickness and closure.",
    image: "fertilizer-liner-bag",
    images: ["fertilizer-liner-bag", "fertilizer-liner-bag-1"],
    application: "Fertilizer Inner Packaging",
    material: "LDPE / HDPE",
    features: [
      "Moisture Protection Options",
      "Custom Sack Fit",
      "Custom Thickness",
      "Tear-Resistant Film",
      "Multiple Closure Options",
      "Bulk Packaging Compatibility"
    ],
    finishes: ["Clear", "Natural"],
    specs: {
      Material: "LDPE / HDPE",
      Thickness: "Custom Microns",
      Printing: "Plain / Custom, Subject to Availability",
      Colors: "Clear / Natural",
      Liner_Type: "Fertilizer Liner Bag",
      Finish: "Plain",
      Closure: "Open / Tied / Heat Sealed",
      MOQ: "Custom"
    },
    applications: [
      "Urea",
      "NPK Fertilizers",
      "Organic Fertilizers",
      "Compost",
      "Soil Conditioners",
      "Granular Fertilizers"
    ]
  },
  {
    num: 38,
    id: "chemical-powder-packaging-bag",
    category: "paper-bags",
    name: "Chemical Powder Packaging Bag",
    type: "Plastic Bag · Chemical Packaging",
    short: "Sealed polyethylene bags for powdered and granular chemicals.",
    description:
      "Custom polyethylene bags for packing industrial powders and granular chemical materials, with film and closure options selected to suit the product and handling requirements.",
    image: "chemical-powder-packaging-bag",
    images: ["chemical-powder-packaging-bag"],
    application: "Chemical Powder Packaging",
    material: "LDPE / HDPE",
    features: [
      "Contamination Protection",
      "Custom Thickness",
      "Flexible Dimensions",
      "Heat Seal Compatible",
      "Custom Printing Options",
      "Bulk Packaging Compatibility"
    ],
    finishes: ["Clear", "Natural"],
    specs: {
      Material: "LDPE / HDPE",
      Thickness: "Custom Microns",
      Printing: "Plain / Custom, Subject to Availability",
      Colors: "Clear / Natural",
      Bag_Type: "Flat / Gusseted Bag",
      Finish: "Plain",
      Closure: "Open / Tied / Heat Sealed",
      MOQ: "Custom"
    },
    applications: [
      "Industrial Powders",
      "Chemical Granules",
      "Pigments",
      "Detergent Raw Materials",
      "Additives",
      "Bulk Ingredients"
    ]
  },
  {
    num: 39,
    id: "agro-chemical-pouch",
    category: "pouches",
    name: "Agro Chemical Pouch",
    type: "Plastic Pouch · Agro Packaging",
    short: "Small-format pouches for agro chemical and crop-care products.",
    description:
      "Custom polyethylene pouches for agro chemical products in smaller pack sizes, with seal and print options available depending on the selected film structure.",
    image: "agro-chemical-pouch",
    images: ["agro-chemical-pouch"],
    application: "Agro Chemical Packaging",
    material: "LDPE / Laminated Film",
    features: [
      "Leak-Resistant Seals",
      "Custom Pouch Sizes",
      "Custom Printing Options",
      "Tear Notch Options",
      "Consistent Seal Quality",
      "Retail & Bulk Compatibility"
    ],
    finishes: ["Clear", "Natural", "Printed"],
    specs: {
      Material: "LDPE / Laminated Film",
      Thickness: "Custom Microns",
      Printing: "Plain / Custom, Subject to Availability",
      Colors: "Clear / Natural / Printed",
      Pouch_Type: "Flat / Stand-Up Pouch",
      Finish: "Plain / Printed",
      Closure: "Heat Sealed",
      MOQ: "Custom"
    },
    applications: [
      "Pesticide Powders",
      "Fungicides",
      "Micronutrients",
      "Seed Treatment Products",
      "Plant Growth Products",
      "Crop-Care Packs"
    ]
  },
  {
    num: 40,
    id: "fertilizer-woven-sack",
    category: "woven-bags",
    name: "Fertilizer Woven Sack",
    type: "Woven Sack · Fertilizer Packaging",
    short: "Strong woven sacks for packing and transporting bulk fertilizers.",
    description:
      "Custom PP woven sacks for fertilizer packing, with optional lamination and inner liner compatibility to suit moisture and handling requirements.",
    image: "fertilizer-woven-sack",
    images: ["fertilizer-woven-sack", "fertilizer-woven-sack-1"],
    application: "Fertilizer Bulk Packaging",
    material: "PP Woven / Laminated",
    features: [
      "High Load Strength",
      "Inner Liner Compatible",
      "Moisture Protection Options",
      "Custom Printing Options",
      "Stackable Design",
      "Custom Sizes"
    ],
    finishes: ["Plain", "Laminated", "Printed"],
    specs: {
      Material: "PP Woven / Laminated",
      Capacity: "Custom (e.g. 25 kg / 50 kg)",
      Printing: "Plain / Custom, Subject to Availability",
      Colors: "White / Natural / Custom",
      Bag_Type: "Open Mouth",
      Finish: "Plain / Laminated",
      Closure: "Stitched / Heat Cut",
      MOQ: "Custom"
    },
    applications: [
      "Urea",
      "NPK Fertilizers",
      "Organic Fertilizers",
      "Potash",
      "Compost",
      "Granular Fertilizers"
    ]
  },

  {
    num: 41,
    id: "chemical-drum-liner",
    category: "plastic-liners",
    name: "Chemical Drum Liner",
    type: "Plastic Liner · Industrial Packaging",
    short: "Polyethylene liners that protect drum contents and keep drums clean.",
    description:
      "Custom polyethylene drum liners to help prevent product contamination and reduce drum cleaning, with film thickness and shape selected to suit the drum and the product.",
    image: "chemical-drum-liner",
    images: ["chemical-drum-liner"],
    application: "Drum & Barrel Lining",
    material: "LDPE / HDPE",
    features: [
      "Contamination Protection",
      "Custom Drum Fit",
      "Custom Thickness",
      "Puncture-Resistant Film",
      "Easy Insertion & Removal",
      "Reduced Drum Cleaning"
    ],
    finishes: ["Clear", "Natural"],
    specs: {
      Material: "LDPE / HDPE",
      Thickness: "Custom Microns",
      Printing: "Plain",
      Colors: "Clear / Natural",
      Liner_Type: "Round Bottom / Flat Bottom Drum Liner",
      Finish: "Plain",
      Closure: "Open / Tied",
      MOQ: "Custom"
    },
    applications: [
      "Industrial Chemicals",
      "Resins",
      "Pigments",
      "Powders",
      "Additives",
      "Bulk Ingredients"
    ]
  },
  {
    num: 42,
    id: "cement-packaging-bag",
    category: "paper-bags",
    name: "Cement Packaging Bag",
    type: "Woven Bag · Construction Packaging",
    short: "Strong bags for packing and transporting cement and similar materials.",
    description:
      "Custom bags for cement and fine construction powders, built for stacking and transport, with construction and lamination options selected to suit load and moisture requirements.",
    image: "cement-packaging-bag",
    images: ["cement-packaging-bag", "cement-packaging-bag-1"],
    application: "Cement Packaging",
    material: "PP Woven / Laminated",
    features: [
      "High Load Strength",
      "Stackable Design",
      "Moisture Protection Options",
      "Custom Printing Options",
      "Custom Sizes",
      "Bulk Handling Compatibility"
    ],
    finishes: ["Plain", "Laminated", "Printed"],
    specs: {
      Material: "PP Woven / Laminated",
      Capacity: "Custom (e.g. 25 kg / 50 kg)",
      Printing: "Plain / Custom, Subject to Availability",
      Colors: "White / Natural / Custom",
      Bag_Type: "Open Mouth / Valve",
      Finish: "Plain / Laminated",
      Closure: "Stitched / Valve",
      MOQ: "Custom"
    },
    applications: [
      "Cement",
      "Fly Ash",
      "Lime",
      "Gypsum Powder",
      "Dry Mix Materials",
      "Building Powders"
    ]
  },
  {
    num: 43,
    id: "putty-plaster-bag",
    category: "paper-bags",
    name: "Putty & Plaster Bag",
    type: "Plastic Bag · Building Materials",
    short: "Moisture-aware packaging for wall putty, plaster and dry mixes.",
    description:
      "Custom bags for wall putty, plaster and dry mix products, with film and lamination options to help protect contents during storage and transport.",
    image: "putty-plaster-bag",
    images: ["putty-plaster-bag"],
    application: "Putty & Plaster Packaging",
    material: "PP Woven / LDPE Laminated",
    features: [
      "Moisture Protection Options",
      "Custom Sizes",
      "Custom Printing Options",
      "Tear-Resistant Material",
      "Stackable Design",
      "Brand Display Space"
    ],
    finishes: ["Plain", "Laminated", "Printed"],
    specs: {
      Material: "PP Woven / LDPE Laminated",
      Capacity: "Custom (e.g. 5 kg to 40 kg)",
      Printing: "Plain / Custom, Subject to Availability",
      Colors: "White / Natural / Custom",
      Bag_Type: "Open Mouth / Pillow",
      Finish: "Plain / Laminated / Printed",
      Closure: "Stitched / Heat Sealed",
      MOQ: "Custom"
    },
    applications: [
      "Wall Putty",
      "Plaster",
      "Tile Adhesive",
      "Dry Mortar",
      "Grout",
      "Skim Coat Products"
    ]
  },
  {
    num: 44,
    id: "construction-debris-bag",
    category: "construction-building-materials",
    name: "Construction Debris Bag",
    type: "Woven Bag · Site Packaging",
    short: "Heavy-duty bags for rubble, sand and site waste handling.",
    description:
      "Heavy-duty woven bags for collecting and moving construction debris, sand and aggregates, made to handle rough site conditions depending on the selected fabric weight.",
    image: "construction-debris-bag",
    images: ["construction-debris-bag"],
    application: "Site Debris & Material Handling",
    material: "PP Woven",
    features: [
      "Heavy-Duty Fabric",
      "Puncture Resistance",
      "Custom Sizes",
      "Reusable Design",
      "Stitched Seams",
      "Easy Handling"
    ],
    finishes: ["Plain", "UV Treated"],
    specs: {
      Material: "PP Woven",
      Capacity: "Custom",
      Printing: "Plain / Custom, Subject to Availability",
      Colors: "White / Natural / Custom",
      Bag_Type: "Open Mouth",
      Finish: "Plain / UV Treated",
      Closure: "Open / Tied / Stitched",
      MOQ: "Custom"
    },
    applications: [
      "Construction Debris",
      "Sand",
      "Aggregates",
      "Rubble",
      "Demolition Waste",
      "Site Cleanup"
    ]
  },
  {
    num: 45,
    id: "bulk-bag-construction-fibc",
    category: "construction-building-materials",
    name: "Bulk Bag for Construction Materials",
    type: "FIBC · Bulk Packaging",
    short: "Large-capacity bulk bags for sand, aggregates and building materials.",
    description:
      "Custom FIBC bulk bags for moving and storing sand, aggregates and other construction materials, with lifting loops and discharge options chosen to suit the load and handling equipment.",
    image: "bulk-bag-construction-fibc",
    images: ["bulk-bag-construction-fibc"],
    application: "Bulk Construction Material Handling",
    material: "PP Woven",
    features: [
      "High Load Capacity",
      "Lifting Loop Options",
      "Reusable Design",
      "Custom Sizes",
      "Discharge Spout Options",
      "UV Treatment Options"
    ],
    finishes: ["Plain", "UV Treated", "Printed"],
    specs: {
      Material: "PP Woven",
      Capacity: "Custom (e.g. 500 kg / 1000 kg)",
      Printing: "Plain / Custom, Subject to Availability",
      Colors: "White / Natural / Custom",
      Bag_Type: "Top Open / Spout Top, Flat / Spout Bottom",
      Finish: "Plain / UV Treated",
      Closure: "Open / Duffle / Spout",
      MOQ: "Custom"
    },
    applications: [
      "Sand",
      "Aggregates",
      "Cement",
      "Gravel",
      "Bricks & Tiles",
      "Dry Mix Materials"
    ]
  }
];



const KEY_INDUSTRIES_BY_PRODUCT = {
  "snack-printed-roll": ["food", "snacks"],
  "confectionery-printed-roll": ["food", "confectionery"],
  "sachet-printed-roll": ["personal-care", "pharmaceutical"],
  "rotogravure-printed-roll": ["food", "consumer-goods"],
  "aluminium-foil-laminated-roll": ["food", "pharmaceutical"],
  "coffee-stand-up-pouch": ["food", "coffee-tea"],
  "tea-stand-up-pouch": ["food", "coffee-tea"],
  "dry-fruits-stand-up-pouch": ["food", "agriculture"],
  "snacks-stand-up-pouch": ["food", "snacks"],
  "pet-food-stand-up-pouch": ["pet-care", "food"],
  "pharma-stand-up-pouch": ["pharmaceutical"],
  "wafer-center-seal-pouch": ["food", "confectionery"],
  "chocolate-center-seal-pouch": ["food", "confectionery"],
  "namkeen-center-seal-pouch": ["food", "snacks"],
  "shampoo-three-side-seal": ["personal-care"],
  "sauce-three-side-seal": ["food"],
  "pharma-three-side-seal": ["pharmaceutical"],
  "juice-spout-pouch": ["food"],
  "soap-spout-pouch": ["personal-care"],
  "sanitizer-spout-pouch": ["personal-care", "healthcare"],
  "coffee-zip-lock-pouch": ["food", "coffee-tea"],
  "dryfruit-zip-lock-pouch": ["food", "agriculture"],
  "frozen-zip-lock-pouch": ["food"],
  "three-side-seal-sachet": ["food"],
  "pp-woven-rice-bag": ["agriculture", "food"],
  "bopp-laminated-woven-bag": ["agriculture", "industrial"],
  "shipping-corrugated-box": ["industrial", "e-commerce"],
  "heavy-duty-export-box": ["logistics", "industrial"],
  "printed-mono-carton": ["retail", "consumer-goods"],
  "pharmaceutical-carton": ["pharmaceutical", "healthcare"],
  "kraft-shopping-bag": ["retail", "food-beverage"],
  "printed-food-paper-bag": ["food-beverage", "retail"],
  "industrial-stretch-film": ["logistics", "industrial"],
  "shrink-packaging-film": ["industrial", "consumer-goods"],
  "industrial-ldpe-liner": ["industrial", "logistics"],
  "woven-sack-inner-liner": ["agriculture", "industrial"],
  "fertilizer-liner-bag": ["agriculture", "fertilizer", "industrial"],
  "chemical-powder-packaging-bag": ["industrial", "fertilizer"],
  "agro-chemical-pouch": ["agriculture", "fertilizer"],
  "cement-packaging-bag": ["construction", "industrial"],
  "putty-plaster-bag": ["construction", "industrial"],
  "construction-debris-bag": ["construction", "industrial"],
  "fertilizer-woven-sack": ["agriculture", "industrial"],
  "chemical-drum-liner": ["fertilizer", "industrial"],
  "bulk-bag-construction-fibc": ["construction", "industrial"],
};

export const PRODUCTS = [
  ...new Map(
    PRODUCT_DATA.map((product) => [
      product.id,
      {
        ...product,
        keyIndustries:
          KEY_INDUSTRIES_BY_PRODUCT[product.id] || [],
      },
    ])
  ).values(),
];



export const productsByCategory = (catId) => PRODUCTS.filter((p) => p.category === catId);
export const productBySlug = (slug) => PRODUCTS.find((p) => p.id === slug);

// Filter constants used by Products listing page
export const PRODUCT_CATEGORIES = ["All", "Pouches", "Rolls", "Laminates"];
export const PRODUCT_MATERIALS = ["All", "PET", "BOPP", "LDPE", "NYLON", "Kraft"];
export const PRODUCT_APPLICATIONS = ["All", "Food", "Pharma", "Personal Care", "Industrial", "Beverages"];
export const PRODUCT_FEATURES_FILTER = ["High Barrier", "Leak Proof", "Food Safe", "Recyclable", "Moisture Resistant"];
