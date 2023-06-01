import React, {useState} from "react"
function EditForm ({id}) {
    const [comment,setComment] = useState("")
    const [title, setTitle] = useState("")
    const [stars, setStars] = useState(1)
    function onUpdateReview (e) {
        e.preventDefault()
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
        .then((r)=>r.json())
        .then((updatedReview)=> console.log(updatedReview))
    }
    return(
        <section className="editForm">
            <h2> Edit Review </h2>
            <form onSubmit={onUpdateReview}>
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
                        Finish
                    </button>
                </div>
            </form>
        </section>
    )

}


export default EditForm