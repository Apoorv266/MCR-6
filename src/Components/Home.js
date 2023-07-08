import React, { useContext } from 'react'
import "../Style/Home.css"
import { contextData } from '../Context/ContextProvider'
import RestaurantList from './RestaurantList'


const Home = () => {
    const { setfilterCuisineId, filterCuisineId, initialState}= useContext(contextData)
    return (
        <div>
            <h1>Food Ordering App</h1>
            <h2>Select Cuisine</h2>
            <div className='cuisine-main'>
               {initialState?.cuisineData.map(({name, id}) => <button key={id} onClick={()=>setfilterCuisineId(id)} className={filterCuisineId === id ? 'cuisine-btn active-btn' : `cuisine-btn`}>{name}</button>)}
            </div>
            <RestaurantList/>
        </div>
    )
}

export default Home