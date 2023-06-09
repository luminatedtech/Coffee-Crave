import React, {useState, useEffect} from "react";
import ReviewList from "./ReviewList";
import {Link} from "react-router-dom"

function Shop ({id,address,image_url,index,hours,name,reviews}) {

const [showReviews,setShowReviews] = useState(true)

console.log(reviews)


    return (
        <>
          <div className="shop">
            <img alt="shopLogo" src={image_url}/> 
            <div className="shopInfo">
              <h1>{`${index + 1}. ${name}`}</h1>
              <p><b>Address:</b> {address}</p>
              <p><b>Hours:</b> {hours}</p>
              <div className="reviewButtonsContainer">
                {showReviews && (
                  <>
                    <button
                      className="seeReviewsButton"
                      onClick={()=>setShowReviews(false)}
                    >
                      {`See Reviews ($)`} 
                    </button>
                  </>
                )}
                <Link className ="link" to= {`/newReview/${id}`}>
                  <button className="addReviewsButton">
                    Add Review
                  </button>
                </Link >
              </div>
            </div>
          </div>
        {!showReviews && <ReviewList reviews={reviews} />}
      </>
    )
}



export default Shop


