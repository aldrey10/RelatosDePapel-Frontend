import { Link } from "react-router-dom";
import "./Header.scss";
import { Button } from "react-bootstrap";

export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header__left">
        Relatos de Papel
      </div>

      <div className="app-header__right">
        <Button variant="outline-dark" className="app-header__cart-button">
            <i className="bi bi-cart3"></i>
            <span className="ms-1">2</span>
        </Button>
      </div>
    </header>
  );
}
