import React,{ useState,useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { LoginContext } from "./App"

function ReviewForm () {
    const login = useContext(LoginContext)
    const navigate = useNavigate()
    const [comment,setComment] = useState ("")
    const [stars, setStars] = useState(1)
    const [title, setTitle] = useState("")
    const [isLoading,setIsLoading] = useState(false)
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
        })
        navigate('/')
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
            </form>
        </div>
    )
}

export default ReviewForm