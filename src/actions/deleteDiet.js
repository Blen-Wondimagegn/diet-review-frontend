export const deleteDiet = (dietId) => {
  //  debugger
  return (dispatch) => {
    return fetch(`http://localhost:3000/diets/${dietId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((diet) => {
        dispatch({ type: "DELET_DIET", payload: diet.id });
      });
  };
};
