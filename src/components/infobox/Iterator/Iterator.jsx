import { useState } from "react"

function Iterator() {

    const [ number, setNumber] = useState(2)

    function handleButton() {
        setNumber(4)
    }
    return <div>
        <button onClick={handleButton}>Naciśnij mnie</button>
        <p>Wartość state'a: {number}</p>
    </div>
}

export default Iterator