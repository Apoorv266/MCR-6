import React, { useContext } from 'react'
import "../Style/Home.css"
import { contextData } from '../Context/ContextProvider'
import RestaurantList from './RestaurantList'


const Home = () => {
    const {cuisineArr, setfilterCuisineId}= useContext(contextData)
    return (
        <div>
            <h1>Food Ordering App</h1>
            <h2>Select Cuisine</h2>
            <div className='cuisine-main'>
               {cuisineArr?.map(({name, id}) => <button key={id} onClick={()=>setfilterCuisineId(id)}>{name}</button>)}
            </div>
            <RestaurantList/>
        </div>
    )
}

export default Home