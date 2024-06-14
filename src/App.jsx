import React, { useEffect, useRef } from 'react'
import { RouterProvider } from "react-router-dom";
import router from './router.jsx';
import socket from './services/socketService.js';
import { useDispatch } from 'react-redux';
import { canceledIncomingRequest, incomingRequest, requestAccepted, requestRejected } from './redux/friends/friendsSlice.jsx';


const App = () => {
    const dispatch = useDispatch()
    const temp = useRef(false)

    const onIncomingRequest = (data) => {
        dispatch(incomingRequest(data))
    }

    const onCancelRequest = (data) => {
        dispatch(canceledIncomingRequest(data))
    }

    const onRequestRejected = (data) => {
        dispatch(requestRejected(data))
    }

    const onRequestAccpted = (data) => {
        dispatch(requestAccepted(data))
    }

    useEffect(() => {
        if (temp.current === false) {
            socket.on("incoming-request", onIncomingRequest)
            socket.on("canceled-incoming-request", onCancelRequest)
            socket.on("request-rejected", onRequestRejected)
            socket.on("request-accepted", onRequestAccpted)
        }
        return () => { socket.offAny(); temp.current = true }
    }, [])

    return (
        <RouterProvider router={router} />
    )
}

export default App