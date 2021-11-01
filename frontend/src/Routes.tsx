import {
    Switch,
    Route,
    BrowserRouter as Router,
} from 'react-router-dom'
import { Form } from './pages/Form'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Form} path="/form" />
                <Route component={NotFound} path="*" />
            </Switch>
        </Router>
    )
}

export {
    Routes
}