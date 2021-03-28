import React, { useState, useEffect, useReducer } from "react";
import TodosContext from "../context/todos-context";
import todosReducer from "../reducers/todos";
import TodoList from "./TodoList";

const UploadTodos = () => {
  const [todos, dispatch] = useReducer(todosReducer, [])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos) {
      dispatch({
        type: 'POPULATE_TODOS',
        todos
      })
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      <TodoList />
    </TodosContext.Provider>
  );
};

export default UploadTodos;
