import React, {useState, useEffect} from "react";
import ReviewList from "./ReviewList";
import {Link} from "react-router-dom"

function Shop ({id,name,address,image_url,index}) {
const [reviews,setReviews] = useState([])
const [showReviews,setShowReviews] = useState(true)
function getReviews (shopId) {
    fetch(`/shops/${shopId}/reviews`)
    .then((r)=>r.json())
    .then((reviews)=>setReviews(reviews))
}
useEffect(()=> {
    getReviews(id)
},[])

console.log(reviews)

    return (
        <>
        <div className="shop">
            <img src={image_url}/> 
            <div className="shopInfo">
                <h1>{`${index + 1}. ${name}`}</h1>
                <p>Address: {address}</p>
            </div>
            
            <Link className ="link" to= {`/newReview/${id}`}>
                Click me for new review
            </Link >
            <section>
            {showReviews && (
                <>
                <button onClick={()=>setShowReviews(false)}>
                    Click to see reviews
                </button>
                </>
            )}
            </section>      
        </div>
        {!showReviews && <ReviewList getReviews={()=>getReviews(id)} reviews={reviews} />}
        </>
    )
}



export default Shop


