export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          name={task.name}
          id={task.name}
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  )
}
