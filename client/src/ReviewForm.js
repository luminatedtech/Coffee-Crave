import React,{ useState,useContext } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { ShopContext } from "./context/ShopContext"

function ReviewForm () {

    const {setShops,shops} = useContext(ShopContext)
    const navigate = useNavigate()
    const [comment,setComment] = useState ("")
    const [stars, setStars] = useState(1)
    const [title, setTitle] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const { shopId } = useParams()
    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        fetch("/reviews", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment,
                stars,
                title,
                shop_id: shopId,
            }),
        }).then((r)=> {
            setIsLoading(false)
            if (r.ok) {
                r.json().then((review)=>{
                shops.map((shop)=> {
                    console.log(review.shop.id)
                    if (shop.id === review.shop.id){
                    
                     const updatedReviews = [...shop.reviews,review]
                      shop.reviews = updatedReviews
                      setShops(shops)
                      navigate('/')
                    }
                    else 
                    return shops
                })
            })
                //Iterate through the shops and find the shop that's getting the review 
                //Find the Reviews key and add that review 
              
            } else {
                r.json().then((err)=> setErrors(err.errors))
            }
        })
        
    }
    return (
        
        <div className="reviewFormContainer">
            <h2 > Create Review </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title </label>
                    <input
                    type="text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label> Comment </label>
                    <input
                    type="text"
                    value={comment}
                    onChange={(e)=>setComment(e.target.value)}
                    />
                </div>
                <div>
                    <label> Stars </label>
                    <input
                    type="integer"
                    value={stars}
                    onChange={(e)=>setStars(e.target.value)}
                    />
                </div>
         
                <div>
                    <button className="addReviewsButton" type="submit">
                        {isLoading ? "Loading.." : "Submit Review"}
                    </button>
                </div>
                {errors.length > 0 && (
                    <ul style={{ color: "red" }}>
                    {errors.map((error) => (
                     <li key={error}>{error}</li>
                    ))}
                  </ul>
                )}
            </form>
        </div>
    )
}

export default ReviewForm