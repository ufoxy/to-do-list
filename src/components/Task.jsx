import React from "react";
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from "react-router-dom";

import "./Task.css"

export default function Task({ task, handleTaskClick, handleTaskDeletion }) {

    const history = useHistory();

    function handleTaskDetailsClick() {
        history.push(`/${task.title}`);
        history.go();
    }

    return (
        <div 
        className="task-container"
        style={ task.completed ? { backgroundColor: '#eee' } : {} }
        >

            <div
            className="title-and-checkbox-container"
            >
                <input 
                type="checkbox" 
                checked={ task.completed ? true : false }
                onClick={() => handleTaskClick(task.id)}
                />
                <span
                className="task-title"
                style={ task.completed ? { textDecoration: 'line-through', color: '#0000007c' } : {} }
                onClick={() => handleTaskClick(task.id)}
                >
                    {task.title}
                </span>
            </div>

            <div className="buttons-container">
                
                    <button 
                    className="see-task-details-button" 
                    onClick={handleTaskDetailsClick}
                    >
                        <CgInfo />
                    </button>

                    <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
                        <CgClose />
                    </button>
            </div>
        </div>
    );
};