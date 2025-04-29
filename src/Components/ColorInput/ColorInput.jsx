import { useState } from "react";
import "./ColorInput.css";

export function ColorInput({ labelName, id, defaultColor }) {
  const [color, setColor] = useState(defaultColor);

  function handleChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <div className="color-input-container">
        <input
          id={id}
          name={id}
          className="color-text-input"
          value={color}
          onChange={handleChange}
        ></input>
        <input
          name={id}
          type="color"
          className="color-picker"
          value={color}
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
}
