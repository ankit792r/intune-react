import React from 'react'

type Props = {
    friend: Friend
}

const FriendItem = (props: Props) => {
    return (
        <div className=" p-3 hover:bg-gray-50 rounded-lg cursor-pointer hover:border-teal-500">
            <div className="flex items-center space-x-3">
                <div className="relative">
                    <div
                        className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">SJ</span>
                    </div>
                    <div
                        className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full">
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">Sarah Johnson</div>
                    <div className="text-xs text-gray-500 truncate">Playing Spotify</div>
                </div>
                <div className="text-xs text-gray-400">2m</div>
            </div>
        </div>
    )
}

export default FriendItem