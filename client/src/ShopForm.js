import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
function ShopForm () {
    const navigate = useNavigate()
    const [isLoading,setIsLoading] = useState(false)
    const [name,setName] = useState("")
    const [address,setAddress] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [hours, setHours] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [errors,setErrors]= useState([])
    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        fetch("/shops", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phone_number: phoneNumber,
                name,
                hours,
                address,
                image_url: imageUrl,
            }),
        }).then((r)=> {
            setIsLoading(false)
            if (r.ok) {
                navigate('/')
            } else {
                r.json().then((err)=> setErrors(err.errors))
            }
        })
        
    }
    return (

        <div className="reviewFormContainer">
        <h2 > Create Shop </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label> Name </label>
                <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <label> Address </label>
                <input
                type="text"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                />
            </div>
            <div>
                <label> Hours </label>
                <input
                type="text"
                value={hours}
                onChange={(e)=>setHours(e.target.value)}
                />
            </div>
            <div>
                <label> Phone Number </label>
                <input
                type="text"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
                />
            </div>
            <div>
                <label> Image of your Store! </label>
                <input
                type="text"
                value={imageUrl}
                onChange={(e)=>setImageUrl(e.target.value)}
                />
            </div>
     
            <div>
                <button className="addReviewsButton" type="submit">
                    {isLoading ? "Loading.." : "Submit Shop"}
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


export default ShopForm