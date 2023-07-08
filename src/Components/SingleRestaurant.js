import React, { useContext } from 'react'
import RestaurantDetail from './RestaurantDetail'
import "../Style/SingleRestaurant.css"
import RestaurantReview from './RestaurantReview'
import { Link, useParams } from 'react-router-dom'
import { contextData } from '../Context/ContextProvider'

const SingleRestaurant = () => {
    const {restaurantId} = useParams()
    const {initialState} = useContext(contextData)

    const obj = initialState?.restaurantsData?.find((item) => item.id === Number(restaurantId))
    const dishesArr = obj.menu.map(item =>item.name)
    const {ratings} = obj
    return (
        <>
        <Link to={"/"}>
        <img src="https://static.thenounproject.com/png/1410611-200.png" alt="" width={"50xp"} height={"50px"} className='back-btn'/>
        </Link>
        <div className='single-page-main'>
            <RestaurantDetail dishesArr={dishesArr} obj={obj}/>
            <h1>Review</h1>
            {ratings?.map((item, index) => <RestaurantReview item={item} key={index}/>)}
        </div>
        </>
    )
}

export default SingleRestaurant