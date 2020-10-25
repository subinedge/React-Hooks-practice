import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarsons'
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true)
  const [error, isError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        } else {
          setLoading(false)
          isError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((data) => {
        setUser(data.login)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h1>No user found...</h1>
  }
  return <h2>{user}</h2>
}

export default MultipleReturns
