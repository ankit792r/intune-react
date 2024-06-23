import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

    const handleRequest = () => {
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
        <div className='py-5'>
            <div className="row justify-content-center">

                <div className="col-md-7">
                    <div className="">
                        <h1>Requests</h1>
                        <p>checkout your incoming and outgoing requests</p>
                    </div>

                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon2">Username</span>
                        <input type="text" className="form-control" id="inputGroupFile04" aria-describedby="username" aria-label="username"
                            required value={username} onChange={e => { setusername(e.target.value) }} />
                        <button onClick={handleRequest} className="btn btn-primary" type="button" id="username">Send</button>
                    </div>

                    <div className='pt-4'>
                        <ul className="list-group">
                            {
                                requests.map((ele, inx) => {
                                    const cont = (
                                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                                            {
                                                ele.to._id == myId
                                                    ? (<div className='mt-2'>
                                                        <h5>{ele.from.name}</h5>
                                                        <p>{ele.from.username}</p>
                                                    </div>)
                                                    : (
                                                        <div className='mt-2'>
                                                            <h5>{ele.to.name}</h5>
                                                            <p>{ele.to.username}</p>
                                                        </div>
                                                    )
                                            }
                                           
                                            <div>
                                                {
                                                    ele.to._id == myId
                                                        ? (
                                                            <div>
                                                                <button className='btn btn-success' onClick={() => { handleRequestAccept(ele) }}>accept</button>
                                                                <button className='btn btn-warning mx-2' onClick={() => { handleRequestReject(ele) }}>reject</button>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <button className='btn btn-warning' onClick={() => { handleRequestCancel(ele) }}>cancel</button>
                                                            </div>
                                                        )
                                                }
                                            </div>
                                        </li>
                                    )

                                    return cont
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestPage