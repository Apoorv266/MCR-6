import React, { useContext, useState } from "react";
import "../Style/Modal.css";
import { userData } from "../Data/Data";
import { contextData } from "../Context/ContextProvider";

const ReviewModal = ({ setopenModal }) => {
  const [rating, setrating] = useState()
  const [review, setreview] = useState("")
  const {dispatch} = useContext(contextData)

  const handleSaveBtn = () => {
    const {pp, revName} = userData
    const obj = {
      rating: Number(rating),
      comment: review,
      revName: revName,
      pp: pp
    }
    dispatch({type: "ADD_REVIEW", payload : obj })
    dispatch({type: "CALC_AVG_RATING" })
    setopenModal(false)
  }
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setopenModal(false)}>
          X
        </span>
        <div className="modal-main">
          <h3>Add ratings :</h3>
          <select onChange={(e) => setrating(e.target.value)}>
            <option value="rating" disabled selected>Select rating</option>
            <option value="1">1 star</option>
            <option value="2">2 star</option>
            <option value="3">3 star</option>
            <option value="4">4 star</option>
            <option value="5">5 star</option>
          </select>
          <h3>Add comment :</h3>
          <textarea name="" id="" cols="85" rows="5" placeholder="add you reviews !" value={review} onChange={(e) => setreview(e.target.value)}></textarea>
          <button className="review-btn" onClick={handleSaveBtn}>Add review</button>
        </div>

      </div>
    </div>
  );
};

export default ReviewModal;
