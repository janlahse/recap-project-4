import "./ColorForm.css";

export function ColorForm() {
  return (
    <form>
      <label htmlFor="role">Role:</label>
      <input id="role" name="role"></input>
      <label htmlFor="hex">Hex-Code:</label>
      <div className="color-input-container">
        <input id="hex" name="hex" className="color-text-input"></input>
        <input type="color" className="color-picker"></input>
      </div>
      <label htmlFor="contrastText">Contrast Text:</label>
      <div className="color-input-container">
        <input
          id="contrastText"
          name="contrastText"
          className="color-text-input"
        ></input>
        <input type="color" className="color-picker"></input>
      </div>
      <button type="submit">Add Color</button>
    </form>
  );
}
