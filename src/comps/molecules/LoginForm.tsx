import EmailInputField from '../atoms/EmailInputField'
import PasswordInputField from '../atoms/PasswordInputField'
import AuthSubmitButton from '../atoms/AuthSubmitButton'

type Props = {}

const LoginForm = (props: Props) => {
    return (
        <form className="mt-8 space-y-6" id="login-form">
            <div className="space-y-4">
                <EmailInputField />
                <PasswordInputField />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                    <label className="ml-2 block text-sm text-gray-700">Remember me</label>
                </div>
                <div className="text-sm">
                    <a href="#" className="font-medium text-primary hover:text-primary-dark">Forgot your password?</a>
                </div>
            </div>
            <AuthSubmitButton />
        </form>
    )
}

export default LoginForm