import './Book.scss'
import { FaTruck } from 'react-icons/fa'
import books from "../../../data/books.json"
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useCart } from '../../hooks/useCart'

export default function Book() {
  const { code } = useParams()
  const book = books.find((b) => String(b.code) === code)
  const navigate = useNavigate()
  const { add } = useCart();

  const handleGoBack = () => {
    navigate(-1)
  }

  if (!book) {
    return <p>Libro no encontrado</p>
  }

  return (
    <div className="book">
      <Button variant="outline-dark" onClick={handleGoBack}>
        Volver
      </Button>

      <div className="book__main">
        <div className="book__details">
          <div className="book__image">
            <img src={book.imageUrl} alt={book.title} loading="lazy" />
          </div>

          <div className="book__info">
            <h1 className="book__title">{book.title}</h1>
            <p className="book__author">por {book.author}</p>

            <div className="book__stock">
              <FaTruck className="book__stock-icon" />
              <span>
                {book.stock} {book.stock > 1 ? 'unidades' : 'unidad'} disponibles
              </span>
            </div>

            <p className="book__price">${book.price}</p>
            <p className="book__format">Formato: {book.format}</p>

            <Button variant='primary' onClick={() => add(book)}>
              Agregar al carrito
            </Button>
          </div>
        </div>

        <div className="book__description">
          <h2 className="book__description-title">Descripción</h2>
          <p className="book__description-text">{book.description}</p>
        </div>
      </div>
    </div>
  )
}
