import React, {useState} from "react";
import {Link,BrowserRouter} from "react-router-dom"
import Review from "./Review";
import ReviewForm from "./ReviewForm";
function Shop ({id,name,address,image_url,reviews}) {
const [showReviews, setShowReviews] = useState(false)
    return (
        <div id="shop">
            <div>
                <h2>{name}</h2>
            </div>
            
            <div> Address: {address} </div>
            <div><img src={image_url}/> </div>
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


