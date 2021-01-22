import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div class="row ">
      <div class="col s12 m7">
        <div class="card large deep-purple lighten-5 ">
          <div class="card-image">
            <div class="card-panel deep-purple lighten-5 ">
              <h4 className="center h4">HEALTHY MEALS</h4>
            </div>
          </div>
          <div class="card-content ">
            <p>
              Welcome to HEALTHY MEALS! Diet is established among the most
              important influences on health in modern societies. Injudicious
              diet figures among the leading causes of premature death and
              chronic disease. Optimal eating is associated with increased life
              expectancy, dramatic reduction in lifetime risk of all chronic
              disease, and amelioration of gene expression. In this context,
              claims abound for the competitive merits of various diets relative
              to one another.
            </p>
          </div>
          <div class="card-action">
            <NavLink to="/diets">
              Not Sure Where to start? Check Out these Diet Plans
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
