import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#00000");

  function generateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }

    setColor(hexColor);
    console.log(hexColor);
  }

  function generateRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") generateRgbColor();
    else generateHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        background: color,
      }}
      className="App"
    >
      <div>
        <button onClick={() => setTypeOfColor("hex")}>Enable HEX</button>
        <button onClick={() => setTypeOfColor("rgb")}>Enable RGB</button>
        <button
          onClick={typeOfColor === "hex" ? generateHexColor : generateRgbColor}
        >
          Generate Random Color
        </button>
      </div>
      <div>
        <h3>Color type : {typeOfColor}</h3>
        <h3>Color value: {color}</h3>
      </div>
    </div>
  );
}
