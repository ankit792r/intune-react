import React from 'react'

type Props = {}

const NotificationsEditSection = (props: Props) => {
    return (
        <div id="notifications-section" className="flex-1 overflow-y-auto">
            <div className="p-8 max-w-4xl">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Notification Settings</h2>
                    <p className="text-gray-600">Choose what notifications you want to receive</p>
                </div>
            </div>
        </div>
    )
}

export default NotificationsEditSection