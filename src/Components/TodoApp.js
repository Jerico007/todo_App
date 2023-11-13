import { React, useState } from "react";
import { add_task, edit_task, delete_task } from "../Redux/Action/todoActions";
import { useSelector, useDispatch } from "react-redux";
const TodoApp = () => {
  //dispatch methode
  const dispatch = useDispatch();
  //Current state
  const { data } = useSelector((state) => state);

  //Take input
  const [inputValue, setInputValue] = useState("");

  //Edit input value
  const [editValue, setEditValue] = useState("");

  //Id count
  const [idCount, setCount] = useState(1);

  //Edit task State
  const [editId, setEditId] = useState(false);

  //function to add task
  function addTask() {
    if (inputValue === "") {
      return;
    }
    dispatch(add_task({ id: idCount, text: inputValue.trim() }));
    setCount(idCount + 1);
    setInputValue("");
  }

  //Functio to edit task
  function editTask(e) {
    if (e.target.value === "") {
      return;
    }

    setEditValue(e.target.value);
  }

  //Function to save edited task
  function saveTask(e) {
    if (editValue) {
      dispatch(edit_task({id: e.target.id, text: editValue.trim()}));
      setEditValue("");
      setEditId(false);
    }
    return;
  }
 
  //Function to delete task
  function delteTask(e){
     dispatch(delete_task(e.target.id));
  }
  
  return (
    <div className="TodoApp">
      <input
        type="text"
        onInput={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {data.map((val) => (
          <li key={val.id}>
            {Number(editId) === Number(val.id)? (
              <input type="checkbox" checked />
            ) : (
              <input type="checkbox" disabled={true} />
            )}
            {Number(editId) === Number(val.id) ? (
              <input type="text" value={editValue} onInput={editTask} />
            ) : (
              <span>{val.text}</span>
            )}
            {Number(editId) === Number(val.id) ? (
              <button id={val.id}  onClick={saveTask}>Save</button>
            ) : (
              <button id={val.id} onClick={(e) => setEditId(e.target.id)}>
                Edit
              </button>
            )}

            <button id={val.id} onClick={delteTask}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
