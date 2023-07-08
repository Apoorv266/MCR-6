import React from 'react'
import "../Style/RestaurantList.css"

const RestaurantCard = ({item}) => {
  return (
    <div className='restaurant-card' >
        <img src={item.imgSrc} alt="" srcset="" width={"300px"} height={"300px"} className='menu-img'/>
        <p>Rs.{item.price} for {item.qty}</p>
        <p>{item.name}</p>
    </div>
  )
}

export default RestaurantCard