import React, { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    interest: ["Coding", "Music"],
    theme: "",
  });

  const [errors, setErrors] = useState({});

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};

        if (!formData.name || formData.name.length < 3) {
          err.name = "Not a valid name!";
        }
        if (!formData.age || formData.age < 15) {
          err.age = "Age is not a valid!";
        }
        if (!formData.email || !formData.email.includes("@")) {
          err.email = "Invalid email!";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },

    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (formData.interest.length < 1) {
          err.interest = "Please select atleast one category.";
        }

        setErrors(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        const err = {};
        if (!formData.theme) {
          err.theme = "Please select theme.";
        }
        setErrors(err);
        return err.theme ? false : true;
      },
    },
  ];

  const ActiveComponent = tabs[activeTab].component;

  const selectedTab = (idx) => {
    setActiveTab(idx);
  };

  const handlePrev = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    if (tabs[activeTab].validate()) {
      console.log(formData);
    }
  };

  return (
    <>
      <div className="tabs-container">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className="tabs-heading"
            onClick={() => selectedTab(idx)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="form-container">
        <ActiveComponent
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrev}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </>
  );
};

export default TabForm;
