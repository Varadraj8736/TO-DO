import Header from "./Components/Header";
import Form from "./Components/Form";
import { useState } from "react";
import TodoList from "./Components/TodoList";

function App() {
  const[todo,setTodo] = useState("")
  const[todolist,setTodoList] = useState([])
  return (
    <div className="App">
      <Header></Header>
      <Form 
      todo = {todo} 
      setTodo = {setTodo} 
      todolist = {todolist} 
      setTodoList = {setTodoList}>

      </Form>

      <TodoList setTodoList = {setTodoList} todolist = {todolist}/>
      
    </div>
  );
}

export default App;
