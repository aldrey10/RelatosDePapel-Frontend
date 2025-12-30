import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export default function Login ({  }) {

    const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/catalog");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    navigate("/catalog");
  };

  return (
    <div className="login">
      <div className="login__card">
        <h2 className="login__title">Iniciar sesión</h2>

        <Form className="login__form">
          <Form.Group>
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="Usuario" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>

          <Button
            variant="dark"
            className="login__button"
            onClick={handleLogin}
          >
            Iniciar sesión
          </Button>
        </Form>

        <p className="login__hint">
          Accederás automáticamente en unos segundos…
        </p>
      </div>
    </div>
  );
    
}
