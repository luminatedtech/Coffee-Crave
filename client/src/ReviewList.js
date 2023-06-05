import React from "react";

import Review from "./Review";
function ReviewList ({reviews,getReviews}) {
 console.log(reviews)
  const reviewCount = reviews.length

return (
    
    <div className="reviewList">
      {reviews.map((review)=> (
          <Review key={review.id} getReviews={getReviews} name={review.name} id={review.id} comment={review.comment} stars={review.stars} title={review.title} />
      ))}
      {!reviewCount && 
        <div className="noReviewContainer">
          No reviews. Be the first to add one!
        </div>
      }
    </div>
)

}

export default ReviewList