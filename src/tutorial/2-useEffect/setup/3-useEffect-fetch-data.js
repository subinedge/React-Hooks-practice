import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
    // console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h2>Github Users</h2>
      <ul className="users">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.node_id} />
              <div>
                <h4>{user.login}</h4>
                <a href={user.html_url} target="_blank">
                  Profile
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
