import {createStore} from 'redux'
import todoApp from '../reducer/todo'
let store = createStore(todoApp)