export type CategoryId = "herramientas" | "pinturas" | "electricidad" | "sanitarios" | "construccion"

export type InquiryTopic = "precio" | "stock" | "entrega" | ""

export type Product = {
  id: string
  name: string
  description: string
  category: CategoryId
  image: string
  featured?: boolean
}

export type InquiryForm = {
  name: string
  phone: string
  productId: string
  topic: InquiryTopic
  notes: string
}
