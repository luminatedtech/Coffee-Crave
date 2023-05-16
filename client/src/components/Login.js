import React, { useState } from "react"; 

function Login {
    const [username, setUsername] = useState (""); 
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]); 

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        }).then((r)=>{
            if (r.ok) {
                r.json().then((user)=> onLogin(user))
            } else {
                r.json().then((err)=> setErrors(err.errors))
            }
        })
    }
}