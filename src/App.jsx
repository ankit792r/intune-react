import React, { useEffect, useRef } from 'react'
import { RouterProvider } from "react-router-dom";
import router from './router.jsx';
import socket from './services/socketService.js';
import { useDispatch } from 'react-redux';
import { canceledIncomingRequest, incomingRequest } from './redux/friends/friendsSlice.jsx';


const App = () => {
    const dispatch = useDispatch()
    const temp = useRef(false)

    const onIncomingRequest = (data) => {
        dispatch(incomingRequest(data))
    }

    const onCancelRequest = (data) => {
        dispatch(canceledIncomingRequest(data))
    }


    useEffect(() => {
        if (temp.current === false) {
            socket.on("incoming-request", onIncomingRequest)
            socket.on("canceled-incoming-request", onCancelRequest)
        }
        return () => { socket.offAny(); temp.current = true }
    }, [])

    return (
        <RouterProvider router={router} />
    )
}

export default App