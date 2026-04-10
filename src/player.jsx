import { useEffect, useState } from "react"

export default function Players(){

    const [players,setPlayers] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[]);
    return(
        <div>
            <h3>Player: {players.length}</h3>
        
        </div>
    )
}