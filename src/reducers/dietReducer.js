export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_DIETS":
            return [...action.payload]
        case "ADD_DIETS":
            return [...state, action.payload]
        case "DELET_DIET":
            let newDiets = state.filter(diet => diet.id !== action.payload)
            return [...newDiets]
        case "EDIT_DIET":
            // debugger
            let newDiet = state.diets.map(diet => {
                if (diet.id === action.payload.id) {
                    return action.payload
                } else {
                    return diet
                }
            })
            return { ...state, diets: newDiet }
        // return state.map((diet) => diet.id === action.id ? { ...diet, editing: !diet.editing } : diet)
        // const updateUser = action.payload;

        // const updateUsers = state.users.map(user => {
        //     if (user.id === updateUser.id) {
        //         return updateUser;
        //     }
        //     return user;
        // })
        // return {
        //     ...state,
        //     users: updateUsers
        // }
        case "ADD_COMMENTS":
            let diets = state.diets.map(diet => {
                if (diet.id === action.payload.id) {
                    return action.payload
                } else {
                    return diet
                }
            })
            return { ...state, diets: diets }
        default:
            return state
    }
}