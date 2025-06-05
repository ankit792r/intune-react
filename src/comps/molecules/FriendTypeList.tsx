


import React from 'react'
import type { IFriendType } from '../atoms/FriendTypeItem'
import FriendTypeItem from '../atoms/FriendTypeItem'

const friendTypes: IFriendType[] = [
    {
        name: "friends",
        description: "your casual friends",
        link: "casual"
    },
    {
        name: "close",
        description: "your close friends",
        link: "close"
    },
    {
        name: "best",
        description: "your best friends",
        link: "best"
    }
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