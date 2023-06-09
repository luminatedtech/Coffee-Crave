import React, {useContext, useState} from "react"
import { useNavigate } from "react-router-dom"
import EditForm from "./EditForm"
import { ShopContext } from "./context/ShopContext"
function Review ({stars,comment,title,id,review}) {
    const [showEdit, setShowEdit] = useState(true)
    const [errors,setErrors] = useState([])
    const navigate = useNavigate()
    const {shops,setShops} = useContext(ShopContext)

    function onDeleteReview () {
        fetch(`/reviews/${id}`,{
            method: "DELETE"
        })
        .then((r)=> {
            
          if (r.ok) {
            const deletedReview = review 
            {shops.map((shop)=> {
              if (shop.id === deletedReview.shop.id){
                console.log(shop.reviews)
                const updatedReviews = shop.reviews.filter(review => review.id !== deletedReview.id)
                console.log(updatedReviews)
                shop.reviews = updatedReviews
                setShops(shops)
                
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
        <p className="commenter"><span></span> <em>commented</em> {comment}</p>
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
          <EditForm oldStars={stars} oldComment={comment} oldTitle={title} id={id}/>
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