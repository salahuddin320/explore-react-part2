import { useState } from "react"

export default function Batsman(){

    let [runs, setRuns] = useState(0);
    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }
    const [sixes, setSixes] = useState(0);


    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns);
    }

    const handleSix = () => {
        const updateRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes);
        setRuns(updateRuns);
    }

    return(
            <div>
                <h1>Runs: {runs}</h1>
                <p>Totla Six : {sixes}</p>
                {
                        runs >= 50 && <p>Great job! You got a half-century!</p>
                }
                {
                    runs >= 100 && <p>Great job! You got a century!</p>
                }
                <button onClick={handleSingle}>Single</button>
                <button onClick= {handleFour}>Four</button>
                <button onClick={handleSix}>Six</button>
            </div>
        )
}