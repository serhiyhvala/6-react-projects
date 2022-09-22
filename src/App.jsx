import React from 'react'
import './index.scss'
import { Success } from './components/Success'
import { Users } from './components/Users'
import { useState } from 'react'
import { useEffect } from 'react'

// Тут список пользователей: https://reqres.in/api/users

const App = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [invites, setInvites] = useState([])
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data)
      })
      .catch(err => {
        console.warn(err)
        alert('Error')
      })
      .finally(() => setIsLoading(false))
  }, [])

  const onChangeSearchValue = e => {
    setSearchValue(e.target.value)
  }

  const onClickInvite = id => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  const onClickSendInvites = () => {
    setSuccess(!success)
  }

  return (
    <div className="App">
      {success ? (
        <Success setSuccess={setSuccess} success={success} count={invites.length}/>
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  )
}

export default App
