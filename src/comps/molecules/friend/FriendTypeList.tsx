


import React from 'react'
import type { IFriendType } from '../../atoms/friend/FriendTypeItem'
import FriendTypeItem from '../../atoms/friend/FriendTypeItem'

const friendTypes: IFriendType[] = [
    {
        name: "Friends",
        description: "your casual friends",
        link: ""
    },
    {
        name: "Requests",
        description: "See your friend requests",
        link: "requests"
    },
]

type Props = {}

const FriendTypeList = (props: Props) => {
    return (
        <div className="flex flex-col space-y-2 px-4">
            {friendTypes.map((friendType: IFriendType) => <FriendTypeItem friendType={friendType} />)}
        </div>
    )
}

export default FriendTypeList