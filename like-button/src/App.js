import { useState } from "react";
import "./styles.css";

export default function App() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const buttonStyle = {
    border: hovered
      ? "2px solid red"
      : clicked
      ? "2px solid red"
      : "2px solid gray",
    borderRadius: "40px",
    color: clicked ? "white" : hovered ? "red" : "gray",
    backgroundColor: clicked ? "red" : "white",
    padding: "10px 15px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const handleClick = () => {
    setClicked(clicked === false ? true : false);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={buttonStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        <span>{clicked ? "🤍" : "❤️"} </span>
        Like
      </button>
    </div>
  );
}
