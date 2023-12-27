import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTODO";
import TodoItems from "./Components/todoitems";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemsContextProvider from "./store/To-do-items-store";

function App() {
  return (
    <div className="body">
      <TodoItemsContextProvider>
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage></WelcomeMessage>
          <TodoItems></TodoItems>
        </center>
      </TodoItemsContextProvider>
    </div>
  );
}

export default App;
