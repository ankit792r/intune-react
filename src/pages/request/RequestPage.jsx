import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import socket from '../../services/socketService'
import { getFriends } from '../../redux/user/userReducer'
import { cancelSentRequest, rejectRequest, requestAccept, requestSent } from '../../redux/user/userSlice';



const RequestPage = () => {
    const dispatch = useDispatch()
    const [refresh, setrefresh] = useState(false)
    const [username, setusername] = useState("")

    const myId = useSelector(state => state.user.user._id)
    const requests = useSelector(state => state.user.user.requests)

    useEffect(() => {
        if (refresh) {
            dispatch(getFriends())
        }

        setrefresh(false)
    }, [refresh])

    const handleRequest = (e) => {
        e.preventDefault()
        socket.emit("send-request", { to: username, from: myId }, (val) => { dispatch(requestSent(val)) })
        setusername("")
    }

    const handleRequestCancel = (requ) => {
        socket.emit("cancel-request", { requestId: requ._id, toUser: requ.to._id }, (val) => { dispatch(cancelSentRequest(requ)) })
    }

    const handleRequestReject = (requ) => {
        socket.emit("reject-request", { requestId: requ._id, fromUser: requ.from._id }, (val) => { dispatch(rejectRequest(requ)) })
    }

    const handleRequestAccept = (requ) => {
        socket.emit("accept-request", requ, (val) => {
            dispatch(requestAccept(val))
        })
    }

    return (
        <div>
            <Link to="/home">Home</Link>
            <h1>Requests</h1>
            <form onSubmit={handleRequest}>
                <input type="text" placeholder="username" required value={username} onChange={e => { setusername(e.target.value) }} />
                <input type="submit" value="send" />
            </form>
            <br />
            <button onClick={() => { setrefresh(true) }}>refresh</button>
            <br />
            <div>
                {
                    requests.map(ele => {
                        if (ele.to._id == myId) {
                            return <div>
                                <p>{ele.from.name} - {ele.from.username}</p>
                                <button onClick={()=>{handleRequestReject(ele)}}>reject</button> <button onClick={()=>{handleRequestAccept(ele)}}>accept</button>
                            </div>
                        } else {
                            return <div>
                                <p>{ele.to.name} - {ele.to.username} <button onClick={()=>{handleRequestCancel(ele)}}>cancel</button></p>
                            </div>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default RequestPage