import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="container dark ">
        <NavLink to="/" className="brand-logo ">
          <h4> HEALTHY MEALS</h4>{" "}
        </NavLink>
        <ul className="right">
          <li>
            <NavLink to="/diets/new">
              <h6> Add Your Diet Plan</h6>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/diets">
              {" "}
              <h6> Check Out Diet Plans</h6>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
