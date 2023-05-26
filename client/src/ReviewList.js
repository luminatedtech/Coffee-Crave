import React, { useState,useEffect } from "react";
import Review from "./Review";
function ReviewList () {
const [reviews,setReviews] = useState([])

useEffect(()=> {
    fetch("/reviews")
    .then((r)=>r.json())
    .then((reviews)=> setReviews(reviews))
},[])
return (
    <section>
                {reviews.map((review)=> (
                <Review key={review.id} id={review.id} comment={review.comment} stars={review.stars} title={review.title} name={review} />
            ))}
            </section>
)

}

export default ReviewList