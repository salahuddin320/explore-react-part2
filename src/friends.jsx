import { use } from "react";
import Friend from './friend'

export default function Friends({fetchPromise}){

    const friends = use(fetchPromise);
    console.log(friends);

    return(
            <div className="card">
                <h3>Friends: {friends.length}</h3>
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        )
}