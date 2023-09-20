import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({taskList, setTaskList}) => {

   

    const listadoDeTareas = taskList.map((actualElement)=>{
        return(
            <>
            <ul>
           <ToDoItem task={actualElement}></ToDoItem> <button onClick={()=>{deleteTask(actualElement)}}>Borrar</button>
           </ul>
           </>
        )
    })

    const deleteTask = (actualElement) => {
        const newTaskList = taskList.filter((item)=>item !== actualElement)
        setTaskList(newTaskList)
        localStorage.setItem("listOfTasks",JSON.stringify(newTaskList))

    }
    
  return (
    <>
    <div>{listadoDeTareas}</div>
    </>
  )
}

export default ToDoList