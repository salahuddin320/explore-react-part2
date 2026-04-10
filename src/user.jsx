import { use } from "react"
import './App.css'

export default function User({fetchUser}){
    const user = use(fetchUser);
    return(
        <div className="card">
           <h3>User: {user.length}</h3> 
        </div>
    )
}