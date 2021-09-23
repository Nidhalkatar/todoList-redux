import { useDispatch } from "react-redux";
import { deleteHandler,doneHandler } from "../Redux/Actions";
import EditTodo from "./EditTodo";
export default function ToDo({task}) {


    /* const deleteTodo=()=>{
        deleteHandler(task.ID)
    } */

const doneTodo=()=>{
   dispatch( doneHandler(task.ID))
}

 const dispatch = useDispatch()

    return (
        <div className='todo-container'>
            <h3 style={ task.isDone? {textDecoration:'line-through'}:{}    }    >{task.text}</h3>

            
            <div className='buttons'>
            <button onClick={()=> dispatch ( deleteHandler(task.ID))}> Del  </button>
            <button onClick={doneTodo}  > Done  </button>
            </div>
           <EditTodo task={task}/> 
        </div>
    )
}
