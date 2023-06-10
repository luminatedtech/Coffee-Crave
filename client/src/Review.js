import React, {useContext, useState} from "react"

import EditForm from "./EditForm"
import { ShopContext } from "./context/ShopContext"
function Review ({stars,comment,title,id,review,shopId,username}) {

    const [showEdit, setShowEdit] = useState(true)
    const [errors,setErrors] = useState([])
    
    const {shops,setShops} = useContext(ShopContext)
    console.log(username)
    function onDeleteReview () {
        fetch(`/reviews/${id}`,{
            method: "DELETE"
        })
        .then((r)=> {
            
          if (r.ok) {
            const deletedReview = review 
            
            {shops.map((shop)=> {
              if (shop.id === shopId){
                
                const updatedReviews = shop.reviews.filter(review => review.id !== deletedReview.id)
                
                shop.reviews = updatedReviews
                setShops([...shops])
                
              }
              else {
                return shops
              }
            })}
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
          <EditForm setShowEdit={setShowEdit} shopId={shopId} oldStars={stars} oldComment={comment} oldTitle={title} id={id}/>
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
      {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                {errors.map((error) => (
                 <li key={error}>{error}</li>
                ))}
              </ul>
            )}
    </div>
)
}

export default Review 