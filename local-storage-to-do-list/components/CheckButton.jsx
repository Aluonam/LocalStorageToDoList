import React from 'react'

const CheckButton = ({taskList, setTaskList, index}) => {

    const handleCompleteTask = () => {
        //clono lista de tareas
        const updatedTasks = structuredClone(taskList);
        //compruebo con .includes si ya hay check✅ (devuelve true o false)
        const isCompleted = updatedTasks[index].includes('✅')
        //si no tiene el check lo añado y sino nada
        // if(isCompleted === false){updatedTasks[index] = `✅ ${updatedTasks[index]}`}
        if(!isCompleted){
            updatedTasks[index] = `✅ ${updatedTasks[index]}`
            setTaskList(updatedTasks);
            }
      };

  return (
    <button onClick={handleCompleteTask}>Completada</button>
  )
}

export default CheckButton