import React from 'react'
import { useEffect} from "react"
import "./radio-input.css"

function RadioInput(props) {
 
    useEffect(() => {
        const check = document.getElementById("1");
        check.checked=true
    }, [])

    return (
        <div  className="radio-container">
            <input type="radio" className="radio" 
            id={props.id} name="pageOne" value={props.label}  />
            <div  className="circle"></div>
            <label htmlFor="one" className="label">{props.label}</label>
        </div>
    )
}

export default RadioInput
