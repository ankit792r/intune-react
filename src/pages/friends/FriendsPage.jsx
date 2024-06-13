import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const FriendsPage = () => {
    const [username, setusername] = useState("")
    const friendList = useSelector(state => state.account.friendList)

    const handleRequest = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <Link to="/home">Home</Link>
            <h1>friends</h1>
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

export default FriendsPage