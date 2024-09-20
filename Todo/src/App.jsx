import { useState } from 'react'
import ToDoList from './components/ToDoList'

function App() {
  const [toDoList, setToDoList] = useState([]);

  let addList = (inputText) =>{
    setToDoList([...toDoList, inputText]);
  }

  return (
    <>
      <ToDoList/>
    </>
  )
}

export default App
