import React from 'react'
import "../Style/RestaurantList.css"

const RestaurantCard = ({item}) => {
  return (
    <div className='restaurant-card' >
        <img src={item.imgSrc} alt="" srcset="" width={"300px"} height={"300px"} className='menu-img'/>
        <h3>{item.name}</h3>
        <p>Rs.{item.price} for {item.qty}</p>
    </div>
  )
}

export default RestaurantCard