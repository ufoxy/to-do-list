import React from 'react';
import Task from './Task.jsx'

export default function Tasks({ tasks, handleTaskClick, handleTaskDeletion }) {

    // console.log(tasks)
    // console.log('oi')

    return (
        <>
            {tasks.map((task) => (
            <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
            ))}
        </>
    )
}