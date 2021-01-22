import React from "react";
import { connect } from "react-redux";
import { deleteDiet } from "../actions/deleteDiet";

const DietItem = ({ diet, deleteDiet }) => {
  return (
    <div className="card">
      <div className="card-content rg">
        <h1> My Name is {diet.name}</h1>
        <br />
        <p>
          I am a {diet.age} years old {diet.gender} {diet.height}, tall.
          <br />
          The type of Diet I follwed is called {diet.diet_type} <br />
          My start weight was {diet.start_weight} lbs. <br />I lost{" "}
          {diet.lost_weight} lbs with in {diet.duration}.<br />
        </p>
        <button onClick={() => deleteDiet(diet.id)}>DELET</button>{" "}
      </div>
    </div>
  );
};

export default connect(null, { deleteDiet })(DietItem);
