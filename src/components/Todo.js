import React, {useContext} from 'react'
import TodosContext from '../context/todos-context'

const Todo = ({ todo, editTodo }) => {
    const {dispatch} = useContext(TodosContext)
    return (
        <div className="content-container">
            <h3>Title:{todo.title}</h3>
            <p>Body:{todo.body}</p>
            <p>Person-in-charge:{todo.inCharge}</p>
            <p>Deadline:{todo.deadline}</p>
            <button className='button' onClick={() => {
                dispatch({
                    type: 'REMOVE_TODO',
                    title: todo.title
                })
            }}>Remove</button>
            <button className='button' onClick={() => editTodo({
                title: todo.title,
                body: todo.body,
                inCharge: todo.inCharge,
                deadline: todo.deadline
            }) }>Edit </button>
        </div>
    )
}

export default Todo
