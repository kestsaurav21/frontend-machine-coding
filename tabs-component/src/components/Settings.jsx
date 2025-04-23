import React from "react";

const Settings = ({ formData, setFormData, errors }) => {
  const { theme } = formData;

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      theme: e.target.name,
    }));
  };

  return (
    <div className="checkbox-container">
      <div className="check-items">
        <label>
          <input
            type="radio"
            name="DARK"
            checked={theme === "DARK"}
            onChange={handleChange}
          />
          Dark Theme
        </label>
      </div>
      <div className="check-items">
        <label>
          <input
            type="radio"
            name="LIGHT"
            checked={theme == "LIGHT"}
            onChange={handleChange}
          />
          Light Theme
        </label>
      </div>

      {errors.theme && <span className="errors">{errors.theme}</span>}
    </div>
  );
};

export default Settings;
