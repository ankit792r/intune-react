import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const FriendsList = () => {
  const [username, setusername] = useState("")
  const friendList = useSelector(state => state.account.friendList)

  const handleRequest = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h3>friends</h3>
      <form onSubmit={handleRequest}>
        <input type="text" placeholder="username" value={username} onChange={e => { setusername(e.target.value) }} />
        <input type="submit" value="send" />
      </form>
      <br />
      <div>
        {
          friendList?.friends?.map(ele => {
            return <p>{ele}</p>
          })
        }
      </div>
      <div>
        {
          friendList?.incoming?.map(ele => {
            return <p>{ele}</p>
          })
        }
      </div>
      <div>
        {
          friendList?.outgoing?.map(ele => {
            return <p>{ele}</p>
          })
        }
      </div>
    </div>
  )
}

export default FriendsList