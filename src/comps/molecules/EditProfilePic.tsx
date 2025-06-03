import React from 'react'

type Props = {}

const EditProfilePic = (props: Props) => {
    return (
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Picture</h3>
            <div className="flex items-center space-x-6">
                <div
                    className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">JD</span>
                </div>
                <div className="flex space-x-3">
                    <button
                        className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                        <i className="fas fa-upload mr-2"></i>Upload New
                    </button>
                    <button
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Remove
                    </button>
                </div>
            </div>
        </div>

    )
}

export default EditProfilePic