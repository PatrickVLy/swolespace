import { Link } from "react-router-dom"
import "./post.css";

export default function Post({post}) {
    return (<Link className="card" to={`post/${post._id}`}>
        <div className="post">
            
            {post.photo && (<img className="postImg" alt="postImage" src={post.photo}/>)}
            <div className="postInfo">
                <div className="postCategories">
                    {post.categories.map((c) =>(<span className="postCategory">{c.name}</span>))}
                </div>
                <span className="postTitle">{post.title}</span>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
<table className="wod">
<thead>
  <tr>
    <th colSpan="4">Workout of the Day:</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td className="exerciseCol">{post.firstExercise}:&nbsp;&nbsp;</td>
    <td>{post.firstExerciseWeight}#&nbsp;&nbsp;</td>
    <td>{post.firstExerciseSets}&nbsp;x</td>
    <td>&nbsp;{post.firstExerciseReps}</td>
  </tr>
  <tr>
  <td className="exerciseCol">{post.secondExercise}:&nbsp;&nbsp;</td>
    <td>{post.secondExerciseWeight}#&nbsp;&nbsp;</td>
    <td>{post.secondExerciseSets}&nbsp;x</td>
    <td>&nbsp;{post.secondExerciseReps}</td>
  </tr>
  <tr>
  <td className="exerciseCol">{post.thirdExercise}:&nbsp;&nbsp;</td>
    <td>{post.thirdExerciseWeight}#&nbsp;&nbsp;</td>
    <td>{post.thirdExerciseSets}&nbsp;x</td>
    <td>&nbsp;{post.thirdExerciseReps}</td>
  </tr>
  <tr>
  <td className="exerciseCol">{post.fourthExercise}:&nbsp;&nbsp;</td>
    <td>{post.fourthExerciseWeight}#&nbsp;&nbsp;</td>
    <td>{post.fourthExerciseSets}&nbsp;x</td>
    <td>&nbsp;{post.fourthExerciseReps}</td>
  </tr>
  <tr>
  <td className="exerciseCol">{post.fifthExercise}:&nbsp;&nbsp;</td>
    <td>{post.fifthExerciseWeight}#&nbsp;&nbsp;</td>
    <td>{post.fifthExerciseSets}&nbsp;x</td>
    <td>&nbsp;{post.fifthExerciseReps}</td>
  </tr>
  <tr>
  <td className="exerciseCol">{post.sixthExercise}:&nbsp;&nbsp;</td>
    <td>{post.sixthExerciseWeight}#&nbsp;&nbsp;</td>
    <td>{post.sixthExerciseSets}&nbsp;x</td>
    <td>&nbsp;{post.sixthExerciseReps}</td>
  </tr>
</tbody>
</table>
               
            </div>

        </div> </Link>
    )
}
