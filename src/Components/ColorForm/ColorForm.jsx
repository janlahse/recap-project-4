import "./ColorForm.css";
import { ColorInput } from "../ColorInput/ColorInput";

export function ColorForm() {
  return (
    <form>
      <label htmlFor="role">Role:</label>
      <input id="role" name="role"></input>
      <ColorInput labelName="Hex-Code:" id="hex-color" />
      <ColorInput labelName="Contrast Text:" id="contrast-text" />
      <button type="submit">Add Color</button>
    </form>
  );
}
