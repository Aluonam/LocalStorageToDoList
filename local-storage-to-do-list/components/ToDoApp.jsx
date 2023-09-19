import React, {useEffect, useState} from 'react'
import ToDoList from './ToDoList'

const ToDoApp = () => {

    const [taskList, setTaskList] = useState([])
    const [inputUser, setInputUser] = useState("")

    useEffect(() => {
      const taskLocal = JSON.parse(localStorage.getItem("listadoDeTareas"))
      if (!taskLocal === null) setTaskList(taskLocal)
    }, [])
    
    const addTaskToLocal = (value) =>{
        localStorage.setItem("listadoDeTareas",JSON.stringify(value))
    }

    const handleAddTask = () =>{
        setTaskList([...taskList, inputUser])
        setInputUser("")
        addTaskToLocal([...taskList, inputUser])

    }

  return (
    <>
    <input type='text' onChange={(e)=>{setInputUser(e.target.value)}} value={inputUser}></input>
    <button onClick={handleAddTask}>Añadir tarea</button>
    <ToDoList taskList={taskList}></ToDoList>
    </>
  )
}

export default ToDoApp