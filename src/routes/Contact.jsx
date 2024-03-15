// components/Contact.js
import React from "react";
import { navigate } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact us here.</p>
      <button onClick={() => navigate("/")}>Back to App</button>
    </div>
  );
};

export default Contact;
