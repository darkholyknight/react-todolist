import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodos, handleEditTodos, index} = props

  return (
    <div>
      <li className='todoItem'>
          <div className='actionsContainer'>
            {children}
            <button onClick={() => {handleEditTodos(index)}}>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button onClick={() => {handleDeleteTodos(index)}}>
              <i className="fa-solid fa-trash" ></i>
            </button>
          </div>
      </li>
    </div>
  )
}
