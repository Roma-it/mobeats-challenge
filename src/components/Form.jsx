import React from 'react'
import { Route, Switch, Link} from "react-router-dom"
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'
import Page9 from './pages/Page9'
import Page10 from './pages/Page10'

function Form({pageDown, page, pageUp}) {

     return (
        <form className="form">      
        <Switch>
            <Route exact path="/">
                <Home pageUp={pageUp} page={page}/>
            </Route>
            <Route exact path="/1">
                <Page1 pageUp={pageUp} pageDown={pageDown} page={page}/>
            </Route>
            <Route exact path="/2">
                <Page2 pageUp={pageUp} pageDown={pageDown} page={page}/>
            </Route>
            <Route exact path="/3">
                <Page3 pageUp={pageUp} pageDown={pageDown} page={page}/>
            </Route>
            <Route exact path="/4">
                <Page4 pageUp={pageUp} pageDown={pageDown} page={page}/>
            </Route>
            <Route exact path="/5">
                <Page5 pageUp={pageUp} pageDown={pageDown} page={page}/>
            </Route>
            <Route exact path="/6">
                <Page6 pageUp={pageUp} pageDown={pageDown} page={page}/>
            </Route>
            <Route exact path="/7">
                <Page7 pageUp={pageUp} pageDown={pageDown} page={page}/>
            </Route>
            <Route exact path="/8">
                <Page8 pageUp={pageUp} pageDown={pageDown} page={page}/>
            </Route>
            <Route exact path="/9">
                <Page9 pageUp={pageUp} pageDown={pageDown} page={page}/>
            </Route>
            <Route exact path="/10">
                <Page10 pageDown={pageDown} page={page}/>

            </Route>
        </Switch>
        </form>
    )
}

export default Form
