import BookCard from "../BookCard/BookCard";
import BookFilter from "../BookFilter/BookFilter";
import "./BookList.scss";
import { useBooks } from "../../../hooks/useBooks.js";
import { useCart } from "../../../hooks/useCart.js";
import { useNavigate } from "react-router-dom";


export default function BookList({ }) {
  
    const { books, filter, setFilter } = useBooks();
    const { add } = useCart();
    const navigate = useNavigate();


    const handleAddToCart = (book) => {
        add(book);
    };

    const handleNavigateToDetails = (book) => {
        navigate(`/book/${book.code}`);
    };
    

    return (
        <>
            <BookFilter value={filter} onChange={setFilter} />
            <div className="book-list">
                {books.map((book) => (
                <BookCard key={book.id} book={book} onAddToCart={handleAddToCart} onNavigateToDetails={handleNavigateToDetails} />
                ))}
            </div>
        </>
    )
}