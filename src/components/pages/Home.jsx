import React from 'react'
import FormText from '../FormText'
import RadioInput from '../RadioInput'
import Button from '../Button'
import {Link} from "react-router-dom"

function Home({ page, pageUp}) {
    console.log(page)
    return (
        <>
            <FormText text="Are you a homeowner?"/>
            <RadioInput label="Yes" id="1" checked="true"/>
            <RadioInput label="No" id="2" checked=""/>
            <Link to="/1" style={{ textDecoration: 'none' }}>
                <Button pageFunction={pageUp} page={page} text="Next" classBtn="btn"/>
            </Link>
        </>
    )
}

export default Home
