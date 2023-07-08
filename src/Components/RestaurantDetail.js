import React, { useState } from 'react'
import ReviewModal from './ReviewModal'

const RestaurantDetail = ({dishesArr, obj}) => {
    const [openModal, setopenModal] = useState(false)
const {address, name, averageRating, description} = obj

  return (
    <div className='detail-main'>
        <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <p>{dishesArr.join(",")}</p>
        <p>{address}</p>
        <p>Average rating : {averageRating}</p>
        </div>
        <button className='review-btn' onClick={()=>setopenModal(true)}>Add review</button>
        {openModal && <ReviewModal setopenModal={setopenModal}/>}
    </div>
  )
}

export default RestaurantDetail