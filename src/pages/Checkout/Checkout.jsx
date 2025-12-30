import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Checkout.scss";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import InfoModal from "./InfoModal";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, add, removeOne, removeItem, clear, totalItems, totalPrice } = useCart();

  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    if (items.length === 0) return;
    setShowModal(true);
  };

  const handleConfirm = () => {
    clear();
    setShowModal(false);
    navigate("/catalog", { replace: true });
  };

  return (
    <div className="checkout">
      <div className="checkout__header">
        <h2 className="checkout__title">Carrito</h2>

        <div className="checkout__actions">
          <Button variant="outline-secondary" onClick={() => navigate("/catalog")}>
            Seguir comprando
          </Button>

          <Button variant="outline-danger" onClick={clear} disabled={items.length === 0}>
            Vaciar
          </Button>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="checkout__empty">
          <p>No hay productos en el carrito.</p>
          <Button variant="dark" onClick={() => navigate("/catalog")}>
            Ir al catálogo
          </Button>
        </div>
      ) : (
        <>
          <div className="checkout__list">
            {items.map((item) => (
              <div key={item.id} className="checkout-item">
                <div className="checkout-item__img">
                  <img src={item.imageUrl} alt={item.title} />
                </div>

                <div className="checkout-item__info">
                  <p className="checkout-item__title">{item.title}</p>
                  <p className="checkout-item__author">{item.author}</p>
                  <p className="checkout-item__meta">
                    {item.format} · {item.code}
                  </p>
                </div>

                <div className="checkout-item__quantity">
                  <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={() => removeOne(item.id)}
                  >
                    −
                  </Button>

                  <span className="checkout-item__quantity-value">{item.quantity}</span>

                  <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={() => add(item)}
                  >
                    +
                  </Button>
                </div>

                <div className="checkout-item__price">
                  {(item.price * item.quantity).toFixed(2)} €
                </div>

                <div className="checkout-item__remove">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout__summary">
            <div className="checkout__totals">
              <span>Total artículos:</span>
              <strong>{totalItems}</strong>
            </div>
            <div className="checkout__totals">
              <span>Total:</span>
              <strong>{totalPrice.toFixed(2)} €</strong>
            </div>

            <Button onClick={handleCheckout} variant="dark" className="checkout__checkout">
              Tramitar pedido
            </Button>
          </div>
          <InfoModal showModal={showModal} handleConfirm={handleConfirm} />
        </>
      )}
    </div>
  );
}
