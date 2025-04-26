import React, { useState } from "react";

const InputChips = () => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setChips((prev) => [...prev, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleRemoveChip = (indexToRemove) => {
    setChips((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div>
        <h2>Chips Input</h2>
        <input
          type="text"
          placeholder="Type a chip and press Enter"
          className="input-box"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="chips-container">
        {chips.map((chip, idx) => (
          <span key={idx} className="chip-design">
            {chip}{" "}
            <span
              onClick={() => handleRemoveChip(idx)}
              className="remove"
              style={{ cursor: "pointer", marginLeft: "8px" }}
            >
              ×
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default InputChips;
