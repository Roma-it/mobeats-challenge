import React from 'react'
import FormText from '../FormText'
import Button from '../Button'
import { Link} from "react-router-dom"
import RangeInput from '../RangeInput'

function Page3({pageDown, page, pageUp}) {
    return (
        <>
                <FormText text="How much is your average monthly electric bill?"/>
                <RangeInput/>
                <div className="btn-container" id="btn-next">
                    <Link to="/2" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageDown} page={page} text="Back" classBtn="btn back"/>
                    </Link>
                    <Link to="/4" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageUp} page={page} text="Next" classBtn="btn"/>
                    </Link>
                </div>
        </>
    )
}

export default Page3