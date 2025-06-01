import AuthLogo from '../atoms/AuthLogo'
import AuthSubmitButton from '../atoms/AuthSubmitButton'
import LoginForm from '../molecules/LoginForm'

type Props = {}

const LoginSection = (props: Props) => {
  return (
    <div className="max-w-md w-full space-y-8">
        <AuthLogo />
        <LoginForm />
    </div>
  )
}

export default LoginSection