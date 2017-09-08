const visiblityFliter = (state="SHOW_ALL",action)=>{
    switch(action.type){
        case "SET_VISIBILITY_FILTER":
            return action.visiblityFliter
        default:
            return state
    }
}