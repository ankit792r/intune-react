import EditBasicInfo from "../../molecules/setting/EditBasicInfo"
import EditProfilePic from "../../molecules/setting/EditProfilePic"
import EditStatus from "../../molecules/setting/EditStatus"

type Props = {}

const ProfileEditSection = (props: Props) => {
    return (
        <div className="flex-1 flex flex-col bg-slate-100 overflow-y-auto">
            <div className="p-8 max-w-4xl">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Settings</h2>
                    <p className="text-gray-600">Manage your personal information and profile visibility</p>
                </div>
                <EditProfilePic />
                <EditBasicInfo />
                <EditStatus />
            </div>
        </div>
    )
}

export default ProfileEditSection