import React from "react"
function Review ({stars,comment,title,id}) {
    function onDeleteReview () {
        fetch(`reviews/${id}`,{
            method: "DELETE"
        }).then((r)=> {
            if (r.ok){
                console.log("Deleted")
            }
            else {
                console.log("oops")
            }
        })
    }
return (
    <div> 
        <h1> {title} </h1>
        <h4>  wrote {comment} </h4> 
        <h4> This gets {stars} stars! </h4>
        <button onClick={onDeleteReview}> Delete Review </button>
        <button>Edit</button>
    </div>
)
}

export default Review 