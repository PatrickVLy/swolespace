import { Link } from "react-router-dom"
import "./topbar.css"


export default function TopBar() {
    const user= false;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            </div>
            <div className="topCenter"><ul className="topList">
                
                <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
                <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
                <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
                <li className="topListItem"><Link to="/logworkout" className="link">LOG WORKOUT</Link></li>
                <li className="topListItem">{user && "SIGN OUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (<img className="topImg" alt ="topbarpic" src="https://raw.githubusercontent.com/PatrickVLy/swolespace/main/public/patrick.jpg"/>) : (
                  <ul className="topList">
                  <li className="topListItem"><Link to="/login" className="link">LOG IN</Link></li>
                  <li className="topListItem"><Link to="/signup" className="link">SIGN UP</Link> </li></ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>

            </div>
        </div>
    )
}
