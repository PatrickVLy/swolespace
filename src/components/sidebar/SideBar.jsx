import "./sidebar.css"

export default function SideBar() {
    return (
        <div className = "sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="profileImage" alt="profilePicture" src="./profile.jpg"/>
                <p>My name is Patrick and I am the creator of swolespace. I created this app to help fitness buffs, gym bunnys, and even beginners connect and share workouts, training tips and advice so that we can build a community to help eachother get into the best shape ever. </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                <li className="sidebarListItem">Total Body</li>
                <li className="sidebarListItem">Pull</li>
                <li className="sidebarListItem">Push</li>
                <li className="sidebarListItem">Legs</li>
                <li className="sidebarListItem">Chest</li>
                <li className="sidebarListItem">Arms</li>
                <li className="sidebarListItem">Shoulders</li>
                <li className="sidebarListItem">Back</li>
                <li className="sidebarListItem">Core</li>

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
