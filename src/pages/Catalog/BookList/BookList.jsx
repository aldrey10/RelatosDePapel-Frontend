import { useMemo, useState } from "react";
import BookCard from "../BookCard/BookCard";
import booksData from "../../../../data/books.json";
import BookFilter from "../BookFilter/BookFilter";
import "./BookList.scss";


export default function BookList({ }) {
  
    // const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState("");

    const filteredBooks = useMemo(() => {
        const query = filter.toLowerCase();

        return booksData.filter((book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.code.toLowerCase().includes(query)
        );
    }, [filter]);


    const handleAddToCart = (book) => {
        // setCart((prev) => {
        // // Si quieres evitar duplicados:
        // const exists = prev.some((b) => b.id === book.id);
        // if (exists) return prev;
        // return [...prev, book];
        // });
    };

    const handleNavigateToDetails = (book) => {
        // Navegar a la página de detalles del libro
    };
    

    return (
        <>
            <BookFilter value={filter} onChange={setFilter} />
            <div className="book-list">
                {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} onAddToCart={handleAddToCart} onNavigateToDetails={handleNavigateToDetails} />
                ))}
            </div>
        </>
    )
}