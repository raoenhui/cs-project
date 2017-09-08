import todo from "./todo"
import visibilityFilter from "./visibiltyFliter"
import {combineReducers} from "redux"
const todoApp = combineReducers({
    todo,
    visibilityFilter
})

export default todoApp