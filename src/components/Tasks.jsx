import React from 'react';
import Task from './Task.jsx'

export default function Tasks({ tasks, handleTaskClick, handleTaskDeletion }) {

    return (
        <div style={{marginTop: 20}}>
            {tasks.map((task) => (
            <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
            ))}
        </div>
    )
}