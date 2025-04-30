import { useState } from "react";
import "./DeleteButton.css";

export function DeleteButton({ id }) {
  const [confirm, setConfirm] = useState(false);

  function handleConfirm() {
    if (confirm === false) setConfirm(true);
    if (confirm === true) console.log(id);
  }

  return (
    <>
      {confirm === true && (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button onClick={() => setConfirm(false)}>CANCEL</button>
        </>
      )}
      <button onClick={handleConfirm}>DELETE</button>
    </>
  );
}
