import React, { useState } from "react";
import "../Style/Modal.css";

const ReviewModal = ({ setopenModal }) => {
    const [rating, setrating] = useState()
    const [review, setreview] = useState("")
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setopenModal(false)}>
          X
        </span>
        <div className="modal-main">
          <h3>Add ratings :</h3>
          <select onChange={(e)=>setrating(e.target.value)}>
            <option value="rating" disabled selected>Select rating</option>
            <option value="1">1 star</option>
            <option value="2">2 star</option>
            <option value="3">3 star</option>
            <option value="4">4 star</option>
            <option value="5">5 star</option>
          </select>
          <h3>Add comment :</h3>
          <textarea name="" id="" cols="70" rows="5" placeholder="add you reviews !" value={review} onChange={(e)=>setreview(e.target.value)}></textarea>
          <button className="review-btn">Add review</button>
        </div>

      </div>
    </div>
  );
};

export default ReviewModal;
