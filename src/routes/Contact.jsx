import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleBackToApp = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Contact</h2>
      <p>Contact us here.</p>
      <button onClick={handleBackToApp}>Back to App</button>
    </div>
  );
};

export default Contact;
