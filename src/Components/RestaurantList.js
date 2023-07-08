import React, { useContext } from 'react'
import { contextData } from '../Context/ContextProvider'
import RestaurantCard from './RestaurantCard'
import "../Style/RestaurantList.css"

const RestaurantList = () => {
    const { restaurantArr } = useContext(contextData)
    return (
        <div>
            {restaurantArr?.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>Dishes by {item.name}</h1>
                        <div className='menu-wrapper'>
                            {item.menu.map(item =><RestaurantCard item={item} />)}
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default RestaurantList