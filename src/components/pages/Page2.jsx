import React from 'react'
import FormText from '../FormText'
import Button from '../Button'
import { Link} from "react-router-dom"
import Select from '../Select'

function Page2({pageDown, page, pageUp}) {
    return (
        <>
            <FormText text="Who's your electric utility provider?"/>
                <Select/>
                <div className="btn-container" id="btn-next">
                    <Link to="/1" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageDown} page={page} text="Back" classBtn="btn back"/>
                    </Link>
                    <Link to="/3" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageUp} page={page} text="Next" classBtn="btn"/>
                    </Link>
                </div>
        </>
    )
}

export default Page2