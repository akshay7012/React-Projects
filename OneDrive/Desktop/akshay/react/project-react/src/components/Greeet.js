


import React, { useState } from "react";

const Todo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [item, setItem] = useState([])
    const EventAdd = (e) => {
        setName(e.target.value)
        setName('')
    }
    const addItems = (prev) => {
        setItem(prev => [...item, {
            name: item.name,
            count: item.count
        }])


    }
    return (
        <div>
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <h1>{count}</h1>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
            < input type="text" onClick={EventAdd}></input>

            <button onChange={addItems}>submit</button>

            {
                item.map(text => (
                    <li key="key">{`${count} ${item}`}</li>
                ))
            }




        </div>
    )
}

export default Todo