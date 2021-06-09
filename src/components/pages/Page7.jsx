import React from 'react'
import FormText from '../FormText'
import Button from '../Button'
import { Link} from "react-router-dom"
import InputField from '../InputField'

function Page7({pageDown, page, pageUp}) {
    return (
        <>
                <FormText text="What's your last name?"/>
                <InputField placeHolder="Enter Last Name"/>
                <div className="btn-container" id="btn-next">
                    <Link to="/6" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageDown} page={page} text="Back" classBtn="btn back"/>
                    </Link>
                    <Link to="/8" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageUp} page={page} text="Next" classBtn="btn"/>
                    </Link>
                </div>
        </>
    )
}

export default Page7