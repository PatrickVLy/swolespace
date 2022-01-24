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
            <button className="loginButton">Already Have an account? Login here</button>
        </div>
    )
}
