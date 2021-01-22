import React from "react";
import DietEdit from "../components/DietEdit";

const Diet = (props) => {
  console.log(props);
  let diet = props.diets.filter((diet) => diet.id == props.match.params.id)[0];

  console.log(diet);
  return (
    <div>
      <h2>
        {diet ? diet.name : null} - {diet ? diet.age : null} -{" "}
        {diet ? diet.height : null} - {diet ? diet.diet_type : null} -{" "}
        {diet ? diet.start_weight : null} - {diet ? diet.lost_weight : null} -{" "}
        {diet ? diet.duration : null}
      </h2>
      <h4>Edit Account</h4>
      <DietEdit diet={diet} />
    </div>
  );
};

export default Diet;
