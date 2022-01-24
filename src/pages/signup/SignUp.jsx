import { Link } from "react-router-dom"
import "./signup.css"

export default function SignUp() {
    return (
        <div className="signup">
            <span className="signupTitle">Sign Up</span>
            <form action="" className="signupForm">
                <label>Email</label>
                <input type="text" className="signupInput"placeholder="Enter your email..."></input>
                <label>Username</label>
                <input type="text" className="signupInput"placeholder="Create a username"></input>
                <label>Password</label>
                <input type="password" className="signupInput" placeholder="Create a password"></input>
                <button className="signupButton">SignUp</button>
            </form>
            <button className="signuploginButton"><Link to="/login" className="link">Already Have an account? Login here</Link></button>
        </div>
    )
}
