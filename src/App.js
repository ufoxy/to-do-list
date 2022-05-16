import React, { useState } from 'react';
import Tasks from './components/Tasks.jsx'
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

  return (
    <>
    <div className="container">
    <Tasks tasks={tasks} />
    </div>
    </>
  )
}
