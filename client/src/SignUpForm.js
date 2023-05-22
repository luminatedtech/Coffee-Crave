import React, { useState } from "react";

function SignUpForm( { onLogin }){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [profileUrl, setProfileUrl] = useState("")
    const [errors,setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([])
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
                r.json().then((user)=> onLogin( user));
            } else {
                r.json().then((err)=> setErrors(err.errors))
            }
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            id="username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
            <br/>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <br/>
            <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e)=> setPasswordConfirmation(e.target.value)}
            />
            <br/>
            <input
            type="text"
            id="profileUrl"
            value={profileUrl}
            onChange={(e)=> setProfileUrl(e.target.value)}
            />
            <button type="submit">{isLoading ? "Loading...": "Sign Up"} </button>

        </form>
    )
}

export default SignUpForm