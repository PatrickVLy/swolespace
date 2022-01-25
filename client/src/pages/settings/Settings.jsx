import SideBar from "../../components/sidebar/SideBar"
import "./settings.css"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfilePicture">
                        <img src="./profile.jpg" width="400px" alt="profilepicture"/>
                        <label htmlFor="fileInput"><i className="settingsProfilePictureIcon fas fa-user-circle"></i></label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Patrick"></input>
                    <label>Email</label>
                    <input type="text" placeholder="PatrickLy72@gmail.com"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button className="settingsSubmit">Update Info</button>
                </form>
            </div>
        <SideBar/>
        </div>
    )
}
