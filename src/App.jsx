import { initialColors } from "./lib/colors";
import { ColorForm } from "./Components/ColorForm/ColorForm";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  const [allColors, setAllColors] = useLocalStorageState("allColors", {
    defaultValue: initialColors,
  });

  function handleAdd(event) {
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

  function handleDelete(id) {
    setAllColors(allColors.filter((color) => color.id !== id));
  }

  function handleEdit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setAllColors(
      allColors.map((color) => {
        return color.id == data.id
          ? {
              id: data.id,
              role: data.role,
              hex: data.hex,
              contrastText: data.contrast,
            }
          : color;
      })
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onHandleSubmit={handleAdd} />
      {allColors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDelete}
            onHandleEdit={handleEdit}
          />
        );
      })}
      {allColors.length == 0 && (
        <p className="empty-theme-text">
          No colors in this theme ... go ahead and add one!
        </p>
      )}
    </>
  );
}

export default App;
