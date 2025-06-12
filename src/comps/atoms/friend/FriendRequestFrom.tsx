import React, { useState, type FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { sendFriendRequest } from '../../../state/features/friends/friendsAction'

type Props = {}

const FriendRequestFrom = (props: Props) => {
    const [username, setUsername] = useState("")
    const dispatch = useAppDispatch()
    const loading = useAppSelector(state => state.friendsReducer.loading.send)
    const error = useAppSelector(state => state.friendsReducer.error.send)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        // dispatch() reset erros
        const res = await dispatch(sendFriendRequest({ username })).unwrap()
        if (res.success) setUsername("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2 items-center">
            {error && <p className="p-2 text-red-400">{error}</p>}
            <input onChange={(e) => { setUsername(e.target.value) }} required type="text" placeholder="Username"
                className="w-full pl-4 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <button disabled={loading} className="p-2 bg-teal-500 text-white rounded-lg">Send</button>
        </form>
    )
}

export default FriendRequestFrom