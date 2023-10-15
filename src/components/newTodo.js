import React, { useState } from "react";
import './newTodo.css'




const NewTodo = ({name,deleteToDo, state}) => {

const [complete, setComplete] = useState(false)

  return <div className="newTodo">
    <input type="checkbox" onClick={() => setComplete(!complete)}/>
    <h5 className={state === complete ? 'none' :'complite'}  >{name}</h5>
    <button onClick={() => deleteToDo(name)} className="delete">x</button>
  </div>
}

export default NewTodo;