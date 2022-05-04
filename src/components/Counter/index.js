import React, { useState } from "react";
import "./styles.css";

export default function Counter() {
  const [number, setNumber] = useState(0);

  function getModifier(type) {
    if (type === "increment") setNumber(number + 1);
    if (type === "decrement") setNumber(number - 1);
  }

  function returnColor() {
    if(number > 0) return "green"
    if(number < 0) return "red"
    return "black"
    }
  

  return (
    <div className="containerCounter">
      <p className="showNumber" style={{color:returnColor()}}>{number}</p>

      <div className="buttons">
        <button className="increment" onClick={() => getModifier("increment")}>
          Incrementar
        </button>
        <button className="decrement" onClick={() => getModifier("decrement")}>
          Decrementar
        </button>
      </div>
    </div>
  );
}
