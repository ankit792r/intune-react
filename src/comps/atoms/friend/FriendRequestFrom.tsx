import React from 'react'

type Props = {}

const FriendRequestFrom = (props: Props) => {
    return (
        <form className="flex space-x-2 items-center">
            <input required type="text" placeholder="Username"
                className="w-full pl-4 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <button className="p-2 bg-teal-500 text-white rounded-lg">Send</button>
        </form>
    )
}

export default FriendRequestFrom