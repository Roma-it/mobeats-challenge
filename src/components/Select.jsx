import React from 'react'
import './select.css'

function Select(props) {

const data = ["Anza Electric", "City & County of San Francisco", "City of Alameda"]

    return (
        <select className="select">
            {
                data.map((option, i) => {
                    return (
                        <option key={option+i}>{option}</option>
                    )
                })
            }
        </select>
    )
}

export default Select
