import './App.css'
import { useState } from 'react';
import Task from "./components/Task";
import AddTaskForm from './components/AddTaskForm';



const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  function addTask(text) {
    const newTask = {
      id: tasks.length + 1,
      text: text,
      completed: false
    };

    setTasks([...tasks, newTask]);

  }
  
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function taskCompleted(taskId) {
    const updated = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updated);
  }
  return (
    <>
      <h1>Lista de Tareas</h1>

      <AddTaskForm addTask={addTask} />

      {tasks.map((task) => (
        <Task key={task.id} id={task.id} text={task.text} completed={task.completed} deleteTask={deleteTask} taskCompleted={taskCompleted} />
        ))}
    </>
  );
};

export default App;
