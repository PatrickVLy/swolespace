import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" alt="postImage" src="https://raw.githubusercontent.com/PatrickVLy/swolespace/main/public/squat.jpg"/>
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Legs</span>
                </div>
                <span className="postTitle">Insane Legday</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
                <p className="postDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, assumenda eum minus repellat perferendis sapiente nemo laborum dicta blanditiis. Dolore sint quis fuga cupiditate incidunt harum enim. Repellendus, doloremque? Culpa.</p>
            </div>

        </div>
    )
}
