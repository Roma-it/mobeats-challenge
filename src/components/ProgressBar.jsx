import React from 'react'
import './progress-bar.css'


function ProgressBar(props) {

    return (
        // <div className="progress-box">
            <div className="progress">
                <div className="progress-bar" style={{width:props.valueWidth+"%"}}></div>
            </div>
        // </div>
    )
}

export default ProgressBar

