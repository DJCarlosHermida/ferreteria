import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Catalog } from "./pages/Catalog"
import { Home } from "./pages/Home"
import { Inquiry } from "./pages/Inquiry"

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/consulta" element={<Inquiry />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
