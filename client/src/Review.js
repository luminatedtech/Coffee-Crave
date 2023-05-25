import React from "react"
function Review ({stars,comment,name}) {
return (
    <div> 
        <h1> {name} wrote {comment} </h1>
        <h2> This gets {stars} stars! </h2>
    </div>
)
}

export default Review 