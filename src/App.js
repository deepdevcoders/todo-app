import "./App.css";
import FunctionalTodo from "./components/FunctionalTodo";
import ReduxTodo from "./components/ReduxTodo";
import SimpleTodo from "./components/SimpleTodo";

function App() {
  return (
    <div className="App">
      {/* <SimpleTodo /> */}
      {/* <FunctionalTodo /> */}
      <ReduxTodo />
    </div>
  );
}

export default App;
