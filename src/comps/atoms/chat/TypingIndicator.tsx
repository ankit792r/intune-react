import React from 'react'

type Props = {}

const TypingIndicator = (props: Props) => {
    return (
        <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ "animationDelay": "0.1s" }}>
                </div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ "animationDelay": "0.2s" }}>
                </div>
            </div>
            <span>Robert is typing</span>
        </div>
    )
}

export default TypingIndicator