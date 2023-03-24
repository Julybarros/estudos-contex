import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoE.css";

export function CompFilhoE() {

const resultado = useContext(BatataContext);

  return (
  <div className="filho-e">
    <h3>FILHO E</h3>
    <p>
      <b>Só um teste: </b>
    {resultado}
    </p>
  </div>
  );
}
