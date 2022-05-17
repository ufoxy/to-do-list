import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import AddTask from './components/AddTask.jsx';
import Tasks from './components/Tasks.jsx';
import './App.css';

export default function App() {

  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    }, 
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  function handleTaskAddition(taskTitle) {
    const newTasks = [ 
      ...tasks, 
      {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  function handleTaskClick(id) {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }  
      }

      return task
    })

    setTasks(newTask)
  }

  function handleTaskDeletion(id) {
    const newTask = tasks.filter(task => task.id !== id)

    setTasks(newTask)
  }

  return (
      <Router >

        <div className="container">
          <Header children={"Minhas Tarefas"} />
            <Route
            path="/"
            exact
            render={() => (
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion} />
              </>
            )} />
          </div>

      </Router>
  )
}

/*
      <Router >
          <Routes>

            <Route
            path="/"
            exact
            render={() => (
              <>
              <Header children={"Minhas Tarefas"} />
              <div className="container">
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion} />
                </div>
              </>
            )} />

          </Routes>
      </Router>
*/
