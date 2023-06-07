import React, {useState} from "react"
function EditForm ({id,onUpdateReview}) {
    
    const [comment,setComment] = useState("")
    const [title, setTitle] = useState("")
    const [stars, setStars] = useState(1)
    const [errors,setErrors] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    function onUpdateReviewClick (e) {
        e.preventDefault()
        setIsLoading(true)
        fetch(`reviews/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: comment,
                title: title,
                stars: stars,
            }),
        })
        .then((r)=> {
            setIsLoading(false)
            if (r.ok){
                r.json().then((updatedReview)=> onUpdateReview(updatedReview))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
        
    }
    return(
        <section className="editForm">
            <h2> Edit Review </h2>
            <form onSubmit={onUpdateReviewClick}>
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
                    <button className="button" type="submit">
                        {isLoading ? "Loading..." : "Finish"}
                    </button>
                </div>
                <div>
                    {errors.map((error)=> (
                        <span> 
                            {error}
                        </span>
                    ))}
                </div>
            </form>
        </section>
    )

}


export default EditForm