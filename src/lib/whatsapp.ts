import { BRAND, getProduct } from "../data/catalog"
import type { InquiryForm } from "../types"

const TOPIC_LABEL = {
  precio: "Precio",
  stock: "Disponibilidad / stock",
  entrega: "Entrega a domicilio",
} as const

export function buildWhatsAppMessage(form: InquiryForm, closed: boolean): string {
  const product = form.productId ? getProduct(form.productId) : undefined
  const topic = form.topic ? TOPIC_LABEL[form.topic] : "Consulta general"

  return [
    `Consulta ${BRAND.type} ${BRAND.name}`,
    closed ? "(Consulta enviada fuera de horario)" : null,
    `Nombre: ${form.name.trim()}`,
    `Tel: ${form.phone.trim()}`,
    product ? `Producto: ${product.name}` : "Producto: (consulta general)",
    `Motivo: ${topic}`,
    form.notes.trim() ? `Detalle: ${form.notes.trim()}` : null,
  ]
    .filter((line): line is string => line !== null)
    .join("\n")
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsappE164}?text=${encodeURIComponent(message)}`
}

export function whatsappBlankUrl(): string {
  return `https://wa.me/${BRAND.whatsappE164}`
}
