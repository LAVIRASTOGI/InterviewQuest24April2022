import React from "react";
import Footer from "./Footer";

function TodoList({ todos, setTodos }) {
  const updateTask = (id) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todos.map((todo, index) => (
            <div
              className={`todo-item ${todo.completed && "todo-item-active"}`}
              onClick={() => updateTask(todo.id)}
              data-testid='text-container'
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer
          numberOfIncomepleteTask={calcNumberOfIncompletedTasks()}
        ></Footer>
      </div>
    </div>
  );
}

export default TodoList;
