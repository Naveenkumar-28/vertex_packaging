// Product categories — the 6 top-level categories shown on /products
// and on /products/:slug (category landing pages).

// export const CATEGORIES = [
//   {
//     id: "printed-rolls",
//     name: "Printed Rolls",
//     short: "High-resolution rotogravure printed laminate rolls for FFS machines.",
//     description: "Premium multi-layer printed laminate rolls engineered for high-speed Form-Fill-Seal lines.",
//     image: "https://images.unsplash.com/photo-1607082352121-fa243f3dde32?auto=format&fit=crop&q=80&w=1400",
//     heroImage: "https://images.unsplash.com/photo-1607082352121-fa243f3dde32?auto=format&fit=crop&q=80&w=2000",
//     benefits: [
//       "High Barrier Protection",
//       "Custom Printing",
//       "Food Grade Materials",
//       "Multi-Layer Structures",
//       "High Speed Compatible",
//       "Recyclable Options",
//     ],
//     applications: ["Snacks", "Confectionery", "Sachets", "Sauces"],
//   },
//   {
//     id: "stand-up-pouches",
//     name: "Stand-Up Pouches",
//     short: "Premium shelf-ready packaging solutions.",
//     description: "Self-standing pouches with reseal zipper, ideal for retail shelf appeal across food, pharma and personal care.",
//     image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=1400",
//     heroImage: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=2000",
//     benefits: [
//       "High Barrier Protection",
//       "Custom Printing",
//       "Food Grade Materials",
//       "Leak Proof Seal",
//       "Recyclable Options",
//       "Moisture Resistant",
//     ],
//     applications: ["Coffee", "Tea", "Dry Fruits", "Snacks", "Pet Food", "Pharma"],
//   },
//   {
//     id: "center-seal-pouches",
//     name: "Center Seal Pouches",
//     short: "Pillow style pouches for high-speed lines.",
//     description: "Economical pillow-style center seal pouches optimised for high-speed packing lines.",
//     image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1400",
//     heroImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=2000",
//     benefits: [
//       "High Speed Sealing",
//       "Moisture Resistant",
//       "Custom Printing",
//       "Multi-layer Barrier",
//       "Food Grade",
//       "Cost Efficient",
//     ],
//     applications: ["Wafers", "Biscuits", "Chocolates", "Namkeen"],
//   },
//   {
//     id: "three-side-seal-pouches",
//     name: "Three Side Seal Pouches",
//     short: "Flat 3-side seal pouches for sachets & sample packs.",
//     description: "Premium flat three-side seal pouches with strong seal integrity and clean aesthetics.",
//     image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1400",
//     heroImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=2000",
//     benefits: [
//       "Flat Display",
//       "High Barrier",
//       "Tamper Evident",
//       "Custom Printing",
//       "Food Grade",
//       "Leak Proof",
//     ],
//     applications: ["Shampoo", "Sauce", "Pharma", "Cosmetics"],
//   },
//   {
//     id: "spout-pouches",
//     name: "Spout Pouches",
//     short: "Pouches with spout & cap for liquids.",
//     description: "Stand-up pouches with spout & cap — perfect for juice, sanitizer, soap and liquid SKUs.",
//     image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1400",
//     heroImage: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=2000",
//     benefits: [
//       "Leak Proof",
//       "Re-closable Spout",
//       "Premium Look",
//       "Refill Friendly",
//       "Food Grade",
//       "Various Capacities",
//     ],
//     applications: ["Juice", "Liquid Soap", "Sanitizer", "Beverages"],
//   },
//   {
//     id: "zip-lock-pouches",
//     name: "Zip Lock Pouches",
//     short: "Reusable resealable zipper pouches.",
//     description: "Premium re-closable zipper pouches — freshness lock for retail.",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400",
//     heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
//     benefits: [
//       "Re-closable Zipper",
//       "High Barrier",
//       "Premium Print",
//       "Window Options",
//       "Food Grade",
//       "Moisture Resistant",
//     ],
//     applications: ["Coffee", "Pet Food", "Dry Fruits", "Frozen Food"],
//   },
// ];

export const CATEGORIES =
  [
    {
      "id": "printed-rolls",
      "name": "Printed Rolls",
      "short": "High-quality printed flexible packaging rolls.",
      "description": "Custom printed multilayer laminated rolls for automatic form-fill-seal packaging machines.",
      "products": [
        "Rotogravure Printed Rolls",
        "Flexographic Printed Rolls",
        "Laminated Film Rolls",
        "Pillow Pack Rolls",
        "Center Seal Rolls",
        "Food Packaging Rolls",
        "Aluminium Foil Laminated Rolls",
        "Plain Packaging Film Rolls"
      ],
      "benefits": [
        "High-quality printing",
        "Moisture protection",
        "Custom laminate structures",
        "Excellent sealing performance",
        "Food-grade material options",
        "Custom roll width and length"
      ],
      "applications": [
        "Snacks",
        "Biscuits",
        "Chips",
        "Spices",
        "Tea and coffee",
        "Confectionery",
        "Edible oil",
        "Detergent"
      ],
      "image": "https://images.unsplash.com/photo-1706881812145-61f38a1d431c?auto=format&fit=crop&w=800&q=80",
      "heroImage": "https://images.unsplash.com/photo-1706881812145-61f38a1d431c?auto=format&fit=crop&w=1800&q=85"
    },
    {
      "id": "pouches",
      "name": "Pouches",
      "short": "Flexible packaging pouches for food and industrial products.",
      "description": "Custom-designed pouches available in different sizes, materials, sealing styles and printing options.",
      "products": [
        "Stand-Up Pouches",
        "Center Seal Pouches",
        "Three Side Seal Pouches",
        "Four Side Seal Pouches",
        "Zip Lock Pouches",
        "Spout Pouches",
        "Flat Bottom Pouches",
        "Gusseted Pouches",
        "Vacuum Pouches",
        "Retort Pouches",
        "Aluminium Foil Pouches",
        "Transparent Pouches",
        "Window Pouches",
        "Laminated Pouches"
      ],
      "benefits": [
        "Custom sizes and designs",
        "High-barrier protection options",
        "Resealable zipper options",
        "Leak-resistant sealing options",
        "Custom branding and printing",
        "Flexible material selection"
      ],
      "applications": [
        "Food products",
        "Spices and masala",
        "Rice and pulses",
        "Snacks",
        "Coffee and tea",
        "Pet food",
        "Personal care",
        "Pharmaceutical products"
      ],
      "image": "https://images.unsplash.com/photo-1708746333840-22560480297b?auto=format&fit=crop&w=800&q=80",
      "heroImage": "https://images.unsplash.com/photo-1708746333840-22560480297b?auto=format&fit=crop&w=1800&q=85"
    },
    {
      "id": "woven-bags",
      "name": "Woven Bags",
      "short": "Durable woven polypropylene bags for bulk packaging.",
      "description": "Strong woven bags manufactured from polypropylene fabric for agricultural, industrial and commercial packaging.",
      "products": [
        "PP Woven Bags",
        "Laminated Woven Bags",
        "BOPP Printed Woven Bags",
        "HDPE Woven Bags",
        "Gusseted Woven Bags",
        "Valve Woven Bags",
        "Open Mouth Woven Bags",
        "Loop Handle Woven Bags",
        "FIBC Jumbo Bags",
        "Sand Bags",
        "Rice Bags",
        "Cement Bags",
        "Fertilizer Bags"
      ],
      "benefits": [
        "High tensile strength",
        "Heavy-duty construction",
        "Custom printing",
        "Multiple size options",
        "Lamination options",
        "Suitable for bulk handling"
      ],
      "applications": [
        "Rice and grains",
        "Sugar",
        "Flour",
        "Cement",
        "Fertilizers",
        "Animal feed",
        "Chemicals",
        "Sand and minerals"
      ],
      "image": "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=800&q=80",
      "heroImage": "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1800&q=85"
    },
    {
      "id": "corrugated-boxes",
      "name": "Corrugated Boxes",
      "short": "Strong corrugated cartons for shipping and storage.",
      "description": "Custom corrugated cardboard boxes designed to protect products during transportation, storage and distribution.",
      "products": [
        "3-Ply Corrugated Boxes",
        "5-Ply Corrugated Boxes",
        "7-Ply Corrugated Boxes",
        "Printed Corrugated Boxes",
        "Shipping Cartons",
        "Die-Cut Boxes",
        "Heavy-Duty Export Boxes",
        "Regular Slotted Cartons",
        "Custom Die-Cut Cartons",
        "Corrugated Sheets",
        "Partition Boxes",
        "Die-Cut Inserts"
      ],
      "benefits": [
        "Lightweight and strong",
        "Custom dimensions",
        "Stacking strength options",
        "Custom branding",
        "Protective cushioning",
        "Recyclable paper-based options"
      ],
      "applications": [
        "E-commerce",
        "Electronics",
        "Automotive parts",
        "Food and beverages",
        "Textiles",
        "Industrial products",
        "Consumer goods",
        "Export packaging"
      ],
      "image": "https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?auto=format&fit=crop&w=800&q=80",
      "heroImage": "https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?auto=format&fit=crop&w=1800&q=85"
    },
    {
      "id": "carton-boxes",
      "name": "Carton Boxes",
      "short": "Custom folding cartons and paperboard packaging.",
      "description": "Printed paperboard cartons and folding boxes for retail display, product presentation and secondary packaging.",
      "products": [
        "Folding Cartons",
        "Printed Paperboard Boxes",
        "Mono Cartons",
        "Pharmaceutical Cartons",
        "Cosmetic Boxes",
        "Food Cartons",
        "Retail Product Boxes",
        "Die-Cut Paperboard Boxes",
        "Sleeve Boxes",
        "Tuck-End Boxes",
        "Custom Printed Cartons"
      ],
      "benefits": [
        "Professional product presentation",
        "Custom printing and finishes",
        "Multiple board thicknesses",
        "Custom shapes and sizes",
        "Retail-friendly designs",
        "Paper-based material options"
      ],
      "applications": [
        "Cosmetics",
        "Pharmaceuticals",
        "Food products",
        "Electronics accessories",
        "Personal care",
        "Consumer products",
        "Retail packaging"
      ],
      "image": "https://images.unsplash.com/photo-1772920908589-d6264e5d987f?auto=format&fit=crop&w=800&q=80",
      "heroImage": "https://images.unsplash.com/photo-1772920908589-d6264e5d987f?auto=format&fit=crop&w=1800&q=85"
    },
    {
      "id": "paper-bags",
      "name": "Paper Bags",
      "short": "Custom paper bags for retail and commercial packaging.",
      "description": "Paper bags available in various sizes, paper grades, handles and printed branding options.",
      "products": [
        "Kraft Paper Bags",
        "Twisted Handle Paper Bags",
        "Flat Handle Paper Bags",
        "SOS Paper Bags",
        "Shopping Paper Bags",
        "Food Takeaway Bags",
        "Printed Paper Bags",
        "Custom Retail Bags"
      ],
      "benefits": [
        "Custom branding",
        "Multiple paper grades",
        "Various handle styles",
        "Custom dimensions",
        "Recyclable options",
        "Retail-ready presentation"
      ],
      "applications": [
        "Retail stores",
        "Restaurants",
        "Bakeries",
        "Grocery stores",
        "Clothing stores",
        "Gift shops",
        "Food takeaway"
      ],
      "image": "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80",
      "heroImage": "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1800&q=85"
    },
    {
      "id": "stretch-shrink-films",
      "name": "Stretch and Shrink Films",
      "short": "Protective films for pallet wrapping and product bundling.",
      "description": "Packaging films designed for load stabilization, product bundling and protective wrapping.",
      "products": [
        "Hand Stretch Film",
        "Machine Stretch Film",
        "Shrink Film",
        "LDPE Shrink Film",
        "Pallet Wrapping Film",
        "Printed Shrink Film",
        "Bundling Film",
        "Protective Packaging Film"
      ],
      "benefits": [
        "Load stabilization",
        "Dust protection",
        "Flexible thickness options",
        "Secure transportation",
        "Multiple roll sizes",
        "Suitable for manual or machine use"
      ],
      "applications": [
        "Warehouses",
        "Logistics",
        "Manufacturing",
        "Beverage packaging",
        "Palletized goods",
        "Industrial shipping"
      ],
      "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      "heroImage": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85"
    },
    {
      "id": "plastic-liners",
      "name": "Plastic Liners",
      "short": "Protective liners for containers, sacks and industrial packaging.",
      "description": "Polyethylene liners and bags for moisture protection, contamination control and inner packaging.",
      "products": [
        "LDPE Liners",
        "HDPE Liners",
        "PP Liners",
        "Box Liners",
        "Woven Sack Liners",
        "Industrial Plastic Liners",
        "Heavy-Duty Garbage Bags",
        "Custom Poly Bags",
        "Inner Packaging Bags"
      ],
      "benefits": [
        "Custom thickness",
        "Multiple material options",
        "Moisture protection",
        "Custom dimensions",
        "Flexible packaging formats",
        "Industrial-use options"
      ],
      "applications": [
        "Chemical packaging",
        "Food ingredient storage",
        "Industrial containers",
        "Agriculture",
        "Warehousing",
        "Manufacturing"
      ],
      "image": "https://images.unsplash.com/photo-1706881812145-61f38a1d431c?auto=format&fit=crop&w=800&q=80",
      "heroImage": "https://images.unsplash.com/photo-1706881812145-61f38a1d431c?auto=format&fit=crop&w=1800&q=85"
    }
  ]

export const categoryBySlug = (slug) => CATEGORIES.find((c) => c.id === slug);
