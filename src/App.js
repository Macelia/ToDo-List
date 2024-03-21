
import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])
  const inputRef = useRef()

  const handleAddTodo = ()=> {

    const text =inputRef.current.value;
    const newItem = { completed: false,text};

    setTodos([...todos,newItem]);
    inputRef.current.value = "";

  };

  const handleItemDone = (Index)=> {
     const newTodos = [...todos];
     newTodos[Index].completed =!newTodos[Index].completed;
     setTodos(newTodos)
     
  }
  const handleDeleteItem =(Index)=>{
    const newTodos = [...todos];
    newTodos.splice(Index,1)
    setTodos(newTodos)
  }



  return (
    <div className="App">
        <h2>TODO List </h2>
        
        <div className='to-do-container'>
        <ul>
           {
            todos.map(({text, completed}, Index) => {

               return  <div className='item'>
                <li key={Index} className={completed ? "Done":""} onClick={ ()=> handleItemDone(Index)}>{text}</li>
                <span onClick={()=>handleDeleteItem(Index)} className='trash'>❌</span>
              </div>

            })
            }
        </ul>

        <input ref={inputRef} placeholder='Enter item...'/>
        <button onClick={handleAddTodo}>Add</button>
        </div>

    </div>
  );
}

export default App;
