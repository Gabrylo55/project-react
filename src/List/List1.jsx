import React, { useState } from "react"

const List = () =>{
    const [list, setList] = useState([1,2,3,4,5,6])
    const changeList = (list) => {
        const tmp = list.map((x)=> x + 2)

        return tmp

    }

    return<div>{list.map((x)=>{return x + ", "})}<br /> {changeList(list).map((x)=> {return x + ", "})}</div>
} 

export default List
