import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useState } from 'react';
function Login() {
const [showLogin, setShowLogin] = useState(true)
  return (
    <div className="landingContainer">
      <div className="heroContainer">
        <div className="heroTextContainer">
          <h1>Coffee Crave</h1>
          <div className="bottomContainer">
            <div className="copyContainer">
              <h2>Sip with Confidence</h2>
              <p>Say goodbye to coffee shop blind dates and say hello to your perfect coffee match!</p>
            </div>
            <div className="linksContainer">
              <p>Privacy Policy</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
        <div className="loginContainer">
          <h1>Welcome back!</h1>
          <p>Get ready for a java journey filled with laughter</p>
        {showLogin ? (
          <>
            <LoginForm/>
            <p className="text">
              Don't have an account?
                <button className="signupButton" color="secondary" onClick={()=> setShowLogin(false)}>
                  Sign Up
                </button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm/>
            <div className="accountContainer">
              Already have an account?
              <button className="loginButton" onClick={()=> setShowLogin(true)}>
                Log in
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Login