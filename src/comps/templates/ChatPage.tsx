import ChatSideBar from '../organisms/chat/ChatSideBar'
import ChatSection from '../organisms/chat/ChatSection'
import ProfileSection from '../organisms/setting/ProfileSection'
import { useState } from 'react'

type Props = {}

const ChatPage = (props: Props) => {
    const [profileSectionOpen, setProfileSectionOpen] = useState(false)
    return (
        <>
            <div className="hidden md:flex w-80 bg-white border-r border-gray-200 flex-col">
                <ChatSideBar />
            </div>
            <div className="flex-1 flex flex-col bg-white ">
                <ChatSection />
            </div>
            {profileSectionOpen &&
                <div className="hidden xl:flex w-80 bg-white border-l border-gray-200">
                    <ProfileSection />
                </div>
            }
        </>
    )
}

export default ChatPage