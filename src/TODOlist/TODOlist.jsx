import { useState } from "react"
import Element from "./Element"

function TODOList() {
    const [todo, setTodo] = useState('')
    const [todos,setTodos] = useState([{ id:"00", text: "ugotuj obiad", done: false}])
    
    function TODOadd(){
        setTodos(prev => [...prev,{id: Math.random().toString(16).slice(2), text:todo, done:false
        }])
    }

    function changeTODO(id) {
        const tmp = todos.map((element) => {
        if (element.id === id) {
            return {...element,done: !element.done}
        } else {
            return element
        }
    })
    setTodos(tmp)
    }

    function deleteTODO(id) {
        const tmp2 = todos.filter((element) => element.id !== id)
        setTodos(tmp2)
    }

    return <div><h1>Lista TODO</h1>
    <div><input type="text" onChange={(e) => setTodo(e.target.value)} /><button onClick={TODOadd}>dodaj</button></div>
    <div>{todos.map((element) => <element element={element} />)}</div>
    <div className="listWrapper">{todos.map((element) => <Element element={element} del={deleteTODO} chan={changeTODO} />)}</div>
</div>
}
export default TODOList