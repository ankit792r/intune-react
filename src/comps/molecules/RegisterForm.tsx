import NameInputField from '../atoms/NameInputField'
import EmailInputField from '../atoms/EmailInputField'
import PasswordInputField from '../atoms/PasswordInputField'
import AuthSubmitButton from '../atoms/auth/AuthSubmitButton'
import { useState, type FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { register } from '../../state/features/auth/authActions'

type Props = {
    onLoginChange(val: boolean): void
}


const RegisterForm = (props: Props) => {
    const dispatch = useAppDispatch()
    const error = useAppSelector(state => state.authSlice.error.register)
    const loading = useAppSelector(state => state.authSlice.loading.register)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(register({name, email, username, password}))
            .unwrap().then(()=> {props.onLoginChange(true)})
    }


    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {error && <p className='p-4 text-gray-900 rounded-lg border border-red-500 bg-red-400/60'>{error}</p>}
            <div className="space-y-4">
                <NameInputField fieldName='Name' onValueChange={setName} value={name} />
                <EmailInputField email={email} onEmailChange={setEmail} />
                <NameInputField fieldName="Username" onValueChange={setUsername} value={username} />
                <PasswordInputField password={password} onPasswordChange={setPassword} />
            </div>
            <div className="flex items-center">
                <input id="terms" name="terms" type="checkbox" required
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label className="ml-2 block text-sm text-gray-700">
                    I agree to the <a href="#" className="text-primary hover:text-primary-dark">Terms and Conditions</a>
                </label>
            </div>
            <AuthSubmitButton disable={loading} />
        </form>
    )
}

export default RegisterForm