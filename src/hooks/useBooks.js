import { useMemo, useState } from "react";
import booksData from "../../data/books.json";

export function useBooks() {
  const [filter, setFilter] = useState("");

  const books = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return booksData;

    return booksData.filter((b) => {
      const title = (b.title ?? "").toLowerCase();
      const author = (b.author ?? "").toLowerCase();
      const code = (b.code ?? "").toLowerCase();
      return title.includes(q) || author.includes(q) || code.includes(q);
    });
  }, [filter]);

  return { books, filter, setFilter };
}
