import { useState } from 'react'

export const TaskCreator = props => {
  const [newTaskName, setNewTaskName] = useState('')

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-8">
        <input
          type="text"
          placeholder="ingresa una nueva tarea"
          onChange={e => setNewTaskName(e.target.value)}
          value={newTaskName}
          className="form-control"
        />
      </div>
      <div className="col-4">
        <button className="btn btn-primary btn-md">guardar tarea</button>
      </div>
    </form>
  )

  function handleSubmit(e) {
    e.preventDefault()
    props.createNewTask(newTaskName)
    setNewTaskName('')
  }
}
