import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { updateBasic } from '../../../state/features/user/userActions'
import { resetBasicError } from '../../../state/features/user/userSlice'

type Props = {}

const EditBasicInfo = (props: Props) => {
    const dispatch = useAppDispatch()
    const userReducer = useAppSelector(state => state.userReducer)
    const [newName, setNewName] = useState(userReducer.user?.name as string)
    const [newBio, setNewBio] = useState(userReducer.user?.bio)

    const onSaveClick = () => {
        dispatch(resetBasicError())
        dispatch(updateBasic({ name: newName, bio: newBio }))
    }

    return (
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>

            {userReducer.error.basicUpdate && <p className="text-red-400">{userReducer.error.basicUpdate}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" value={newName}
                        onChange={(e) => { setNewName(e.target.value) }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                    {/* some other updatable field */}
                </div>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea rows={3} placeholder="Tell us about yourself..."
                    onChange={(e) => { setNewBio(e.target.value) }}
                    value={newBio}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"></textarea>
            </div>
            <div className="mt-6">
                <button
                    onClick={onSaveClick}
                    disabled={userReducer.loading.basicUpdate}
                    className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default EditBasicInfo