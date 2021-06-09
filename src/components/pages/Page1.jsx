import React from 'react'
import FormText from '../FormText'
import Button from '../Button'
import { Link} from "react-router-dom"
import InputField from '../InputField'

function Page1({pageDown, page, pageUp}) {
    return (
        <>
                <FormText text="What is your zip code?"/>
                <InputField placeHolder="Enter your zip code"/>
                <div className="btn-container" id="btn-next">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageDown} page={page} text="Back" classBtn="btn back"/>
                    </Link>
                    <Link to="/2" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageUp} page={page} text="Next" classBtn="btn"/>
                    </Link>
                </div>
        </>
    )
}

export default Page1