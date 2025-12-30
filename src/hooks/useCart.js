import { useContext } from "react";
import { CartContext } from "../pages/Cart/CartContext.jsx";

export function useCart() {
  const ctx = useContext(CartContext);
  return ctx;
}
