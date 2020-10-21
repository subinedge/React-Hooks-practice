import React, { useState } from 'react'

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const resetCounter = () => {
    setCounter(0)
  }

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      setCounter(0)
    }
  }

  const lateIncreaseCounter = () => {
    setTimeout(() => {
      setCounter((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <h2>Regular Counter</h2>
      <h1>{counter}</h1>
      <button className="btn" onClick={decreaseCounter}>
        Decrease
      </button>
      <button className="btn" onClick={resetCounter}>
        Reset
      </button>
      <button className="btn" onClick={increaseCounter}>
        Increase
      </button>

      <section style={{ margin: '4rem 0' }}>
        <h2>More Complex Counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={lateIncreaseCounter}>
          Increase Later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
