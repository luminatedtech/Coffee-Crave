import React from "react";

import Review from "./Review";
function ReviewList ({reviews,getReviews,setReviews}) {
  const reviewCount = reviews.length
  function handleUpdateReview(updatedReview) {
    const updatedReviews = reviews.map((review)=> {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review
      }
    })
    setReviews(updatedReviews)
  }
  
return (
    
    <div className="reviewList">
      {reviews.map((review)=> (
          <Review key={review.id} getReviews={getReviews} username={review.user.username} id={review.id} comment={review.comment} stars={review.stars} title={review.title} onUpdateReview ={handleUpdateReview} />
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