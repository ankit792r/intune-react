import React from 'react'

type Props = {}

const EditEmail = (props: Props) => {
    return (
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Email</h3>
            <div className="space-y-4">
                <div className="flex items-center gap-4"> {/** change col-span-1 if updating and show otp field */}
                    <input type="email"
                        value="test@email.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    <button
                        className="px-6 py-2 justify-items-end bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                        Edit
                    </button>

                </div>
                <div className="flex items-end justify-between space-x-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">OTP</label>
                        <input type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    </div>
                    <button
                        className="px-6 py-2 justify-items-end bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditEmail