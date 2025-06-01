import React from 'react'
import ProfileHeader from '../molecules/ProfileHeader'
import ProfileInfo from '../molecules/ProfileInfo'

type Props = {}

const ProfileSection = (props: Props) => {
    return (
        <div className="hidden xl:flex w-80 bg-white border-l border-gray-200">
            <div className="p-6 w-full">
                <ProfileHeader />
                <ProfileInfo />
            </div>
        </div>
    )
}

export default ProfileSection