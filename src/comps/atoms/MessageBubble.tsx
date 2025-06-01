import React from 'react'

type Props = {}

const MessageBubble = (props: Props) => {
    return (
        <div className="flex items-start space-x-3">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="Evan" className="w-8 h-8 rounded-full object-cover" />
            <div className="max-w-xs md:max-w-md">
                <div className="bg-white rounded-xl px-4 py-2">
                    <p className="text-sm text-gray-900">Robert, don't be like that and say something more 😊😊
                    </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Evan Scott, 11:34 AM</p>
            </div>
        </div>
    )
}

export default MessageBubble