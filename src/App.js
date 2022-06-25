import React, { useEffect, useState } from 'react'
import './App.css'
import { Container } from './components/Container'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl'

function App() {
  const [tasksItems, setTasksItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  useEffect(() => {
    setTasksItems(
      localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks'))
        : []
    )
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))

    return () => {}
  }, [tasksItems])

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <React.StrictMode>
          <TaskCreator createNewTask={createNewTask} />
          <TaskTable
            tasksItems={tasksItems}
            toggleTask={toggleTask}
            showCompleted={false}
          />

          <VisibilityControl
            showCompleted={showCompleted}
            onCheckboxChange={checked => setShowCompleted(checked)}
            onClickClearBtn={clearTasks}
          />

          {showCompleted && (
            <TaskTable
              tasksItems={tasksItems}
              toggleTask={toggleTask}
              showCompleted={true}
            />
          )}
        </React.StrictMode>
      </Container>
    </main>
  )

  function createNewTask(newTaskName) {
    if (!tasksItems.find(task => task.name === newTaskName)) {
      setTasksItems([...tasksItems, { name: newTaskName, done: false }])
    }
  }

  function toggleTask(task) {
    setTasksItems(
      tasksItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    )
  }

  function clearTasks() {
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }
}

export default App
