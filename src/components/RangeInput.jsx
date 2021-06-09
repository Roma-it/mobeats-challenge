import React from 'react'
import {useEffect, useState} from "react"
import './range-input.css'

function RangeInput() {

    const [result, setResult] = useState(400)

    useEffect(() => {
       const inputResult = document.getElementById("rangeInput") 
       setResult(inputResult.value)
      
    }, [])
    
    const updateResult = (e)=>{
        setResult(e.target.value)
    }


    return (
        <div>
            <p className="result">${result}</p>
            <input onChange={updateResult} className="range-input" id="rangeInput" type="range" min="10" max="800" value={result}/>
            <div className="numbers">
                <p className="center">$10</p>
                <p className="center">$800+</p>
            </div>
        </div>
    )
}

export default RangeInput
