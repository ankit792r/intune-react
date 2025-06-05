import React from 'react'
import { Link } from 'react-router-dom'

export interface IFriendType {
    name: string,
    description?: string,
    link: string
}

type Props = {
    friendType: IFriendType
}

const FriendTypeItem = (props: Props) => {
    return (<Link to={props.friendType.link}>
        <div className="bg-gray-100 rounded-lg p-3">
            <div className="font-medium text-gray-800">{props.friendType.name}</div>
            <div className="text-xs text-gray-500">{props.friendType.description}</div>
        </div>
    </Link>
    )
}

export default FriendTypeItem