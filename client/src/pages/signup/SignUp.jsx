import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

export default function SignUp() {
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await axios.post("/auth/signup", {
            email, 
            username, 
            password,
        });
        console.log(res)
    };
    return (
        <div className="signup">
            <span className="signupTitle">Sign Up</span>
            <form action="" className="signupForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" 
                className="signupInput"
                placeholder="Enter your email..."
                onChange={e=>setEmail(e.target.value)}></input>
                <label>Username</label>
                <input type="text" 
                className="signupInput"
                placeholder="Create a username"
                onChange={e=>setUsername(e.target.value)}></input>
                <label>Password</label>
                <input type="password" 
                className="signupInput" 
                placeholder="Create a password"
                onChange={e=>setPassword(e.target.value)}></input>
                <button className="signupButton" type="submit">SignUp</button>
            </form>
            <button className="signuploginButton"><Link to="/login" className="link">Already Have an account? Login here</Link></button>
        </div>
    )
}
