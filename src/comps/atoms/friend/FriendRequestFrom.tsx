import React, { useState, type FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { sendFriendRequest } from '../../../state/features/friends/friendsAction'
import { useWebSocket } from '../../../context/webSocketContext'

type Props = {}

const FriendRequestFrom = (props: Props) => {
    const { stompClient } = useWebSocket()
    const [username, setUsername] = useState("")
    const dispatch = useAppDispatch()
    const loading = useAppSelector(state => state.friendsReducer.loading.send)
    const error = useAppSelector(state => state.friendsReducer.error.send)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        // dispatch() reset erros
        // dispatch(sendFriendRequest({ username }))
        stompClient?.publish({
            destination: "/app/friend/request",
            body: JSON.stringify({ username })
        })
        setUsername("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            {error && <p className="p-2 text-red-400 ">{error}</p>}
            <div className='flex space-x-3'>
                <input value={username} onChange={(e) => { setUsername(e.target.value) }} required type="text" placeholder="Username"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <button disabled={loading} className="p-2 bg-teal-500 text-white rounded-lg">Send</button>
            </div>
        </form>
    )
}

export default FriendRequestFrom