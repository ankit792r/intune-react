import React from 'react'

type Props = {}

const ProfileInfo = (props: Props) => {
    return (
        <div className="text-center mb-6">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=80&fit=crop&crop=center"
                alt="Real estate" className="w-40 h-40 rounded-full mx-auto mb-3 object-cover" />
            <h4 className="font-semibold text-gray-900">Name of chat</h4>
            <p className="text-sm text-gray-500">Username</p>
        </div>
    )
}

export default ProfileInfo