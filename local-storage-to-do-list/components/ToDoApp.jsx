import React, {useEffect, useState} from 'react'

const ToDoApp = () => {

    const [taskList, setTaskList] = useState([])
    const [inputUser, setInputUser] = useState("")

    useEffect(() => {
      const taskLocal = JSON.parse(localStorage.getItem("listadoDeTareas"))
      if (!taskLocal === null) setTaskList(taskLocal)
    }, [])
    
   

  return (
    <>
    <input type='text' onChange={(e)=>{setInputUser(e.target.value)}} value={inputUser}></input>
    <button>Añadir tarea</button>
    </>
  )
}

export default ToDoApp