import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import "./CartDrawer.scss";
import { useCart } from "../../hooks/useCart";

export default function CartDrawer({ show, onClose }) {
  const navigate = useNavigate();
  const { items, add, removeOne, removeItem, clear, totalItems, totalPrice } = useCart();

  const goToCheckout = () => {
    onClose?.();
    navigate("/checkout");
  };

  return (
    <Offcanvas show={show} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Carrito{" "}
          {totalItems > 0 && (
            <Badge bg="danger" pill>
              {totalItems}
            </Badge>
          )}
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="cart-drawer">
        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <p>No hay productos en el carrito.</p>
            <Button variant="dark" onClick={onClose}>
              Seguir comprando
            </Button>
          </div>
        ) : (
          <>
            <div className="cart-drawer__list">
              {items.map((item) => (
                <div key={item.id} className="cart-drawer__item">
                  <div className="cart-drawer__img">
                    <img src={item.imageUrl} alt={item.title} />
                  </div>

                  <div className="cart-drawer__info">
                    <div className="cart-drawer__title">{item.title}</div>
                    <div className="cart-drawer__meta">{item.author}</div>
                  </div>

                  <div className="cart-drawer__controls">
                    <div className="cart-drawer__quantity">
                      <Button
                        size="sm"
                        variant="outline-dark"
                        onClick={() => removeOne(item.id)}
                      >
                        −
                      </Button>

                      <span className="cart-drawer__quantity-value">{item.quantity}</span>

                      <Button
                        size="sm"
                        variant="outline-dark"
                        onClick={() => add(item)}
                      >
                        +
                      </Button>
                    </div>

                    <div className="cart-drawer__price">
                      {(item.price * item.quantity).toFixed(2)} €
                    </div>

                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-drawer__summary">
              <div className="cart-drawer__total">
                <span>Total</span>
                <strong>{totalPrice.toFixed(2)} €</strong>
              </div>

              <div className="cart-drawer__actions">
                <Button variant="outline-danger" onClick={clear}>
                  Vaciar
                </Button>
                <Button variant="dark" onClick={goToCheckout}>
                  Ir a checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
