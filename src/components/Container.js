export const Container = ({ children }) => {
  return (
    <div className="container p-3">
      <div className="col-md-5 offset-1">{children}</div>
    </div>
  )
}
