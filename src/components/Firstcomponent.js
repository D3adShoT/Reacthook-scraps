import React,{useState} from 'react'
import './Firstcomponent.css'

function Firstcomponent() {
    
    const [value, setvalue] = useState(0)
    const increasefive = () => {
        for(let i=0;i<5;i++){
            setvalue(value+1)
        }
    }

    return (
        <div>
            <button onClick={()=>setvalue(value +1)}>Click {value}</button>
            <button onClick={()=>setvalue(value -1)}>Click {value}</button>
            <button onClick={()=>setvalue(value +2)}>Click {value}</button>
            <button onClick={()=>setvalue(value -1)}>Click {value}</button>
            {/* This is not a good practice take this example */}

            <button onClick={increasefive}>KAro</button>
            {/* this button above doesnt works as it suppose to be. to counter that. refer second component */}



        </div>
    )
}

export default Firstcomponent
