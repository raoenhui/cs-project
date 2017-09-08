import React from 'react'
import AddTodo from "../../containers/AddTodo"
import VisibleTodoList from "../../containers/VisibleTodoList"


// const Home = React.createClass({
//     render() {
//         return (
//             <h1>redux</h1>
//         )}
// })

module.exports = Home

const Home = ()=>{
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
}
