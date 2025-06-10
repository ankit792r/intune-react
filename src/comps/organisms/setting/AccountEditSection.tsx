import React from 'react'
import EditEmail from '../../molecules/setting/EditEmail'
import EditPassword from '../../molecules/setting/EditPassword'
import TwoFacAuth from '../../molecules/TwoFacAuth'

type Props = {}

const AccountEditSection = (props: Props) => {
    return (
        <div className="flex-1 bg-slate-100 overflow-y-auto">
            <div className="p-8 max-w-4xl">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Settings</h2>
                    <p className="text-gray-600">Manage your account security and login preferences</p>
                </div>

                <EditEmail />

                <EditPassword />

                <TwoFacAuth />
            </div>
        </div>
    )
}

export default AccountEditSection