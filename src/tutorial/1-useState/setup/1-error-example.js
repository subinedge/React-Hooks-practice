import React, { useState } from 'react'

const ErrorExample = () => {
  const [title, setTitle] = useState('Tutorial')
  const handleClick = () => {
    setTitle('You are changing the state')
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button onClick={handleClick} className="btn">
        Click this button
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
