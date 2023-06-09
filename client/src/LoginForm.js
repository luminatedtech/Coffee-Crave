import React, {useState,useContext} from "react";
import { LoginContext } from "./App";
function LoginForm () {
const setLogin = useContext(LoginContext)
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [errors, setErrors] = useState([])
const [isLoading, setIsLoading] = useState(false)

	function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
		fetch("/login", {
			method: "POST", 
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password}),
		}).then((r)=> {
			setIsLoading(false);
			if (r.ok) {
				r.json().then((user)=> setLogin(user))
			}
			else {
				r.json().then((err)=> console.log(err.errors))
			}
		})
	}
	console.log(errors)
	return (
		<div className="formContainer">
				<form className="loginForm" onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Enter Username"
						value={username}
						onChange={(e)=> setUsername(e.target.value)}
					/>
					<br />
					<input
						type="password"
						placeholder="Enter Password"
						value={password}
						onChange={(e)=> setPassword(e.target.value)}
					/>
					<br/>
					<button className = "button" type="submit" name="submit" value="Login">
						{isLoading ? "Loading..." : "Login"}
					</button>
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

export default  LoginForm;