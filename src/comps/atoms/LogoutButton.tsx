import { LogOut } from 'lucide-react'
import React from 'react'

type Props = {}

const LogoutButton = (props: Props) => {
    return (
        <button
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut />
            <span className="font-medium">Log Out</span>
        </button>
    )
}

export default LogoutButton