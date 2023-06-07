import React, {useState} from "react"
import EditForm from "./EditForm"
function Review ({stars,comment,title,id,getReviews,username,onUpdateReview}) {
    const [showEdit, setShowEdit] = useState(true)
    const [errors,setErrors] = useState([])
    console.log({username})
    function onDeleteReview () {
        fetch(`/reviews/${id}`,{
            method: "DELETE"
        })
        .then((r)=> {
            
          if (r.ok) {
            getReviews()
          }else {
            r.json().then((err)=>setErrors(err.errors))
          }
            
        })
          
    }
return (
    <div className="review">
      <div className="reviewContainer">
        <p className="commenter"><span>{username}</span> <em>commented</em> {comment}</p>
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
          <EditForm onUpdateReview={onUpdateReview} id={id}/>
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
      <div>
          {errors.map((error)=> (
              <span> {error} </span>
            ))}
      </div>
    </div>
)
}

export default Review 