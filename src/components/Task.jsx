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
        style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
        >
            <div 
            className="task-title" 
            onClick={() => handleTaskClick(task.id)} 
            >
                {task.title}
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