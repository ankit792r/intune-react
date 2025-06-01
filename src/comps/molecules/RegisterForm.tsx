import NameInputField from '../atoms/NameInputField'
import EmailInputField from '../atoms/EmailInputField'
import PasswordInputField from '../atoms/PasswordInputField'
import AuthSubmitButton from '../atoms/AuthSubmitButton'

type Props = {}

const RegisterForm = (props: Props) => {
    return (
        <form className="mt-8 space-y-6">
            <div className="space-y-4">
                <NameInputField />
                <EmailInputField />
                <NameInputField />
                <PasswordInputField />
            </div>
            <div className="flex items-center">
                <input id="terms" name="terms" type="checkbox" required
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label className="ml-2 block text-sm text-gray-700">
                    I agree to the <a href="#" className="text-primary hover:text-primary-dark">Terms and Conditions</a>
                </label>
            </div>
            <AuthSubmitButton />
        </form>
    )
}

export default RegisterForm