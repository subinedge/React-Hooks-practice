import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    setValue(value + 1)
  }
  useEffect(() => {
    console.log('useffect running...')
    if (value > 0) {
      document.title = `New Messages (${value})`
    }

    return () => {}
  })
  console.log('rendering...')
  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
    </>
  )
}

export default UseEffectBasics
