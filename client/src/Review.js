import React, {useState} from "react"
import EditForm from "./EditForm"
function Review ({stars,comment,title,id,getReviews,name}) {
    const [showEdit, setShowEdit] = useState(true)
    function onDeleteReview () {
        fetch(`/reviews/${id}`,{
            method: "DELETE"
        })
        .then(()=> {
            getReviews()
            
        })
          
    }
return (
    <div className="review">
      <div className="reviewContainer">
        <p className="commenter"><span>{name}</span> <em>commented</em></p>
        <h2> {title} </h2>
        <p> This gets {stars} stars! </p>
      </div>
      {showEdit ? (
        <>
          <button className ="editButton" onClick={()=> setShowEdit(false)}>
            <img alt="edit" src="edit.png" />
          </button>
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
      )}
      <button className ="deleteButton" onClick={onDeleteReview}>
        <img alt="delete" src="delete.png" />
      </button>
    </div>
)
}

export default Review 