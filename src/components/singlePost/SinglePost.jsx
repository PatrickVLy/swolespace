import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://raw.githubusercontent.com/PatrickVLy/swolespace/main/public/squat.jpg" alt="postImg" className="singlePostImg"/>
                <h1 className="singlePostTitle">Insane Leg Day Workout
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Posted By: <b>Patrick</b></span>
                    <span className="singlePostDate">1 Hour Ago</span>
                </div>
                <p className="singlePostDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi nulla ipsam voluptas quibusdam, accusantium facilis saepe repellendus tenetur error nostrum id aliquam ducimus minus. Impedit repellat maxime molestiae accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi nulla ipsam voluptas quibusdam, accusantium facilis saepe repellendus tenetur error nostrum id aliquam ducimus minus. Impedit repellat maxime molestiae accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi nulla ipsam voluptas quibusdam, accusantium facilis saepe repellendus tenetur error nostrum id aliquam ducimus minus. Impedit repellat maxime molestiae accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi nulla ipsam voluptas quibusdam, accusantium facilis saepe repellendus tenetur error nostrum id aliquam ducimus minus. Impedit repellat maxime molestiae accusamus.</p>
            </div>
        </div>
    )
}
