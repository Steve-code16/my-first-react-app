import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo todoTitle="Learn APIs" />
      <Todo todoTitle="Learn React" />
      <Todo todoTitle="Build Cool Project" />
    </div>
  );
}

export default App;
