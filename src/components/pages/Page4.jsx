import React from 'react'
import FormText from '../FormText'
import Button from '../Button'
import { Link} from "react-router-dom"
import RadioInput from '../RadioInput'

function Page4({pageDown, page, pageUp}) {
    return (
        <>
                <FormText text="How sunny is your roof area?"/>
                <RadioInput label="Full Sun" id="1" checked="true"/>
                <RadioInput label="Partial Sun" id="2"checked=""/>
                <RadioInput label="A Lot of Shade" id="3" checked=""/>
                <RadioInput label="Uncertain" id="4" checked=""/>
                <div className="btn-container" id="btn-next">
                    <Link to="/3" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageDown} page={page} text="Back" classBtn="btn back"/>
                    </Link>
                    <Link to="/5" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageUp} page={page} text="Next" classBtn="btn"/>
                    </Link>
                </div>
        </>
    )
}

export default Page4