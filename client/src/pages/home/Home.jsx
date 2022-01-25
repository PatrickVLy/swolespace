import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import SideBar from "../../components/sidebar/SideBar"
import "./home.css"

export default function Home() {
    const user = false;
    return (
        <>
        <div className="home">
            <Posts/>
            {user && <SideBar/>}
        </div>
        </>
    )
}
