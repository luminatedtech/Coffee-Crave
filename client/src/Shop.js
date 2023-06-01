import React from "react";
import {Link} from "react-router-dom"

function Shop ({id,name,address,image_url,reviews,index}) {

    return (
        <div className="shop">
            <img src={image_url}/> 
            <div className="shopInfo">
                <h1>{`${index + 1}. ${name}`}</h1>
                <p>Address: {address}</p>
            </div>
            
            <Link className ="link" to= {`/newReview/${id}`}>
                Click me for new review
            </Link >
            
            <Link className ="link" to= {`/reviewList/${id}`}> 
                 View Reviews 
            </Link>
        </div>
    )
}



export default Shop


