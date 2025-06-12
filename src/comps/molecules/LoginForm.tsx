import EmailInputField from '../atoms/EmailInputField'
import PasswordInputField from '../atoms/PasswordInputField'
import AuthSubmitButton from '../atoms/auth/AuthSubmitButton'
import { useState, type FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { login } from '../../state/features/auth/authActions'
import { useNavigate } from 'react-router-dom'

type Props = {}

const LoginForm = (props: Props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const error = useAppSelector(state => state.authReducer.error.login)
    const loading = useAppSelector(state => state.authReducer.loading.login)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        dispatch(login({ email, password })).unwrap()
            .then(() => {navigate("/")})
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6" id="login-form">
            {error && <p className='p-4 text-gray-900 rounded-lg border border-red-500 bg-red-400/60'>{error}</p>}
            <div className="space-y-4">
                <EmailInputField email={email} onEmailChange={setEmail} />
                <PasswordInputField password={password} onPasswordChange={setPassword} />
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
            <AuthSubmitButton disable={loading} />
        </form>
    )
}

export default LoginForm