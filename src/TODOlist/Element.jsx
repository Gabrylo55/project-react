function Element ({element, del, chan}) {
    return <div>
        <p>{element.text} {element.done && " - ZROBIONE" }</p>
    <button onClick={() => {del(element.id)}} >Usuń</button>
    <button onClick={() => {chan(element.id)}} >Zmień</button>
    </div>

}

export default Element