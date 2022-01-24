import "./topbar.css"


export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            </div>
            <div className="topCenter"><ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">LOG WORKOUT</li>
                <li className="topListItem">SIGNOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" alt ="topbarpic" src="./patrick.jpg"/>
                <i className="topSearchIcon fas fa-search"></i>

            </div>
        </div>
    )
}
