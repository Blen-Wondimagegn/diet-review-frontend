export const fetchDiets = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/diets')
            .then(resp => resp.json())
            .then(diets => {
                dispatch({ type: "FETCH_DIETS", payload: diets })
            })
    }
}

export const addDiet = diet => {
    return (dispatch) => {
        return fetch('http://localhost:3000/diets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ diet: diet })
        })
            .then(resp => resp.json())
            .then(diet => {
                dispatch({ type: "ADD_DIET", payload: diet })
            })
    }
}

export const deleteDiet = dietId => {
    //  debugger
    return (dispatch) => {
        return fetch(`http://localhost:3000/diets/${dietId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(diet => {
                dispatch({ type: "DELET_DIET", payload: diet.id })
            })
    }
}

export const editAccount = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/diets/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(diet => dispatch({ type: 'EDIT_DIET', payload: diet }))
    }

}