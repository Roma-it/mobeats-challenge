import React from 'react'
import Button from '../Button'
import { Link} from "react-router-dom"

function Page10({pageDown, page, pageUp}) {
    return (
        <>
                <h1 className="title">CONGRATULATIONS!!!</h1>
                <h1 className="title">You got the job!!!</h1>
                <div className="btn-container" id="btn-next">
                    <Link to="/9" style={{ textDecoration: 'none' }}>
                        <Button pageFunction={pageDown} page={page} text="Back" classBtn="btn back"/>
                    </Link>
                </div>
        </>
    )
}

export default Page10