import React from "react";

import Review from "./Review";
function ReviewList ({reviews,getReviews}) {

return (
    
    <div>
            {reviews.map((review)=> (
                <Review key={review.id} getReviews={getReviews} id={review.id} comment={review.comment} stars={review.stars} title={review.title} name={review} />
            ))}
    </div>
)

}

export default ReviewList