import { MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"
import type { Product } from "../types"

export function ProductCard({ product, highlight = false }: { product: Product; highlight?: boolean }) {
  return (
    <article
      id={product.id}
      className={`scroll-mt-28 overflow-hidden rounded-2xl border bg-card shadow-lg ${
        highlight ? "border-red ring-1 ring-red/40" : "border-white/10"
      }`}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-black/10" />
        {product.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-red px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            Destacado
          </span>
        )}
      </div>

      <div className="space-y-3 p-4">
        <div>
          <h3 className="font-display text-xl uppercase leading-tight text-cream">{product.name}</h3>
          <p className="mt-1 text-sm text-muted">{product.description}</p>
        </div>

        <Link
          to={`/consulta?producto=${product.id}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red px-4 py-2.5 font-display text-sm uppercase tracking-wider text-white transition hover:bg-red-2"
        >
          <MessageCircle className="h-4 w-4" />
          Consultar por WhatsApp
        </Link>
      </div>
    </article>
  )
}
