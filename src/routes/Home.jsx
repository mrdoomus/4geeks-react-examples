// components/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <Link to="/">Back to App</Link>
    </div>
  );
};

export default Home;
