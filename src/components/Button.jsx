import React from 'react'
import './button.css'

export default function Button(props) {

    return (
        <div className="btn-container" id="btn-next">
            <button onClick={props.pageFunction} className={props.classBtn}>
            {props.text}
            </button>
        </div>
    )
}
