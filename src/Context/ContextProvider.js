import React, { createContext, useState } from 'react'
import { cuisineData, restaurantsData } from '../Data/Data'

export const contextData = createContext()

const ContextProvider = ({ children }) => {
   const [cuisineArr, setcuisineArr] = useState(cuisineData)
   const [restaurantArr, setrestaurantArr] = useState(restaurantsData)
  
    return (
        <contextData.Provider value={{cuisineArr, restaurantArr}}>{children}</contextData.Provider>
    )
}

export default ContextProvider