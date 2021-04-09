import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="row ">
      <div className="col s12 m7">
        <div className="card large deep-purple lighten-5 ">
          <div className="card-image">
            <div className="card-panel deep-purple lighten-5 ">
              <h1 className="center h4">Dieting...</h1>
            </div>
          </div>
          <div className="card-content ">
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
          <div className="card-action">
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
