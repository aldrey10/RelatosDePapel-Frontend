import { createContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext(null);

const STORAGE_KEY = "cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const api = useMemo(() => {
    const add = (book) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.id === book.id);
        if (existing) {
          return prev.map((i) =>
            i.id === book.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prev, { ...book, quantity: 1 }];
      });
    };

    const removeItem = (id) => {
      setItems((prev) => prev.filter((i) => i.id !== id));
    };

    const removeOne = (id) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.id === id);
        if (!existing) return prev;
        if (existing.quantity === 1) return prev.filter((i) => i.id !== id);

        return prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i));
      });
    };

    const clear = () => setItems([]);

    const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);
    const totalPrice = items.reduce((acc, i) => acc + i.quantity * i.price, 0);

    return { items, add, removeItem, removeOne, clear, totalItems, totalPrice };
  }, [items]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}
