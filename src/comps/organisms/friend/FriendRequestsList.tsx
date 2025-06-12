import { useEffect } from 'react'
import FriendItem from '../../atoms/friend/FriendItem'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { getFriendsRequestList } from '../../../state/features/friends/friendsAction'

type Props = {}

const FriendRequestsList = (props: Props) => {
    const dispatch = useAppDispatch()
    const loading = useAppSelector(state=> state.friendsReducer.loading.list)
    const error = useAppSelector(state => state.friendsReducer.error.list)
    const friendRequests = useAppSelector(state => state.friendsReducer.requests)

    useEffect(()=> {
        dispatch(getFriendsRequestList())
    }, [dispatch])

    return (
        <div className="flex-1 flex flex-col bg-slate-100">
            <div className='p-8 max-w-4xl'>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Your friend request</h2>
                    <p className="text-gray-600">Manage your friends requests list</p>
                </div>
                <div className="space-y-1">
                    {friendRequests.map((request) => <FriendItem friend={request} />)}
                </div>
            </div>
        </div>
    )
}

export default FriendRequestsList