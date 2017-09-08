
import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Router,Route } from 'react-router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from '../reducer/todo'
import App from './components/App'
import About from './components/About'
import Home from './components/Home'
import Landing from './components/Landing'
import Logout from './components/Logout'

let store = createStore(todoApp);
render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Route path="/landing" component={Landing}/>
            <Route path="/logout" component={Logout}/>
        </Router>
    </Provider>
            ), document.getElementById('root'))