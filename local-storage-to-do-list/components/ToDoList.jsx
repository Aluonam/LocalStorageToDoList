import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({taskList}) => {

    const listadoDeTareas = taskList.map((actualElement)=>{
        return(
           <ToDoItem task={actualElement}></ToDoItem>
        )
    })
  return (
    <div>{listadoDeTareas}</div>
  )
}

export default ToDoList