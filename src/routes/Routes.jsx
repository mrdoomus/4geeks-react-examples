import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as BrowserRoutes,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Terry from "./Terry";
import Students from "./Students";

function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <BrowserRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terry" element={<Terry />} />
          {/* Modify the About route to include a parameter */}
          <Route path="/about/:name" element={<About />} />
          <Route path="/student/:id/:name" element={<Students />} />
          <Route path="*" element={<NotFound />} />
        </BrowserRoutes>
      </div>
    </Router>
  );
}

export default Routes;
