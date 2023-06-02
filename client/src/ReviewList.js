import React from "react";

import Review from "./Review";
function ReviewList ({reviews}) {

return (
    <section>
            {reviews.map((review)=> (
                <Review key={review.id} id={review.id} comment={review.comment} stars={review.stars} title={review.title} name={review} />
            ))}
    </section>
)

}

export default ReviewList