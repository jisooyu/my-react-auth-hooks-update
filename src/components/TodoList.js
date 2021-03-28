import React, { useContext } from 'react'
import TodosContext from '../context/todos-context'
import Todo from './Todo'

const TodoList = () => {
    const { todos } = useContext(TodosContext);
    return (
      <div>
        <div className="content-container">
          <div className="header">
            <div className="header__content">
              <h3 className="header__front">Todo List</h3>
            </div>
          </div>
        </div>
        {todos.map((todo) => (
          <div key={todo.title}>
            <Todo todo={todo} />
          </div>
        ))}
      </div>
    );
}

export default TodoList
