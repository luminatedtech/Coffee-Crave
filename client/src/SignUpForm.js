import React, { useState,useContext } from "react";
import { LoginContext } from "./App";
function SignUpForm(){
    const setLogin = useContext(LoginContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [profileUrl, setProfileUrl] = useState("")
    const [errors,setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    console.log(errors)
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true)
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                profile_url: profileUrl
            }),
        }).then((r)=> {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user)=> setLogin( user));
            } else {
                r.json().then((err)=> setErrors(err.errors))
            }
        })
    }
    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
            <input
            placeholder="Username"
            type="text"
            id="username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
            <br/>
            <input
            placeholder="Enter Password"
            type="password"
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <br/>
            <input
            placeholder="Confirm Password"
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e)=> setPasswordConfirmation(e.target.value)}
            />
            <br/>
            <input
            placeholder="Profile URL"
            type="text"
            id="profileUrl"
            value={profileUrl}
            onChange={(e)=> setProfileUrl(e.target.value)}
            />
            <button className="button" type="submit">{isLoading ? "Loading..": "Sign Up"} </button>
           
        </form>
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

export default SignUpForm