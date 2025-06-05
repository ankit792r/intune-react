import React from 'react'
import SideSearchBar from '../atoms/SideSearchBar'
import FriendList from '../molecules/FriendList'

type Props = {}

const FriendsListSection = (props: Props) => {
  return (
    <div className="flex-1 flex flex-col bg-slate-100">
      <div className='p-8 max-w-4xl'>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Type friends</h2>
          <p className="text-gray-600">Manage your friends list</p>
        </div>
        <FriendList />
      </div>
    </div>
  )
}

export default FriendsListSection