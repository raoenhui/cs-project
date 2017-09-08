import {connect} from "react-redux";
import {addTodo} from "../actions/index";

let AddTodo = ({dispatch})=>{
    return(<div>
        <from onSubmit={e=>{
            e.preventDefault();
            if(!input.value.trim()){return}
            dispatch(addTodo(input.value))
            input.value = ""
        }}>
            <input ref={node=>{input=node}}/>
            <button type="submit">
                Add Todo
            </button>
        </from>
    </div>)
}
AddTodo = connect()(AddTodo)
export default AddTodo