function Todo(props) {
  return (
    <div className="card">
      <h2>{props.todoTitle}</h2>
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
