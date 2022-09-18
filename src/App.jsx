import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import TaskDetails from "./components/TaskDetails.jsx";
import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx";
import styled from 'styled-components';

const StyledApp = styled.div`
  // app styles //
  border-top: 15px solid #d9434f;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  // container //
  max-width: 650px;
  margin: 10vh auto;
  overflow: auto;
  min-height: 300px;
  padding: 45px;
  border-radius: 10px;
`;

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Javascript",
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
      },
    ];

    setTasks(newTasks);
  }

  function handleTaskClick(id) {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setTasks(newTask);
  }

  function handleTaskDeletion(id) {
    const newTask = tasks.filter((task) => task.id !== id);

    setTasks(newTask);
  }

  return (
    <Router>
      <StyledApp>
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
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />

        <Route path="/:taskTitle" exact component={TaskDetails} />
      </StyledApp>
    </Router>
  );
}
