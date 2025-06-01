import React from 'react'

type Props = {}

const ChatItem = (props: Props) => {
    console.log(props)
    return (
        <div className="px-4 py-3 bg-teal-50 border-l-4 border-teal-500 flex items-center space-x-3 cursor-pointer">
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=40&h=40&fit=crop&crop=center"
                    alt="Real estate deals" className="w-10 h-10 rounded-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900 truncate">Real estate deals</h4>
                    <span className="text-xs text-gray-500">11:15</span>
                </div>
                <p className="text-sm text-gray-600 truncate">typing...</p>
            </div>
        </div>
    )
}

export default ChatItem;