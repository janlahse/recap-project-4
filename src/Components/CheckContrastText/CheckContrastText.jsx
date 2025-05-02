import "./CheckContrastText.css";
import { useState } from "react";

export function CheckContrastText({ color }) {
  const [contrastCheck, setContrastCheck] = useState("");
  const [contrastTextClass, setcontrastTextClass] = useState(
    "contrast-checker-text"
  );

  async function checkContrast(color1, color2) {
    await fetch("https://www.aremycolorsaccessible.com/api/are-they", {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({ colors: [color1, color2] }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.overall === "Yup") {
          setContrastCheck("Good");
          setcontrastTextClass(
            "contrast-checker-text contrast-checker-text__good"
          );
        } else if (json.overall === "Kinda") {
          setContrastCheck("Mediocre");
          setcontrastTextClass(
            "contrast-checker-text contrast-checker-text__mediocre"
          );
        } else {
          setContrastCheck("Bad");
          setcontrastTextClass(
            "contrast-checker-text contrast-checker-text__bad"
          );
        }
      });
  }

  checkContrast(color.hex, color.contrastText);

  return (
    <p className={contrastTextClass}>Overall contrast score: {contrastCheck}</p>
  );
}
