import React from 'react'
import SideSearchBar from '../../atoms/SideSearchBar'
import FriendTypeList from '../../molecules/friend/FriendTypeList'
import FriendRequestFrom from '../../atoms/friend/FriendRequestFrom'

type Props = {}

const FriendsSideBar = (props: Props) => {
    return (
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-4">
                <SideSearchBar />
            </div>
            <div className="flex-1">
                <FriendTypeList />
            </div>
            <div className="p-4 border-t border-gray-200">
                <FriendRequestFrom />
            </div>
        </div>
    )
}

export default FriendsSideBar