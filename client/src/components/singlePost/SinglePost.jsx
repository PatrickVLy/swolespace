import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./singlePost.css";
import { Link } from "react-router-dom";

export default function SinglePost() {
    const location = useLocation();
    
    //variable that stores postID
    const path = (location.pathname.split("/")[2]);

    const [post, setPost] = useState({})

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/posts/"+path);
            setPost(res.data)
        }
        getPost()
    }, [path])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
            <h1 className="singlePostTitle">{post.title}
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                {post.photo && (<img src={post.photo} alt="postImg" className="singlePostImg"/>)}
                
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Posted By: <Link className="link" to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <table className="wod">
<thead>
  <tr>
    <th colSpan="4">Workout of the Day:</th>
  </tr>
</thead>
<tbody>
  <tr>
  <td className="exerciseCol">{post.firstExercise && (<i>{post.firstExercise}&nbsp;&nbsp;</i>)}</td>
    <td className="weightCol">{post.firstExerciseWeight && (<i>{post.firstExerciseWeight}#</i>)}</td>
    <td>{post.firstExerciseSets && (<i>{post.firstExerciseSets}&nbsp;x</i>)}</td>
    <td>&nbsp;{post.firstExerciseReps}</td>
  </tr>
  <tr>
  <td className="exerciseCol">{post.secondExercise && (<i>{post.secondExercise}&nbsp;&nbsp;</i>)}</td>
  <td className="weightCol">{post.secondExerciseWeight && (<i>{post.secondExerciseWeight}#</i>)}</td>
  <td>{post.secondExerciseSets && (<i>{post.secondExerciseSets}&nbsp;x</i>)}</td>
    <td>&nbsp;{post.secondExerciseReps}</td>
  </tr>
  <tr>
  <td className="exerciseCol">{post.thirdExercise && (<i>{post.thirdExercise}&nbsp;&nbsp;</i>)}</td>
  <td className="weightCol">{post.thirdExerciseWeight && (<i>{post.thirdExerciseWeight}#</i>)}</td>
  <td>{post.thirdExerciseSets && (<i>{post.thirdExerciseSets}&nbsp;x</i>)}</td>
    <td>&nbsp;{post.thirdExerciseReps}</td>
  </tr>
  <tr>
  <td className="exerciseCol">{post.fourthExercise && (<i>{post.fourthExercise}&nbsp;&nbsp;</i>)}</td>
  <td className="weightCol">{post.fourthExerciseWeight && (<i>{post.fourthExerciseWeight}#</i>)}</td>
  <td>{post.fourthExerciseSets && (<i>{post.fourthExerciseSets}&nbsp;x</i>)}</td>
    <td>&nbsp;{post.fourthExerciseReps}</td>
  </tr>
  <tr>
  <td className="exerciseCol">{post.fifthExercise && (<i>{post.fifthExercise}&nbsp;&nbsp;</i>)}</td>
  <td className="weightCol">{post.fifthExerciseWeight && (<i>{post.fifthExerciseWeight}#</i>)}</td>
  <td>{post.fifthExerciseSets && (<i>{post.fifthExerciseSets}&nbsp;x</i>)}</td>
    <td>&nbsp;{post.fifthExerciseReps}</td>
  </tr>
  <tr>
  <td className="exerciseCol">{post.sixthExercise && (<i>{post.sixthExercise}&nbsp;&nbsp;</i>)}</td>
  <td className="weightCol">{post.sixthExerciseWeight && (<i>{post.sixthExerciseWeight}#</i>)}</td>
  <td>{post.sixthExerciseSets && (<i>{post.sixthExerciseSets}&nbsp;x</i>)}</td>
    <td>&nbsp;{post.sixthExerciseReps}</td>
  </tr>
</tbody>
</table>
                
                <p className="singlePostDescription">{post.description}</p>
            </div>
        </div>
    )
}
