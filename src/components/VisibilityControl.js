export const VisibilityControl = ({
  showCompleted,
  onCheckboxChange,
  onClickClearBtn
}) => {
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={e => onCheckboxChange(e.target.checked)}
          className="form-check-input"
        />
        <label>Mostrar tares terminadas</label>
      </div>
      <button onClick={handleClickClearBtn} className="btn btn-danger btn-md">
        Borrar tareas terminadas
      </button>
    </div>
  )

  function handleClickClearBtn() {
    if (
      window.confirm('Estás seguro que quieres eliminar las tareas terminadas?')
    ) {
      onClickClearBtn()
    }
  }
}
