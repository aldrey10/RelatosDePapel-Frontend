import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Header from "./components/Header/Header.jsx";
import "./index.scss";

export default function App() {
  return (
    <>
      <Header />
      <main className="headerMargin">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<Login />} />

          <Route path="/catalog" element={<Catalog />} />

          {/* 404 por si no encontramos página*/}
          <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>

      </main>
    </>
  );
}
