import "./Login.css";
import { Card, Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Login() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  const alternar = resultado.alternar;

  let iconeBtn = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png";
  if (temaEscuro) {
    iconeBtn = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
  }

  return (
    <div id="login" className={temaEscuro ? "bg-danger text-dark" : "bg-light text-dark"}>
      <Card style={{ width: "25rem" }}>
        <Card.Header>
          <h2 className="text-center">Login</h2>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Label className="mt-3" htmlFor="email">E-mail</Form.Label>
            <Form.Control type="email" id="email" placeholder="Entre com e-mail" />
            <Form.Label className="mt-3" htmlFor="senha">Senha</Form.Label>
            <Form.Control type="password" id="senha" placeholder="Entre com senha" />
            <Button className="w-100 mt-3">Enviar</Button>
            <Button className="w-100 mt-3">Cadastre-se</Button>
            <Button className="w-100 mt-3" onClick={alternar}><img src={iconeBtn} width="16" />
              Alternar cor de Tema
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
