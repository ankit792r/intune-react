import React, { useEffect } from 'react'
import FriendItem from '../../atoms/friend/FriendItem'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { getFriendsList } from '../../../state/features/friends/friendsAction'

type Props = {
  friendType?: string
}

const FriendList = (props: Props) => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(state => state.friendsReducer.loading.list)
  const error = useAppSelector(state => state.friendsReducer.error.list)
  const friends = useAppSelector(state => state.friendsReducer.friends)

  useEffect(()=> {
    dispatch(getFriendsList())
  }, [])

  return (
    <div className="space-y-1">
      {friends.map((friend) => <FriendItem friend={friend} />)}
    </div>
  )
}

export default FriendList