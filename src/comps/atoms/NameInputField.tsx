import React from 'react'

type Props = {
    value: string,
    onValueChange(value: string): void,
    fieldError?: string,
    fieldName?: string
}

const NameInputField = ({ fieldName, value, onValueChange, fieldError }: Props) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{fieldName}</label>
            <input value={value} onChange={(e) => { onValueChange(e.target.value) }} id="register-username" name="username" type="text" required
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                placeholder="Choose a username" />
            <p className="mt-1 text-sm text-red-600 hidden" id="register-username-error"></p>
        </div>
    )
}

export default NameInputField