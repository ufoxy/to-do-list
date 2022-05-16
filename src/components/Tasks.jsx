import React from 'react';
import Task from './Task.jsx'

export default function Tasks({ tasks }) {

    console.log(tasks)
    console.log('oi')

    return (
        <>
            {tasks.map((task) => (
            <Task task={task}/>
            ))}
        </>
    )
}