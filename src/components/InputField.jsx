import React from 'react'
import './input-field.css'

function InputField(props) {
    return (
        <div>
            <input className="input-field" type="text" placeholder={props.placeHolder}/>
        </div>
    )
}

export default InputField
