import React from 'react';
import { useParams } from 'react-router-dom';

import Button from './Button';
import './TaskDetails.css';

function TaskDetails() {
    const params = useParams()

    console.log(params)
    
    return (
        <>
            <div className='back-button-container'>
                <Button children={"Voltar"} />
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error quisquam cum molestiae, possimus odio ipsam nihil. Rem pariatur incidunt, placeat inventore explicabo a, ab libero temporibus labore officia et?
                </p>
            </div>
        </>
    );
}

export default TaskDetails;