import React from "react";
import Review from "./Review";
function Shop ({name,address,image_url,reviews}) {
    
    return (
        <div id="shop">
            <div> {name} </div>
            <div> {address} </div>
            <div><img src={image_url}/> </div>
           
        </div>
    )
}

/* <section>
                {reviews.map((review)=> (
                    <Review key={review.id} comment={review.comment} stars={review.stars} name={review.name} />
                ))}
            </section>*/

export default Shop