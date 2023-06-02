import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useState } from 'react';
function Login({ onLogin }) {
const [showLogin, setShowLogin] = useState(true)
return (
    <div className="loginDiv">
        <section>
            <div className="logoDiv">
            <h1 className="logo"> CoffeeCrave </h1>
            <img alt="coffeephoto" className="coffeeLogo" src="coffeelogo.jpg"/>
            </div>
        
        {showLogin ? (
        <>
        <LoginForm onLogin={onLogin}/>
        <p className="text">
            Don't have an account?
            <button className="button" color="secondary" onClick={()=> setShowLogin(false)}>
            Sign Up
            </button>
        </p>
        </>
        ) : (
        <>
        <SignUpForm onLogin={onLogin}/>
        <p>
        Already have an account?
        <button className="button" onClick={()=> setShowLogin(true)}>
        Log in
        </button>
        </p>
        </>
    )}
        </section>
    </div>
    
)

}

export default Login