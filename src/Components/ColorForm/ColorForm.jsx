import "./ColorForm.css";
import { ColorInput } from "../ColorInput/ColorInput";

export function ColorForm({ onHandleSubmit, mode, onCancle }) {
  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="role">Role:</label>
      <input id="role" name="role" defaultValue="ColorName"></input>
      <ColorInput labelName="Hex-Code:" id="hex" defaultColor="#224477" />
      <ColorInput
        labelName="Contrast Text:"
        id="contrast"
        defaultColor="#ffffff"
      />
      {mode === "add" ? (
        <button type="submit">Add Color</button>
      ) : (
        <div className="update-buttons-container">
          <button onClick={onCancle}>CANCEL</button>
          <button type="submit">UPDATE COLOR</button>
        </div>
      )}
    </form>
  );
}
