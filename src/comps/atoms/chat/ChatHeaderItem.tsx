import { ChevronRight } from 'lucide-react'

type Props = {}

const ChatHeaderItem = (props: Props) => {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
                <span className="font-semibold text-gray-900">Chat Name</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
                <ChevronRight />
            </button>
        </div>
    )
}

export default ChatHeaderItem