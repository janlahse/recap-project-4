import "./ColorForm.css";
import { ColorInput } from "../ColorInput/ColorInput";

export function ColorForm({ onHandleSubmit, onCancle, color }) {
  return (
    //when no color parameter is passed the colorForm is in add mode, presenting default prefills
    //and the corresponding button.
    //when a color parameter is passed the colorForm is in edit mode and the inputs are prefilled
    //with the corresponding color properties.
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        name="role"
        defaultValue={color ? color.role : "ColorName"}
      ></input>
      <ColorInput
        labelName="Hex-Code:"
        id="hex"
        defaultColor={color ? color.hex : "#224477"}
      />
      <ColorInput
        labelName="Contrast Text:"
        id="contrast"
        defaultColor={color ? color.contrastText : "#ffffff"}
      />
      {!color ? (
        <button type="submit">Add Color</button>
      ) : (
        <>
          <input type="hidden" name="id" value={color.id} />
          <div className="update-buttons-container">
            <button onClick={onCancle}>Cancel</button>
            <button type="submit">Update Color</button>
          </div>
        </>
      )}
    </form>
  );
}
