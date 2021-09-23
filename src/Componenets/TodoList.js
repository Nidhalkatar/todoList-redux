import React,{useEffect} from 'react'
import ToDo from '../Componenets/Todo'
import { useSelector,useDispatch } from 'react-redux'
import { filterHandler } from '../Redux/Actions'


    const TodoList=()=>{
        const dispatch=useDispatch()
        const todos = useSelector(state => state.todos)
        const filtredTodos=useSelector(state=>state.filtredTodos) 
        const filter=useSelector(state=>state.filter) 
        useEffect(()=>{
              dispatch(filterHandler())
        },[filter,todos]) 
    
    return (
        <div className='todoList'>
            
                 {filtredTodos.map((el)=>(
                 <ToDo key={el.ID} task={el}/>
                   ) ) }
             
        </div>
    ) }          
export default TodoList;