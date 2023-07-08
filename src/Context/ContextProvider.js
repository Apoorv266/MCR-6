import React, { createContext, useEffect, useReducer, useState } from 'react'
import { initialData, reducerFunc } from '../Reducer/RestaurantReducer'

export const contextData = createContext()

const ContextProvider = ({ children }) => {
   const [initialState, dispatch] = useReducer(reducerFunc, initialData)
   const [filterCuisineId, setfilterCuisineId] = useState("")

   const filterFunc = () =>{
    const filteredRestaurant = filterCuisineId ? initialState.restaurantsData.filter(item => item.cuisine_id === filterCuisineId) : []
    return filteredRestaurant
   }

   useEffect(() => {
    dispatch({type : "CALC_AVG_RATING"})
   }, [])
   
  
    return (
        <contextData.Provider value={{ setfilterCuisineId, filterFunc, filterCuisineId, initialState, dispatch}} >{children}</contextData.Provider>
    )
}

export default ContextProvider