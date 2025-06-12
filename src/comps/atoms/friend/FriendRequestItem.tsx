import React, { useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { deleteFriendRequest, updateFriendStatus } from '../../../state/features/friends/friendsAction'

type Props = {
    request: FriendRequest
}

const FriendRequestItem = (props: Props) => {
    const dispatch = useAppDispatch()
    const userId = useAppSelector(state => state.userReducer.user?.id)
    const isSentByMe = useMemo(() => props.request.initiator.id == userId, [userId, props.request])
    const request = useMemo(() => isSentByMe ? props.request.acceptor : props.request.initiator, [isSentByMe, props])

    const deleteLoading = useAppSelector(state => state.friendsReducer.loading.delete)
    const acceptLoading = useAppSelector(state => state.friendsReducer.loading.accept)

    const deleteError = useAppSelector(state => state.friendsReducer.error.delete)
    const acceptError = useAppSelector(state => state.friendsReducer.error.accept)

    const handleDeleteReq = () => {
        // reset errors
        dispatch(deleteFriendRequest({ requestId: props.request.id }))
    }

    const handleAcceptReq = () => {
        dispatch(updateFriendStatus({ friendId: props.request.id, status: "CONNECTED" }))
    }

    return (
        <div className=" p-3 hover:bg-gray-50 rounded-lg cursor-pointer hover:border-teal-500">
            {acceptError && <p className="p-2 mb-2">{acceptError}</p>}
            {deleteError && <p className="p-2 mb-2">{deleteError}</p>}
            <div className="flex items-center space-x-3">
                <div
                    className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">SJ</span>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">{request.name}</div>
                    <div className="text-xs text-gray-500 truncate">{request.username}</div>
                </div>
                {
                    isSentByMe
                        ? <button onClick={handleDeleteReq} disabled={deleteLoading} className="p-2 bg-gray-500 text-white rounded-lg">Cancel</button>
                        : <div className="flex space-x-2">
                            <button onClick={handleAcceptReq} disabled={acceptLoading} className="p-2 bg-teal-500 text-white rounded-lg">Accept</button>
                            <button onClick={handleDeleteReq} disabled={deleteLoading} className="p-2 bg-gray-500 text-white rounded-lg">Reject</button>
                        </div>
                }

            </div>
        </div>
    )
}


export default FriendRequestItem