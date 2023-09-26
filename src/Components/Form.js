import styles from "../style.module.css"
import shortid from 'shortid'

const Form =({todo,setTodo,todolist,setTodoList})=>{

    const handlechange = (event) =>{
        setTodo(event.target.value);
    }
    const handlesubmit = (event) =>
    {
        event.preventDefault()
        setTodoList([...todolist,{name: todo ,id: shortid.generate() }])
        setTodo("")
        
    }

    return(
        <div className = {styles.todoform}>
            <form onSubmit={handlesubmit}>
                <input 
                value = {todo} 
                onChange={handlechange} 
                className = {styles.todoinput} 
                placeholder = "ADD TODO ITEM">
                </input>
                <button type = "submit" className={styles.todobutton}>ADD</button>
            </form>
        </div>
    )
}
export default Form;