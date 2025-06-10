import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { updateProfile } from '../../../state/features/user/userActions'
import { resetProfileError } from '../../../state/features/user/userSlice'

type Props = {}

const EditProfilePic = (props: Props) => {
    const dispatch = useAppDispatch()
    const userSlice = useAppSelector(state => state.userSlice)
    const [newUserName, setNewUserName] = useState(userSlice.user?.username as string)

    const onSaveClick = () => {
        dispatch(resetProfileError())
        if (newUserName != "")
            dispatch(updateProfile({ username: newUserName }))
    }

    return (
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Details</h3>
            {userSlice.error.profileUpdate && <p className="text-red-400">{userSlice.error.profileUpdate}</p>}
            <div className="flex justify-between items-center space-x-6">
                <div className="">
                    <input type="text" onChange={(e) => setNewUserName(e.target.value)} value={newUserName} placeholder="username"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    <button
                        disabled={userSlice.loading.profileUpdate}
                        onClick={onSaveClick}
                        className="px-4 py-2 mt-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                        { userSlice.loading.profileUpdate ? "Updating" : "Save Changes" }
                    </button>
                </div>
                <div
                    className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">JD</span>
                </div>
            </div>
        </div>

    )
}

export default EditProfilePic