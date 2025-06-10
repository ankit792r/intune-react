import AuthLogo from '../atoms/auth/AuthLogo'
import LoginForm from '../molecules/LoginForm'

type Props = {
  isLogin: boolean,
  onLoginChange(isLogin: boolean): void
}

const LoginSection = (props: Props) => {
  return (
    <div className="max-w-md w-full space-y-8">
        <AuthLogo isLogin={props.isLogin} onLoginChange={props.onLoginChange} />
        <LoginForm />
    </div>
  )
}

export default LoginSection