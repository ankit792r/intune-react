type Props = {
    email: string,
    onEmailChange(email: string): void,
    emailError?: string
}

const EmailInputField = ({ email, onEmailChange, emailError }: Props) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input value={email} onChange={(e) => { onEmailChange(e.target.value) }} id="login-email" name="email" type="email" required
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                placeholder="Enter your email" />
            {emailError && <p className="mt-1 text-sm text-red-600 hidden" id="login-email-error">{emailError}</p>}
        </div>
    )
}

export default EmailInputField