import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoB.css";
import Carousel from 'react-bootstrap/Carousel';

export function CompFilhoB() {

  const resultado = useContext(BatataContext);

  return (
    <div className="filho-b">
      <h3>FILHO B</h3>
      <p>
        <BatataContext.Provider>
          <p>
            <b>Só pra constar: </b>
            {resultado}
          </p>
        </BatataContext.Provider>
      </p>
      <Carousel>
        <Carousel.Item>
          <img width={400}
            height={500}
            className="d-block w-100"
            src="https://imagens-revista.vivadecora.com.br/uploads/2019/08/A-beleza-majestosa-da-Rosa-do-Deserto.-Fonte-Pinterest.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={400}
            height={500}
            className="d-block w-100"
            src="https://i0.wp.com/aprenderaplantar.com.br/wp-content/uploads/2020/02/rosa-do-deserto1-1.jpg?fit=498%2C573&ssl=1"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={400}
            height={500}
            className="d-block w-100"
            src="https://imagens-revista.vivadecora.com.br/uploads/2018/05/vaso-grande-com-rosa-do-deserto-cor-de-rosa.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  );
}
