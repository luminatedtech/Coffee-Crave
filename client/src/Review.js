import React from "react"
function Review ({stars,comment,title,name}) {
    
return (
    <div> 
        <h1> {title} </h1>
        <h4>  wrote {comment} </h4> 
        <h4> This gets {stars} stars! </h4>
    </div>
)
}

export default Review 