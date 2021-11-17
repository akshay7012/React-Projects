import React, { useState } from 'react'

function Todo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [item,setitem]=useState([]) //item=['yadhu','akshay','vishnu']
    //item=[{id : 1 , value='yadhu'},{}]
    const eventAdd=()=>{
        setitem(prev=>[...prev,name])
    }
        return (
        <div>
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <h1>{count}</h1>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
            <input type="text" onChange={e => setName(e.target.value)} />
            <button onClick={eventAdd} >submit</button>
            <div>
                {
                    item.map((i,key)=>{
                        return(
                            <h2>{i}</h2>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo
