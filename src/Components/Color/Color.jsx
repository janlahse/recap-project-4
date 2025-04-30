import { useState } from "react";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { ColorForm } from "../ColorForm/ColorForm";
import "./Color.css";
import { CopyToClipboardButton } from "../CopyToClipboardButton/CopyToClipboardButton";

export default function Color({ color, onDelete, onHandleEdit }) {
  const [editMode, setEditMode] = useState(false);

  function handleCancle() {
    setEditMode(false);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <div className="hex-copy-container">
        <h3 className="color-card-headline">{color.hex}</h3>
        <CopyToClipboardButton text={color.hex} />
      </div>
      <h4>{color.role}</h4>
      <p>Contrast: {color.contrastText}</p>
      {editMode === false ? (
        <>
          <button onClick={() => setEditMode(true)}>Edit</button>
          <DeleteButton onDelete={() => onDelete(color.id)} />
        </>
      ) : (
        <ColorForm
          onCancle={handleCancle}
          onHandleSubmit={(event) => {
            onHandleEdit(event);
            handleCancle();
          }}
          color={color}
        />
      )}
    </div>
  );
}
