export const fetchDiets = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/diets')
            .then(resp => resp.json())
            .then(diets => {
                dispatch({ type: "FETCH_DIETS", payload: diets })
            })
    }
}
