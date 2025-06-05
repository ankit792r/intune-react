import React from 'react'
import { Outlet } from 'react-router-dom'
import FriendsSideBar from '../organisms/FriendsSideBar'

type Props = {}

const FriendsPage = (props: Props) => {
  return (
    <>
      <div className="hidden md:flex w-80 bg-white border-r border-gray-200 flex-col">
        <FriendsSideBar />
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto ">
        <Outlet />
      </div>
    </>
  )
}

export default FriendsPage