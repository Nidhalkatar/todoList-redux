import EditHandler from "../Redux/Edit";
import { useDispatch } from "react-redux";
import { useState } from "react";

const EditTodo = ({ task }) => {
  const [newInput, setNewInput] = useState(task.text);
  const [edit, setEdit] = useState(task.edit);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(EditHandler(task.ID, newInput));
    setNewInput("");
    setEdit(false);
  };

  return (
    <div className='edit'>
      <button className="btn" onClick={() => setEdit(true)}>
        Edit
      </button>
      {edit === true ? (
        <div className="edit-input">
          <input
            className="input"
            value={newInput}
            type="text"
            onChange={(e) => setNewInput(e.target.value)}
            autoFocus
          />
          <button className="save" onClick={submitHandler}>
            Save
          </button>
          <button className="cancel" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default EditTodo;
