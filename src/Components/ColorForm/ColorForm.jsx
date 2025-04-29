import "./ColorForm.css";
import { ColorInput } from "../ColorInput/ColorInput";

export function ColorForm({ onHandleSubmit }) {
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
      <button type="submit">Add Color</button>
    </form>
  );
}
