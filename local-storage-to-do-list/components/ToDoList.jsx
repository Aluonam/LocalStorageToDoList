import React from 'react'

const ToDoList = ({taskList}) => {

    const listadoDeTareas = taskList.map((actualElement)=>{
        return(
            <ul>
                <li>{actualElement}</li>
            </ul>
        )
    })
  return (
    <div>{listadoDeTareas}</div>
  )
}

export default ToDoList