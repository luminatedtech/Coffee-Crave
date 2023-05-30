import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import Review from "./Review";
function ReviewList () {
const [reviews,setReviews] = useState([])
const {shopId} = useParams()
useEffect(()=> {
    fetch("/reviews")
    .then((r)=>r.json())
    .then((reviews)=> setReviews(reviews))
},[])
const reviewList = reviews.filter((review)=> review.shop_id == shopId)
return (
    <section>
                {reviewList.map((review)=> (
                <Review key={review.id} id={review.id} comment={review.comment} stars={review.stars} title={review.title} name={review} />
            ))}
            </section>
)

}

export default ReviewList