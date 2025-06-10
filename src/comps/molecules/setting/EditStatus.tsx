import React from 'react'

type Props = {}

const EditStatus = (props: Props) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Status</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Online</span>
                    </div>
                    <input type="radio" name="status" className="text-teal-500" checked />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-700">Away</span>
                    </div>
                    <input type="radio" name="status" className="text-teal-500" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Do Not Disturb</span>
                    </div>
                    <input type="radio" name="status" className="text-teal-500" />
                </div>
            </div>
        </div>
    )
}

export default EditStatus