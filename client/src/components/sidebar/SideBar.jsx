import { useEffect, useState } from "react"
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";


export default function SideBar() {
    const [cats, setCats] = useState([]);
    useEffect (()=>{
        const getCats = async () => {
            const res = await axios.get("/categories/");
            setCats(res.data)
        };
        getCats();
    },[])
    return (
        <div className = "sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="profileImage" alt="profilePicture" src="https://github.com/PatrickVLy/swolespace/blob/main/public/profile.jpg?raw=true"/>
                <p>My name is Patrick and I am the creator of swolespace. I created this app to help fitness buffs, gym bunnys, and even beginners connect and share workouts, training tips and advice so that we can build a community to help eachother get into the best shape ever. </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                {cats.map((c)=> (<Link className="link" to={`/?categories=${c.category}`}><li className="sidebarListItem">{c.category}</li></Link>))}
                

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Socials</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                </div>
            </div>
        </div>
    )
}
