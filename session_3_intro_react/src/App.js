import './App.css';

function InputField() {
  return (
    <div>
      <input className="inputfield" placeholder="Enter your task here..."></input>
    </div>
  );
}

function TaskItem(props) {
  return (
    <div className="taskitem">
      <input className="icon" type="radio"></input>
      <label className="taskcontent">{props.taskcontent}</label>
    </div>
  );
}

function TaskList() {
  return (
    <div>
      <TaskItem taskcontent="Clean up bedroom" />
      <TaskItem taskcontent="Buy some milk" />
      <TaskItem taskcontent="Jogging" />
      <TaskItem taskcontent="Learn React" />
      <TaskItem taskcontent="Doing Exercises" />
    </div>
  );
}

function TasksLeft() {
  return (
    <div className="footer">
      <div>5 tasks left</div>
      <div>MindX todolist</div>
    </div>
  )
}

function Container() {
  return (
    <div className="container">
      <InputField />
      <TaskList />
      <TasksLeft />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
