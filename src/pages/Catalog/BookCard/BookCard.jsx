import Button from "react-bootstrap/Button";
import "./BookCard.scss";

export default function BookCard({ book, onAddToCart, onNavigateToDetails }) {
  return (
    <article className="book-card">
      <span className="book-card__type">
        {book.format === "DIGITAL" ? "Digital" : "Físico"}
      </span>

      <div className="book-card__image">
        <img src={book.imageUrl} alt={book.title} loading="lazy" />
      </div>

      <div className="book-card__content">
        <div className="book-card__info">
          <p className="book-card__title">{book.title}</p>
          <p className="book-card__author">{book.author}</p>
        </div>

        <div className="book-card__footer">
          <span className="book-card__price">{book.price} €</span>

          <Button
            className="book-card__button"
            variant="primary"
            onClick={() => onAddToCart?.(book)}
          >
            Agregar al carrito
          </Button>
          <Button variant="outline-dark">Ver detalles</Button>
        </div>
      </div>
    </article>
  );
}
