import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoD.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function CompFilhoD() {

  const resultado = useContext(BatataContext);

  return (
    <div className="filho-d">
      <h3>FILHO D</h3>
      <p>
        <BatataContext.Provider>
          <p>
            <b>Apenas um ingrediente: </b>
            {resultado}
          </p>
        </BatataContext.Provider>
      </p>
      <div className="card-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.unimed.coop.br/documents/20182/16601353/tipos_batatadoce.jpg/dc050ada-1403-4b5d-927f-e44a0126722e?t=1652736597337" />
        <Card.Body>
          <Card.Title>Só Observe</Card.Title>
          <Card.Text>
           para essa receita só precisa desse ingrediente
          </Card.Text>
          <Button variant="primary">Já quero</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.unimed.coop.br/documents/20182/16601353/tipos_batatadoce.jpg/dc050ada-1403-4b5d-927f-e44a0126722e?t=1652736597337" />
        <Card.Body>
          <Card.Title>Só Observe</Card.Title>
          <Card.Text>
           para essa receita só precisa desse ingrediente
          </Card.Text>
          <Button variant="primary">Já quero</Button>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}
