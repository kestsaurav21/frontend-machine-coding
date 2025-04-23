import React from "react";

const Profile = ({ formData, setFormData, errors }) => {
  const updateData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="form">
      <div className="field">
        <label>Name : </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={updateData}
        />
        {errors.name && <span className="errors">{errors.name}</span>}
      </div>
      <div className="field">
        <label>Age : </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={updateData}
        />
        {errors.age && <span className="errors">{errors.age}</span>}
      </div>
      <div className="field">
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={updateData}
        />
        {errors.email && <span className="errors">{errors.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
