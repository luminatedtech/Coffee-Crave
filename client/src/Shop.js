import React, {useState, useEffect} from "react";
import ReviewList from "./ReviewList";
import {Link} from "react-router-dom"

function Shop ({id,address,image_url,index,hours,name,reviews}) {

const [showReviews,setShowReviews] = useState(true)

const numberOfReviews = reviews.length

console.log( id, image_url)


    return (
        <>
          <div className="shop">
            <img alt="shopLogo" src={id === 6 ? "/beanhut.jpg" : image_url}/> 
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
                      {`See Reviews (${numberOfReviews})`} 
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
        {!showReviews && <ReviewList shopId={id} reviews={reviews} />}
      </>
    )
}



export default Shop


