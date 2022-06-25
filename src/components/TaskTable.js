import { TaskRow } from './TaskRow'

export const TaskTable = ({
  tasksItems,
  toggleTask,
  showCompleted = false
}) => {
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tarea</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  )

  function taskTableRows(doneValue) {
    return tasksItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ))
  }
}
