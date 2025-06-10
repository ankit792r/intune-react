import React from 'react'
import FriendItem from '../../atoms/friend/FriendItem'

type Props = {
  friendType?: string
}

const FriendList = (props: Props) => {
  if (props.friendType) {
    return (
      <div className="space-y-1">
        <FriendItem />
      </div>
    )
  }
  return (
    <div className="space-y-1">
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
    </div>
  )
}

export default FriendList