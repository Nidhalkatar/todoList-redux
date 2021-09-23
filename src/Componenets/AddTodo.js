/* import React, { useState } from 'react'

export default function AddToDo({addHandler}) {

const [input, setInput]=useState('')

const inputHandler=(e)=>{
setInput(e.target.value
)
}

const addTodo=()=>{
addHandler({
    ID:Math.random(),
    text:input,
    isDone:false
})
setInput('')
}

    return (
        <div>
            <input
            ID='myInput'
            type='text'
            value={input}
            placeholder='type here '
            onChange={inputHandler}
          
            />
            <button  className='btn-add'   onClick={addTodo} > Add  </button>
        </div>
    )
} */
import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';

import { addHandler } from '../Redux/Actions';
import { filter } from '../Redux/Actions';
/* const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
}; */

const AddTodo = () => {
  const [input, setInput] = useState('');
 /*  const tasks = useSelector((state) => state.tasks); */
  const dispatch = useDispatch();
  const statusHandler=(e)=>{
    dispatch (filter(e.target.value))  
}

  let id ;
  return (
    <div className="Input">  
          <input
            type="text"
            id="myInput"
            placeholder="Enter New Task"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="add-Btn"
            onClick={() => {
              input.trim()
                ? dispatch(addHandler({ id, text: input, complete: false }))
                : alert('Please enter a valid text');
              setInput('');
            }}
          >
            Add
          </button>
          <div >
              <select onChange={statusHandler} name="todos" >
                  <option value="All">All</option>
                  <option value="Done">Done</option>
                  <option value="NotYET">NotYET</option>
  
               </select>
              </div>
        </div>
      
    
  );
};

export default AddTodo;