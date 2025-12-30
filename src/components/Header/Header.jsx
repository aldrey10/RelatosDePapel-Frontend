import "./Header.scss";
import { Badge, Button } from "react-bootstrap";
import { useCart } from "../../hooks/useCart.js";
import CartDrawer from "../../pages/Cart/CartDrawer.jsx";
import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Header() {
  const { totalItems } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <header className="app-header">
        <div className="app-header__left">
          <img src={logo} alt="Relatos de Papel" className="app-header__logo" />
          <span className="app-header__title">Relatos de papel</span>
        </div>

        <div className="app-header__right">
          <Button
            variant="outline-dark"
            className="app-header__cart-button"
            onClick={() => setShowCart(true)}
          >
            <i className="bi bi-cart3"></i>
            {totalItems > 0 && (
              <Badge bg="danger" pill className="app-header__badge">
                {totalItems}
              </Badge>
            )}
          </Button>
        </div>
      </header>

      <CartDrawer show={showCart} onClose={() => setShowCart(false)} />
    </>
  );
}
