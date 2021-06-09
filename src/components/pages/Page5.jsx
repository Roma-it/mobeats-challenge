import React from 'react'
import FormText from '../FormText'
import Button from '../Button'
import { Link} from "react-router-dom"
import InputField from '../InputField'

function Page5({pageDown, page, pageUp}) {
    return (
        <>
                <FormText text="What email address should your results be sent to?"/>
                <InputField placeHolder="Email Address"/>
                <div className="btn-container" id="btn-next">
                    <Link to="/4" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageDown} page={page} text="Back" classBtn="btn back"/>
                    </Link>
                    <Link to="/6" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageUp} page={page} text="Next" classBtn="btn"/>
                    </Link>
                </div>
        </>
    )
}

export default Page5