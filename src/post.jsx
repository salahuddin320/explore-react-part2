export default function post({poke}){
    const {title,body}=poke;
    return(
        <div className="card">
            <h4>Post Title: {title}</h4>
            <p>Post Content: {body}</p>
        </div>
    )
}