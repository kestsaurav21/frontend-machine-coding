import React from "react";

const Interest = ({ formData, setFormData, errors }) => {
  const { interest } = formData;

  const handleChange = (e, name) => {
    setFormData((prevData) => ({
      ...prevData,
      interest: e.target.checked
        ? [...prevData.interest, e.target.name]
        : prevData.interest.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div className="checkbox-container">
      <div className="check-items">
        <label>
          <input
            type="checkbox"
            name="Cricket"
            checked={interest.includes("Cricket")}
            onChange={handleChange}
          />
          Cricket
        </label>
      </div>
      <div className="check-items">
        <label>
          <input
            type="checkbox"
            name="Football"
            checked={interest.includes("Football")}
            onChange={handleChange}
          />
          Football
        </label>
      </div>
      <div className="check-items">
        <label>
          <input
            type="checkbox"
            name="Coding"
            checked={interest.includes("Coding")}
            onChange={handleChange}
          />
          Coding
        </label>
      </div>
      <div className="check-items">
        <label>
          <input
            type="checkbox"
            name="Music"
            checked={interest.includes("Music")}
            onChange={handleChange}
          />
          Music
        </label>
      </div>

      {errors.interest && <span className="errors">{errors.interest}</span>}
    </div>
  );
};

export default Interest;
