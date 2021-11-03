import {
    Switch,
    Route,
    BrowserRouter as Router,
} from 'react-router-dom'
import { CancelMessage } from './pages/CancelMessage'
import { Form } from './pages/Form'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Component, FC } from 'react'
import { getUserByUuid } from './services/UiidExistsService'

interface IPropsPrivateRoute {
    component: Element
}



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Form} path="/form" />
                <Route component={CancelMessage} path="/user/cancel/:uuid" />
                <Route component={NotFound} path="*" />
            </Switch>
        </Router>
    )
}

export {
    Routes
}