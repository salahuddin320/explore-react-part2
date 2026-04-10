import { use } from "react"
import Comment from './comment'

export default function Comments({commentsPromise}){

    const comments = use(commentsPromise);
    console.log(comments);
    return(
        <div className="card">
            <h3>Commets: {comments.length}</h3>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
        )
}