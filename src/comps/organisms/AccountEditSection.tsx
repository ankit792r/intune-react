import React from 'react'

type Props = {}

const AccountEditSection = (props: Props) => {
    return (
        <div id="account-section" className="flex-1 overflow-y-auto">
            <div className="p-8 max-w-4xl">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Settings</h2>
                    <p className="text-gray-600">Manage your account security and login preferences</p>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Password</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                            <input type="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                            <input type="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                            <input type="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                            Update Password
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Two-Factor Authentication</h3>
                            <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                                <div
                                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500">
                                </div>
                        </label>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Sessions</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-desktop text-gray-500"></i>
                                <div>
                                    <div className="font-medium text-gray-900">Desktop - Chrome</div>
                                    <div className="text-sm text-gray-600">Mumbai, India • Active now</div>
                                </div>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Current</span>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-mobile-alt text-gray-500"></i>
                                <div>
                                    <div className="font-medium text-gray-900">iPhone 13</div>
                                    <div className="text-sm text-gray-600">Mumbai, India • 2 hours ago</div>
                                </div>
                            </div>
                            <button className="text-red-600 hover:text-red-700 text-sm">Revoke</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountEditSection