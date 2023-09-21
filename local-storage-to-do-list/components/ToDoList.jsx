import React from 'react'
import ToDoItem from './ToDoItem'
import CheckButton from './CheckButton'

const ToDoList = ({taskList, setTaskList}) => {

   

    const listadoDeTareas = taskList.map((actualElement, index)=>{
        return(
            <>
            <ul>
           <ToDoItem task={actualElement}></ToDoItem> <button onClick={()=>{deleteTask(actualElement)}}>Borrar</button> 
           <CheckButton taskList={taskList} setTaskList={setTaskList} index={index}></CheckButton>
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