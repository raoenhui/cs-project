const Todo =({onClick, completed,text})=>{
    <li
        onclick={onClick}
        style={{textDecoration:completed?"line-through":"none"}}>
        text
    </li>
}