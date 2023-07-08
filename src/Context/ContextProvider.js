import React, { createContext, useState } from 'react'
import { cuisineData, restaurantsData } from '../Data/Data'

export const contextData = createContext()

const ContextProvider = ({ children }) => {
   const [cuisineArr, setcuisineArr] = useState(cuisineData)
   const [restaurantArr, setrestaurantArr] = useState(restaurantsData)
   const [filterCuisineId, setfilterCuisineId] = useState("")

   const filterFunc = () =>{
    const filteredRestaurant = filterCuisineId ? restaurantArr.filter(item => item.cuisine_id === filterCuisineId) : restaurantArr
    return filteredRestaurant
   }
   
  
    return (
        <contextData.Provider value={{cuisineArr, restaurantArr, setfilterCuisineId, filterFunc}} >{children}</contextData.Provider>
    )
}

export default ContextProvider