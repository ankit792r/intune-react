import { SendIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const SendButton = (props: Props) => {
    return (
        <button className="p-2.5 bg-teal-500 hover:bg-teal-600 text-white rounded-xl">
            <SendIcon />
        </button>
    )
}

export default SendButton