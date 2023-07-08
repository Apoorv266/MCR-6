import React, { useContext, useState } from 'react'
import ReviewModal from './ReviewModal'
import { contextData } from '../Context/ContextProvider'

const RestaurantDetail = ({ dishesArr, obj }) => {
  const { dispatch } = useContext(contextData)
  const [openModal, setopenModal] = useState(false)
  const { address, name, averageRating, description, id } = obj

  const handleOpen = (id) => {
    dispatch({ type: "ADD_MODALID", payload: id })
    setopenModal(true)
  }
  return (
    <div className='detail-main'>
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <p>{dishesArr.join(",")}</p>
        <p>{address}</p>
        <p>Average rating : {averageRating}</p>
      </div>
      <button className='review-btn' onClick={() => handleOpen(id)}>Add review</button>
      {openModal && <ReviewModal setopenModal={setopenModal} />}
    </div>
  )
}

export default RestaurantDetail