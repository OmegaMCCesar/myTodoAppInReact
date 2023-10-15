import React, { useState } from 'react';
import './boxTdo.css'
import NewTodo from './newTodo';


const BoxTdo = ({todos, setTodos}) => {

  

  const [inpValue, setInpValue] = useState('')

  const DeleteAll = () => {
    setTodos([])
  }

  const deleteToDo = (name) => {
  /* DeleteTodos borra una tarea */
  const deleteTodos = todos.filter(e => e.name !== name)
      setTodos(deleteTodos)
    }

  const upDateToDos = (inp) => {
     const newToDo = {
      name:inp,
      state:false
     }
   
        if(inp.trim() !== ''){
          setInpValue('')
          setTodos([...todos ,newToDo])
          }    
  }


  
  const handleChange = (e) => {
      const inp = e.target.value
      setInpValue(inp)
     }

 return <div className='container'>
   <h1>To Do App</h1>
   {todos.length === 0 ? <h4>You don't have to do yet</h4> : ''}
   <h5>{`${inpValue} is your new To Do`}</h5>
        New ToDo 
        <br/>
        <input className='inp-newTodo' type='text' name='int-ToDo' value={inpValue} onChange={(e) => handleChange(e)}/>
        <button onClick={() => upDateToDos(inpValue)}>AddToDo</button>
     {
         todos.length > 0 ? <button onClick={() => DeleteAll()} >DeleteAll</button> : null
     }  
   {
    todos.map( (todo, index) => 
      <NewTodo name = {todo.name} key={`${index+todo.name}`}  deleteToDo = {deleteToDo}  state = {todo.state} />
     )
   }
 </div>
}

export default BoxTdo;