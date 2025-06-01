
type Props = {}

const MessageInput = (props: Props) => {
    return (
        <div className="flex-1 px-2 ">
            <textarea placeholder="Write your message..."
                className="resize-none max-h-24 w-full text-sm focus:outline-none pr-12" />
        </div>
    )
}

export default MessageInput