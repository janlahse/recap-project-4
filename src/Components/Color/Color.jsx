import { useState } from "react";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { ColorForm } from "../ColorForm/ColorForm";
import "./Color.css";

export default function Color({ color, onDelete, onEdit }) {
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
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {editMode === false ? (
        <>
          <button onClick={() => setEditMode(true)}>EDIT</button>
          <DeleteButton onDelete={() => onDelete(color.id)} />
        </>
      ) : (
        <ColorForm onHandleSubmit={onEdit} onCancle={handleCancle} />
      )}
    </div>
  );
}
