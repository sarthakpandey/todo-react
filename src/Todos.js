import React from 'react';

const Todos = ({todos, deleteTodo})=>{

    const TodoList = todos.length ? (
        todos.map(todo=>{
            return(
                <div className = "collection-item" key = {todo.id}>
                    <span onClick = {()=>deleteTodo(todo.id)}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className = "center">You have no todos fam</p>
    )

    return(
        <div className = "todos collection">
            {TodoList}
        </div>
    )
}

export default Todos;