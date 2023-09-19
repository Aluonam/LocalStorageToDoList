import React, {useEffect, useState} from 'react'

const ToDoApp = () => {

    const [taskList, setTaskList] = useState([])

    useEffect(() => {
      const taskLocal = JSON.parse(localStorage.getItem("listadoDeTareas"))
      if (!taskLocal === null) setTaskList(taskLocal)
    }, [])
    

  return (
    <div>ToDoApp</div>
  )
}

export default ToDoApp