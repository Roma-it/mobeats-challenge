import React from 'react'
import FormText from '../FormText'
import Button from '../Button'
import { Link} from "react-router-dom"
import InputField from '../InputField'
import SmallText from '../SmallText'

function Page9({pageDown, page, pageUp}) {
    return (
        <>
                <FormText text="What phone number can we reach you at?"/>
                <InputField placeHolder="(000) 000-0000"/>
                <SmallText/>
                <div className="btn-container" id="btn-next">
                    <Link to="/8" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageDown} page={page} text="Back" classBtn="btn back"/>
                    </Link>
                    <Link to="/10" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageUp} page={page} text="Next" classBtn="btn"/>
                    </Link>
                </div>
        </>
    )
}

export default Page9