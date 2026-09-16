import type { CategoryId, Product } from "../types"

export const BRAND = {
  name: "NOMBRE",
  tagline: "SLOGAN",
  type: "Ferretería",
  zone: "Barrio de ejemplo",
  hoursLabel: "Lunes a viernes · 8:00 a 18:00 hs · Sábados 8:00 a 13:00 hs",
  delivers: true,
  phoneDisplay: "091 332 854",
  whatsappE164: "59891332854",
  timezone: "America/Montevideo",
} as const

export const SCHEDULE: ({ open: number; close: number } | null)[] = [
  null,
  { open: 8, close: 18 },
  { open: 8, close: 18 },
  { open: 8, close: 18 },
  { open: 8, close: 18 },
  { open: 8, close: 18 },
  { open: 8, close: 13 },
]

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "herramientas", label: "Herramientas" },
  { id: "pinturas", label: "Pinturas" },
  { id: "electricidad", label: "Electricidad" },
  { id: "sanitarios", label: "Sanitarios" },
  { id: "construccion", label: "Construcción" },
]

const img = (file: string) => `/img/catalogo/${file}`

export const PRODUCTS: Product[] = [
  {
    id: "taladro-800",
    name: "Taladro percutor 800 W",
    description: "Uso profesional y hogar. Mandril 13 mm, maletín incluido.",
    category: "herramientas",
    image: img("taladro-800.jpg"),
    featured: true,
  },
  {
    id: "amoladora-115",
    name: "Amoladora angular 115 mm",
    description: "Corte y desbaste. Empuñadura auxiliar y protector.",
    category: "herramientas",
    image: img("amoladora-115.jpg"),
  },
  {
    id: "llaves-combo",
    name: "Juego de llaves combinadas",
    description: "12 piezas, cromo vanadio, de 8 a 19 mm.",
    category: "herramientas",
    image: img("llaves-combo.jpg"),
  },
  {
    id: "martillo",
    name: "Martillo carpintero",
    description: "Cabeza forjada y mango antideslizante.",
    category: "herramientas",
    image: img("martillo.jpg"),
  },
  {
    id: "latex-20",
    name: "Látex interior 20 L",
    description: "Lavable, alto cubrimiento. Consultar colores en stock.",
    category: "pinturas",
    image: img("latex-20.jpg"),
  },
  {
    id: "esmalte-4",
    name: "Esmalte sintético 4 L",
    description: "Para madera y metal. Brillante o satinado.",
    category: "pinturas",
    image: img("esmalte-4.jpg"),
  },
  {
    id: "rodillo",
    name: "Kit rodillo y bandeja",
    description: "Rodillo 22 cm, bandeja plástica y recambio.",
    category: "pinturas",
    image: img("rodillo.jpg"),
  },
  {
    id: "cable-25",
    name: "Cable 2,5 mm",
    description: "Por metro. Consultar colores y rollos disponibles.",
    category: "electricidad",
    image: img("cable-25.jpg"),
  },
  {
    id: "termo-32",
    name: "Termomagnética 2x32 A",
    description: "Protección de circuitos. Marcas de línea.",
    category: "electricidad",
    image: img("termo-32.jpg"),
  },
  {
    id: "tomas",
    name: "Pack tomacorrientes",
    description: "Módulos 10 A con placa. Blanco o champagne.",
    category: "electricidad",
    image: img("tomas.jpg"),
  },
  {
    id: "pvc-110",
    name: "Caño PVC 110 mm",
    description: "Desagüe cloacal. Tramos y accesorios a medida.",
    category: "sanitarios",
    image: img("pvc-110.jpg"),
  },
  {
    id: "griferia",
    name: "Grifería para lavatorio",
    description: "Monocomando. Consultar modelos en exhibición.",
    category: "sanitarios",
    image: img("griferia.jpg"),
  },
  {
    id: "cemento-50",
    name: "Cemento 50 kg",
    description: "Bolsa estándar. Entrega según zona y cantidad.",
    category: "construccion",
    image: img("cemento-50.jpg"),
  },
  {
    id: "arena-25",
    name: "Arena bolsa 25 kg",
    description: "Para revoque y contrapisos. Stock según depósito.",
    category: "construccion",
    image: img("arena-25.jpg"),
  },
]

export const SPECIALTIES = [
  {
    id: "herramientas",
    label: "Herramientas",
    detail: "Eléctricas y manuales para obra y hogar",
    image: img("taladro-800.jpg"),
    to: "/catalogo?cat=herramientas",
    featured: true,
  },
  {
    id: "pinturas",
    label: "Pinturas",
    detail: "Látex, esmaltes y accesorios",
    image: img("latex-20.jpg"),
    to: "/catalogo?cat=pinturas",
    featured: false,
  },
  {
    id: "electricidad",
    label: "Electricidad",
    detail: "Cables, protecciones y tomas",
    image: img("cable-25.jpg"),
    to: "/catalogo?cat=electricidad",
    featured: false,
  },
  {
    id: "sanitarios",
    label: "Sanitarios",
    detail: "Caños, grifería y accesorios",
    image: img("griferia.jpg"),
    to: "/catalogo?cat=sanitarios",
    featured: false,
  },
] as const

export const FEATURES = [
  { id: "vidriera", title: "Vidriera digital", text: "Ves el rubro y el producto antes de escribir o llamar." },
  { id: "consulta", title: "Consulta ordenada", text: "El mensaje llega con el producto exacto ya identificado." },
  { id: "entrega", title: "Entrega a domicilio", text: `Consultá envío en ${BRAND.zone} según volumen y zona.` },
] as const

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((item) => item.id === id)
}
