import { cuisineData, restaurantsData } from "../Data/Data";

export const initialData = {
    restaurantsData: restaurantsData,
    cuisineData: cuisineData,
    modalId: ""
}

export const reducerFunc = (state, action) => {
    switch (action.type) {
        case "CALC_AVG_RATING":
            const calcAvg = (ratingArr) => {
                const ratingSum = ratingArr.reduce((acc, curr) => curr.rating + acc, 0)
                return ratingSum / ratingArr.length
            }
            const newArr = state.restaurantsData.map((item) => ({ ...item, averageRating: calcAvg(item.ratings).toFixed(1) }))
            return { ...state, restaurantsData: newArr }

        case "ADD_REVIEW":
            const uplodatedArr = state.restaurantsData.map((item) => item.id === state.modalId ? { ...item, ratings: [ ...item.ratings, action.payload ] } : item)
            return { ...state, restaurantsData: uplodatedArr }

        case "ADD_MODALID":
            return { ...state, modalId: action.payload }
        default:
            return state
    }
}