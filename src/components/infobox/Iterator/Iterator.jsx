import { useState } from "react"

function Iterator() {

    const [ number, setNumber] = useState(2)
    const [isShow, setIsShow] = useState(false)
    const [query, setQuery] = useState('')

    function handleButton() {
        setNumber(prev => prev + 1)
    }
    return <div>
        <button onClick={handleButton}>Naciśnij mnie</button>
        <p>Wartość state'a: {number}</p>
        <br />
        <button onClick={()=>setIsShow(prev => !prev)}>{isShow?"ukryj wiadomosc" : "pokaz wiadomosc"}</button>
        {isShow && <h1>Nasza ukryta wiadomosc</h1>}
        <br />
        <input type='text' onChange={(e) => setQuery(e.target.value)}/>
        <p>Wartosc inputa: {query}</p>
    </div>
}

export default Iterator