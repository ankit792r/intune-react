import React from 'react'

type Props = {
    password: string,
    onPasswordChange(password: string): void,
    passwordError?: string
}

const PasswordInputField = ({ password, onPasswordChange, passwordError }: Props) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 relative">
                <input value={password} onChange={(e) => { onPasswordChange(e.target.value) }} id="login-password" name="password" type="password" required
                    className="block w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                    placeholder="Enter your password" />
                {/* <button type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                        </path>
                    </svg>
                </button> */}
            </div>
            {passwordError && <p className="mt-1 text-sm text-red-600 hidden" id="login-password-error">{passwordError}</p>}
        </div>
    )
}

export default PasswordInputField