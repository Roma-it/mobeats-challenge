import React from 'react'
import FormText from '../FormText'
import Button from '../Button'
import { Link} from "react-router-dom"
import InputField from '../InputField'

function Page6({pageDown, page, pageUp}) {
    return (
        <>
                <FormText text="What's your first name?"/>
                <InputField placeHolder="Enter First Name"/>
                <div className="btn-container" id="btn-next">
                    <Link to="/5" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageDown} page={page} text="Back" classBtn="btn back"/>
                    </Link>
                    <Link to="/7" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageUp} page={page} text="Next" classBtn="btn"/>
                    </Link>
                </div>
        </>
    )
}

export default Page6