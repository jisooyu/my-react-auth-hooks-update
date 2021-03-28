import React from 'react'

const Todo = ({todo}) => {
    return (
        <div className="content-container">
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
            <p>{todo.inCharge}</p>
            <p>{todo.deadline}</p>
        </div>
    )
}

export default Todo
