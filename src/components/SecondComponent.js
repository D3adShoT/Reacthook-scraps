import React,{useState} from 'react'

function SecondComponent() {
    const initialvalue = 0;
    const [value,setvalue]= useState(initialvalue)
    const increasefive = ()=> {
        for(let i=0;i<5;i++){
            setvalue(prevValue=>prevValue+1)
        }
    }
    return (
        <div>
            {value}
            <button onClick={()=> setvalue(prevValue=>prevValue+1)}>Increase by 1</button>
            <button onClick={increasefive}>Increase by 5</button>
        </div>
    )
}

export default SecondComponent
