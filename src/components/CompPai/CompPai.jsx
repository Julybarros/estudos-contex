import { useState } from "react";
import { CompFilhoA } from "../CompFilhoA/CompFilhoA";
import { CompFilhoB } from "../CompFilhoB/CompFilhoB";
import "./CompPai.css";
import { BatataContext } from "../../contexts/BatataContext";

export function CompPai() {
  const [batata, setBatata] = useState("Batatinha");

  function repetir() {
    setBatata(batata + " doce é bom");
  }

  // Props drilling = quando temos uma hierarquia
  // de componentes muito extensa para passar props
  // em cada componente

  return (
    <div className="pai">
      <h3>PAI</h3>
      <br />
      <button className="btn btn-dark" onClick={repetir}>Repetir</button>
      <p>
        <b>Valor:</b>
        {batata}
      </p>
      <BatataContext.Provider value={batata}>
        <CompFilhoA />
        <CompFilhoB />
      </BatataContext.Provider>
    </div >
  );
}
