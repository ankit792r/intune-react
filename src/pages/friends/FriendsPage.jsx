import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import socket from '../../services/socketService'
import { getFriends } from '../../redux/friends/friendsReducer'



const FriendsPage = () => {
    const dispatch = useDispatch()
    const [refresh, setrefresh] = useState(false)
    const [username, setusername] = useState("")

    const myId = useSelector(state => state.auth.userId)
    const friends = useSelector(state=> state.friends.friends)

    useEffect(()=>{
        if (refresh) {
            dispatch(getFriends())
        }

        setrefresh(false)
    }, [refresh])

    const handleRequest = (e) => {
        e.preventDefault()
        socket.emit("send-request", { to: username, from: myId  })
        setusername("")
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
            <button onClick={()=>{setrefresh(true)}}>refresh</button>
            <div>
                <h5>frinds</h5>
                {
                    friends?.friends?.map(ele => {
                        return <p>{ele}</p>
                    })
                }
            </div>
            <div>
            <h5>incomming</h5>
                {
                    friends?.incomming?.map(ele => {
                        return <p>{ele}</p>
                    })
                }
            </div>
            <div>
            <h5>outgoing </h5>
                {
                    friends?.outgoing?.map(ele => {
                        return <p>{ele}</p>
                    })
                }
            </div>
        </div>
    )
}

export default FriendsPage