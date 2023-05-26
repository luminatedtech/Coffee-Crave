import React, {useState} from "react";
import {Link,BrowserRouter} from "react-router-dom"
import Review from "./Review";
import ReviewForm from "./ReviewForm";
function Shop ({id,name,address,image_url,reviews,index}) {

    return (
        <div className="shop">
            <img src={image_url}/> 
            <div className="shopInfo">
                <h1>{`${index + 1}. ${name}`}</h1>
                <p>{address}</p>
            </div>
            
            <Link to= {`/newReview/${id}`}>
                Click me for new review
            </Link >
            
            <Link to= {`/reviewList/${id}`}> 
                 View Reviews 
            </Link>
        </div>
    )
}



export default Shop


