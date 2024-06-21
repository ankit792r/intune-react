import React, { useEffect } from 'react'
import { RouterProvider } from "react-router-dom";
import router from './router.jsx';
import socket from './services/socketService.js';
import { useDispatch, useSelector } from 'react-redux';
import { canceledIncomingRequest, insertMessage, incomingRequest, requestAccepted, requestRejected } from './redux/user/userSlice';


const App = () => {
    const dispatch = useDispatch();

    const authenticated = useSelector(state => state.user.authenticated)

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

    const onIncomingMessage = (data) => {
        dispatch(insertMessage(data))
    }

    useEffect(() => {
        if (authenticated) {
            const token = localStorage.getItem("token")
            socket.auth = { token }
            socket.connect()

            socket.on("incoming-request", onIncomingRequest)
            socket.on("canceled-incoming-request", onCancelRequest)
            socket.on("request-rejected", onRequestRejected)
            socket.on("request-accepted", onRequestAccpted)
            socket.on("incoming-message", onIncomingMessage)
        }

        return () => { socket.offAny(); }
    }, [authenticated])

    return (
        <RouterProvider
            fallbackElement={<h1>Not found</h1>}
            router={router}
            future={<h2>Future</h2>} />
    )
}

export default App