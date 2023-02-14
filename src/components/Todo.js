import React from 'react'

const Todo = ({todo, time}) => {
    
    return (
    <div className='todo-container'>
        <h3>Feladat: {todo}</h3>
        <span>Szükséges idő: {time}</span>
    </div>
  )
}

export default Todo