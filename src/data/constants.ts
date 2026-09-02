/* ----------------------------------------------------------------- data --- */

export const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "clients", label: "Clients" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { value: "150+", label: "Equipment units in fleet" },
  { value: "26", label: "Blue-chip industrial clients" },
  { value: "6", label: "Integrated service lines" },
]

export const SERVICES = [
  {
    id: "equipment",
    n: "01",
    title: "Equipment Rental",
    tag: "Rent with confidence, build with excellence",
    body: "A well-maintained fleet of high-performance machinery — from heavy earthmoving to lifting and material handling — with rigorous inspection and maintenance protocols on every unit.",
    img: "/images/services/equpment_rental.jpg",
    points: [
      "Earth moving equipment",
      "Lifting & cranes",
      "Power & portable machinery",
      "Transportation fleet",
    ],
    fleetCategories: [
      {
        cat: "Earth Moving",
        items: [
          "Backhoe Loaders",
          "Wheel Loaders",
          "Roller Compactor",
          "Rock Breakers",
          "Excavator",
          "Dump Truck",
          "Bulldozers",
          "Graders",
        ],
      },
      {
        cat: "Lifting & Rigging",
        items: [
          "Hydraulic Cranes",
          "Crawler Cranes",
          "Boom Trucks",
          "Articulated Manlift",
          "Telescopic Manlift",
          "Mobile Cranes",
          "Tower Cranes",
          "Telehandlers",
          "Forklifts",
        ],
      },
      {
        cat: "Heavy Transportation Fleet",
        items: [
          "Hydraulic Low Bed Trailers",
          "Flat Bed Trailers",
          "55 Seated Bus",
          "33 Seated Coaster",
          "15 Seated Hi Ace",
          "Pickups, SUVs & Sedan",
          "Diana Truck",
          "Lorry Truck",
        ],
      },
      {
        cat: "Power & Portable",
        items: [
          "Air Compressors",
          "Welding Machines",
          "Power Generators",
          "Tower Lights",
        ],
      },
    ],
  },
  {
    id: "manpower",
    n: "02",
    title: "Manpower Supply",
    tag: "Skilled, dependable, deployment-ready",
    body: "Certified, screened and continuously trained professionals across every discipline — engineered for reliability, precision and safety on industrial sites.",
    img: "https://images.unsplash.com/photo-1759922378219-1d31edb644f4?w=1200&h=900&fit=crop&auto=format",
    points: [
      "Certified welders & riggers",
      "QC inspectors & engineers",
      "Equipment operators",
      "Structural fabricators",
    ],
    fleetCategories: [
      {
        cat: "Equipment & Fleet Operators",
        items: [
          "Certified Crane Operators (TUV/Aramco)",
          "Heavy Earthmoving Machinery Operators",
          "Forklift & Telehandler Operators",
          "Certified Riggers (Level I, II & III)",
          "Licensed Heavy Vehicle Drivers",
        ],
      },
      {
        cat: "Technical & Industrial Trades",
        items: [
          "SMAW, GTAW & 6G Certified Welders",
          "Structural Steel & Pipe Fabricators",
          "Industrial Electricians & Instrumentation Techs",
          "QA/QC Inspectors & Safety Officers (NEBOSH/OSHA)",
          "Hydrotest Technicians & Blaster Painters",
        ],
      },
    ],
  },
  {
    id: "material",
    n: "03",
    title: "Material Supply",
    tag: "Sourcing materials, powering progress",
    body: "High-grade materials from structural steel to safety gear, backed by a resilient supply chain and on-time delivery that protects project integrity.",
    img: "/images/services/material_supply.jpg",
    points: [
      "Pipes, flanges & valves",
      "Tools & hardware",
      "Electrical & control gear",
      "Safety products",
    ],
    fleetCategories: [
      {
        cat: "Piping & Structural Materials",
        items: [
          "Seamless & ERW Carbon Steel Pipes",
          "Stainless Steel & Alloy Piping",
          "High-Pressure Flanges & Butt-Weld Fittings",
          "Gate, Globe, Check & Ball Valves",
          "Structural Beams (HEA, HEB, IPE, H-Beams)",
          "Chequered Plates, Angles & Channels",
        ],
      },
      {
        cat: "Tools, Safety & Electrical Supplies",
        items: [
          "Industrial Power Tools & Consumables",
          "Complete PPE & Site Safety Gear",
          "Medium & Low Voltage Armored Cables",
          "Switchgear, Panels & Explosion-Proof Enclosures",
          "Lifting Slings, Webbing & Certified Shackles",
        ],
      },
    ],
  },
  {
    id: "fabrication",
    n: "04",
    title: "Fabrication & Cabins",
    tag: "Built to standard, ready to move",
    body: "High-quality steel fabrication, pre-engineered structures and modular portable cabins — from storage units to full site offices, quick to install and mobilise.",
    img: "/images/services/fabrication.jpg",
    points: [
      "Structural steel fabrication",
      "Pre-engineered structures",
      "Portable site offices",
      "Modular storage units",
    ],
    fleetCategories: [
      {
        cat: "Modular Cabins & Site Facilities",
        items: [
          "Executive Site Office Cabins",
          "Modular Staff Accommodation Units",
          "Complete Ablution & Sanitary Containers",
          "Site Dining & Kitchen Facilities",
          "Heavy-Duty Security & Guard Cabins",
          "Secure Tool & Equipment Storage Units",
        ],
      },
      {
        cat: "Fabrication Capabilities",
        items: [
          "Custom Structural Steel Framing",
          "Pre-Engineered Building Frameworks",
          "Pipe Spools & Pressure Skids",
          "Storage Tanks & Silo Fabrication",
          "Grit Blasting & Multi-Coat Industrial Painting",
        ],
      },
    ],
  },
  {
    id: "logistics",
    n: "05",
    title: "Logistics Services",
    tag: "Seamless transport & supply chain",
    body: "A dedicated logistics network moving heavy equipment, bulk materials and warehousing with minimal delay — reliable, secure and optimised delivery.",
    img: "/images/services/logistic.jpeg",
    points: [
      "Heavy equipment transport",
      "Bulk material hauling",
      "Warehouse & storage",
      "Supply chain management",
    ],
    fleetCategories: [
      {
        cat: "Heavy Transportation Fleet",
        items: [
          "Hydraulic Multi-Axle Low Bed Trailers",
          "Flat Bed & Step Deck Transport Trailers",
          "Heavy Machinery Recovery & Boom Trucks",
          "Bulk Material Dump Trucks (16–32 CBM)",
          "Container Transporters & Curtain Siders",
        ],
      },
      {
        cat: "Personnel Fleet & Support Logistics",
        items: [
          "55-Seater Air Conditioned Worker Buses",
          "30/33-Seater Commercial Coasters",
          "15-Seater Hi-Ace Personnel Transporters",
          "4x4 Site Escort Pickups & SUVs",
          "Regional Hub Warehousing & Staging Yards",
        ],
      },
    ],
  },
];

export const OPERATIONS_SLIDES = [
  {
    id: "material",
    title: "Material Supply",
    img: "/images/services/material_supply.png",
    alt: "Industrial material supply and warehouse logistics",
  },
  {
    id: "fabrication",
    title: "Fabrication & Cabins",
    img: "/images/services/fabrication.png",
    alt: "Structural steel fabrication and portable site cabins",
  },
  {
    id: "logistics",
    title: "Logistics Services",
    img: "/images/services/logistics.png",
    alt: "Heavy transportation and logistics fleet operations",
  },
];

export const FLEET = [
  {
    cat: "Earth Moving",
    items: [
      "Backhoe Loaders",
      "Wheel Loaders",
      "Roller Compactor",
      "Rock Breakers",
      "Excavator",
      "Dump Truck",
      "Bulldozers",
      "Graders",
    ],
  },
  {
    cat: "Lifting",
    items: [
      "Hydraulic Cranes",
      "Crawler Cranes",
      "Boom Trucks",
      "Articulated Manlift",
      "Telescopic Manlift",
      "Mobile Cranes",
      "Tower Cranes",
      "Telehandlers",
      "Forklifts",
    ],
  },
  {
    cat: "Transportation",
    items: [
      "Hydraulic Low Bed Trailers",
      "Flat Bed Trailers",
      "55 Seated Bus",
      "33 Seated Coaster",
      "15 Seated Hi Ace",
      "Pickups, SUVs & Sedan",
      "Diana Truck",
      "Lorry Truck",
    ],
  },
  {
    cat: "Power & Portable",
    items: [
      "Air Compressors",
      "Welding Machines",
      "Power Generators",
      "Tower Lights",
    ],
  },
]

export const CLIENTS = [
  { name: "Saudi Aramco", logo: "/clients/aramco-logo--white.webp" },
  { name: "Doosan", logo: "/clients/dosan.png" },
  { name: "Petrojet", logo: "/clients/petrojet-logo-white.svg" },
  { name: "Petrofac", logo: "/clients/petrofac-logo-on-dark.webp" },
  { name: "Hanwha", logo: "/clients/hanwa.svg" },
  { name: "Sipchem", logo: "/clients/sipchem-white.svg" },
  {
    name: "Ma'aden",
    logo: "/clients/maaden_english_secondary_logo_rgb_white-gold.svg",
  },
  { name: "Saipem", logo: "/clients/sai-logo-full.08bef577.svg" },
  { name: "SASREF", logo: "/clients/sasref-logo-gray.png" },
  { name: "Técnicas Reunidas", logo: "/clients/Logo-TR-completo.svg" },
]
