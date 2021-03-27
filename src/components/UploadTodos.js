import React, { useState, useEffect, useReducer } from "react";
import TodosContext from "../context/todos-context";
import todosReducer from "../reducers/todos";
import TodoList from "./TodoList";

const UploadTodo = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [editStatus, setEditStatus] = useState(false);
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      dispatch({ type: "POPULATE_TODOS", todos });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="content-container">
      <h1>Todo Management App</h1>
      <TodosContext.Provider value={{ todos, dispatch, editStatus, setEditStatus }}>
        <TodoList />
      </TodosContext.Provider>
    </div>
  );
};

export default UploadTodo;
