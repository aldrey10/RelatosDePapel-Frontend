import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Header from "./components/Header/Header.jsx";
import "./index.scss";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Book from "./pages/Book/Book.jsx";

export default function App() {

  const location = useLocation();
  const hideHeader = location.pathname === "/login";

  return (
    <>
      {!hideHeader && <Header />}
      <main className="headerMargin">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/book/:code" element={<Book />} />

          <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>

      </main>
    </>
  );
}
