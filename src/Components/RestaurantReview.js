import React from "react";
import { StarOutline } from 'react-ionicons'

const RestaurantReview = ({item}) => {
  const {pp,revName, comment, rating} = item
  return (
    <div className="review-main">
      <div className="review-top">
        <div className="main-review">
          <img
            src={pp}
            alt=""
            width={"50px"}
            height={"50px"}
            className="menu-img img-radius"
          />
          <h3>{revName}</h3>
        </div>
        <div className="review-card"><h2>{rating}
<StarOutline
  color={'#FFD601'} 
  height="20px"
  width="20px"
/>
</h2></div>
      </div>
      <p className="review-content">{comment}</p>
    </div>
  );
};

export default RestaurantReview;
