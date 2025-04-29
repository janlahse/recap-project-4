import "./ColorInput.css";

export function ColorInput({ labelName, id }) {
  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <div className="color-input-container">
        <input id={id} name={id} className="color-text-input"></input>
        <input
          name={id}
          type="color"
          className="color-picker"
          value="#113377"
        ></input>
      </div>
    </>
  );
}
