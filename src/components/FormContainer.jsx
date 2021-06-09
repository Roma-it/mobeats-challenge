import React from 'react'
import Form from './Form'
import './form-container.css'
import ProgressBar from './ProgressBar'
import { useState, useEffect } from "react"

function FormContainer() {

    const [page, setPage] = useState(1);
    const [valueWidth, setValue] = useState(10);

    useEffect(() => {
        setValue(valueWidth*page) 
    }, [page])
    const pageUp= ()=>{
        setValue(10)
        if(page<11){
            setPage(page+1)
        }
    }
     const pageDown= ()=>{
         setValue(10)
        if(page>1){
            setPage(page-1)
        }
    }
    console.log(page)
    return (
        <div className="form-container">
            <ProgressBar valueWidth={valueWidth}/>
            <Form pageUp={pageUp} pageDown={pageDown} page={page} />
        </div>
    )
}

export default FormContainer
