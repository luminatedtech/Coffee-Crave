import React, {useState} from "react"
import EditForm from "./EditForm"
function Review ({stars,comment,title,id}) {
    const [showEdit, setShowEdit] = useState(true)
    function onDeleteReview () {
        fetch(`/reviews/${id}`,{
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
        {showEdit ? (
            <>
            <button onClick={()=> setShowEdit(false)}>Edit</button>
            </>
        ) : (
            <>
            <EditForm id={id}/>
            <p>
                Done?
                <button onClick={()=>setShowEdit(true)}>
                    Exit
                </button>
            </p>
            </>
        )
    }
        
    </div>
)
}

export default Review 