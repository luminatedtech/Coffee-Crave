import React, {useState, useEffect} from "react";
import ReviewList from "./ReviewList";
import {Link} from "react-router-dom"

function Shop ({id,address,image_url,index,hours,name}) {
const [reviews,setReviews] = useState([])
const [showReviews,setShowReviews] = useState(true)
function getReviews (shopId) {
    fetch(`/shops/${shopId}/reviews`)
    .then((r)=>r.json())
    .then((reviews)=>setReviews(reviews))
}
useEffect(()=> {
    getReviews(id)
},[id])

console.log(showReviews)

const reviewCount = reviews.length

    return (
        <>
          <div className="shop">
            <img alt="shopLogo" src={image_url}/> 
            <div className="shopInfo">
              <h1>{`${index + 1}. ${name}`}</h1>
              <p><b>Address:</b> {address}</p>
              <p><b>Hours:</b> {hours}</p>
              <div className="reviewButtonsContainer">
                <Link className ="link" to= {`/newReview/${id}`}>
                  <button className="addReviewsButton">
                    Add Review
                  </button>
                </Link >
                {showReviews && (
                  <>
                    <button
                      className="seeReviewsButton"
                      onClick={()=>setShowReviews(false)}
                    >
                      {`See Reviews (${reviewCount})`} 
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        {!showReviews && <ReviewList getReviews={()=>getReviews(id)} reviews={reviews} />}
      </>
    )
}



export default Shop


