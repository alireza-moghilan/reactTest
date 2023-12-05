import { useState } from "react"

export const CounterSfc = (ev)=> {
    const [textTitle]= useState("counterSfc");
    const [counter,setCounter]= useState(0);

    return(
        <>
            <h1>
                {textTitle}
            </h1>
            
            <span>Counter: {counter}</span>

            <button onClick={ev=>(setCounter(counter+1))}>
                add
            </button>
        </>
    )
}