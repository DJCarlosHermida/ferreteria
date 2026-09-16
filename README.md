# Demo Ferretería

Vidriera digital para una ferretería o barraca. El cliente recorre el catálogo y consulta precio, stock o entrega por WhatsApp.

> Es una maqueta para mostrar a locales. Marca, zona, horarios y productos son de ejemplo y se cambian en un solo archivo.

---

## Qué resuelve

Muchas consultas llegan por teléfono o WhatsApp sin foto ni referencia clara. Esta demo muestra el catálogo y ordena la consulta antes de que llegue al negocio.

1. El cliente entra al sitio
2. Recorre las categorías o busca un producto
3. Consulta precio o disponibilidad
4. Envía la consulta ya armada por WhatsApp

Sin backend, sin login y sin e-commerce completo. WhatsApp sigue siendo el canal.

## Funciona así

| Paso | Ruta | Qué pasa |
| --- | --- | --- |
| Inicio | `/` | Marca, rubros y cómo consultar |
| Catálogo | `/catalogo` | Productos filtrables y buscador |
| Consulta | `/consulta` | Formulario y envío a WhatsApp |

También incluye:

- Horario abierto/cerrado según Montevideo (lun–vie 8–18, sáb 8–13)
- Aviso de entrega a domicilio
- Consulta fuera de horario: el mensaje lo aclara, pero igual se puede enviar

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- React Router 7
- Lucide para iconos
- Consultas vía [wa.me](https://faq.whatsapp.com/591339475566160)
- Hosting en Vercel

SPA: las rutas las resuelve el cliente. En Vercel, `vercel.json` reescribe todo a `index.html`.

## Personalizar para un local

Todo lo comercial vive en [`src/data/catalog.ts`](src/data/catalog.ts):

```ts
export const BRAND = {
  name: "NOMBRE",
  tagline: "SLOGAN",
  zone: "Barrio de ejemplo",
  hoursLabel: "Lunes a viernes · 8:00 a 18:00 hs · Sábados 8:00 a 13:00 hs",
  phoneDisplay: "091 332 854",
  whatsappE164: "59891332854",
  timezone: "America/Montevideo",
}
```

Ahí mismo se editan categorías, productos e imágenes.

## Desarrollo local

Hace falta Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre [http://localhost:5175](http://localhost:5175).

```bash
npm run build
npm run preview
```
# ferreteria
