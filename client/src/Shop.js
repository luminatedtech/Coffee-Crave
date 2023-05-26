import React, {useState} from "react";
import {Link,BrowserRouter} from "react-router-dom"
import Review from "./Review";
import ReviewForm from "./ReviewForm";
function Shop ({id,name,address,image_url,reviews,index}) {
const [showReviews, setShowReviews] = useState(false)
    return (
        <div className="shop">
            <img src={image_url}/> 
            <div className="shopInfo">
                <h1>{`${index + 1}. ${name}`}</h1>
                <p>{address}</p>
            </div>
            
            <Link to= {`/newReview/${id}`}>
                Click me for new review
            </Link>
            
        {showReviews ? (
            <section>
                {reviews.map((review)=> (
                <Review key={review.id} comment={review.comment} stars={review.stars} title={review.title} name={review} />
            ))}
            </section>
            ) : (
            <button onClick={()=> setShowReviews(true)}>
                    View Reviews 
            </button>  
        )}
        </div>
    )
}



export default Shop


