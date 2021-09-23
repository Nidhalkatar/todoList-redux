
import './App.css';
import AddToDo from './Componenets/AddTodo';
import ToDoList from './Componenets/TodoList';
/* import { useState } from "react"; */

function App() {
/* 
const [todos, setTodos] = useState([
  {id:1, text:'Task 1', isDone:false },
  {id:2, text:'Task 2', isDone:false }
])

const deleteHandler=(ID)=>{
setTodos(
  todos.filter(el=> el.id!== ID)
)
}
 
const doneHandler=(ID)=>{
setTodos(
  todos.map(el=> el.id === ID? {...el, isDone:!el.isDone  }: el  )
)
}

const addHandler=(newTodo)=>{
  setTodos(
    [...todos, newTodo]
  )
  } */
  return (
    <div className="App">
      <h1> My TO DO APP </h1>
      <AddToDo/>
      <ToDoList />
    </div>
  );
}

export default App;