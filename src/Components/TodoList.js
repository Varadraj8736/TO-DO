import Todo from "./Todo";

const TodoList = ({todolist,setTodoList}) =>
{
    return (
        <div>
            {todolist.map((todoitem)=>(
                <Todo 
                setTodoList = {setTodoList}
                key={todoitem.id} 
                todoitem = {todoitem} 
                todolist = {todolist}>

                </Todo>
            ))}
        </div>
    );
}
export default TodoList;