import React from "react";

import Review from "./Review";
function ReviewList ({reviews,getReviews}) {

return (
    
    <div>
            {reviews.map((review)=> (
                <Review key={review.id} getReviews={getReviews} name={review.name} id={review.id} comment={review.comment} stars={review.stars} title={review.title} />
            ))}
    </div>
)

}

export default ReviewList