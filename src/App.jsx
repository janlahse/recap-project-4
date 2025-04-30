import { initialColors } from "./lib/colors";
import { ColorForm } from "./Components/ColorForm/ColorForm";
import { uid } from "uid";
import { useState } from "react";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  const [allColors, setAllColors] = useState(initialColors);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setAllColors([
      {
        id: uid(),
        role: data.role,
        hex: data.hex,
        contrastText: data.contrast,
      },
      ...allColors,
    ]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onHandleSubmit={handleSubmit} />
      {allColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
