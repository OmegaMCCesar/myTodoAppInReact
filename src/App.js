import { useState } from 'react';
import './App.css';
import BoxTdo from './components/boxTdo';



function App() {


   const [todos, setTodos] = useState([])



  return (
    <div className="App">
     <BoxTdo todos = {todos} setTodos = {setTodos}/>
    </div>
  );
}

export default App;
