export default function Comment({comment}){

    const {name,email,body}=comment;
    return(
        <div className="card">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    )
}