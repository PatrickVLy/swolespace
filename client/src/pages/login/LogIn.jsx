import { Link } from "react-router-dom"
import "./login.css"

export default function LogIn() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput"placeholder="Enter your email..."></input>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password"></input>
                <button className="loginButton">Login</button>
            </form>
            <button className="loginSignUpButton"><Link to="/signup" className="link">Don't have an account yet? Sign up here</Link></button>
        </div>
    )
}
