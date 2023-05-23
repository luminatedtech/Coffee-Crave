import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useState } from 'react';
function Login({ onLogin }) {
const [showLogin, setShowLogin] = useState(true)
return (
    <section>
    <h1> CoffeeCrave </h1>
    {showLogin ? (
        <>
        <LoginForm onLogin={onLogin}/>
        <p>
            Don't have an account?
            <button color="secondary" onClick={()=> setShowLogin(false)}>
            Sign Up
            </button>
        </p>
        </>
    ) : (
        <>
        <SignUpForm onLogin={onLogin}/>
        <p>
        Already have an account?
        <button onClick={()=> setShowLogin(true)}>
        Log in
        </button>
        </p>
        </>
    )}
    </section>
)

}

export default Login