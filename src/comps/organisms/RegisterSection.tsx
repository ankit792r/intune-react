import AuthLogo from '../atoms/auth/AuthLogo'
import RegisterForm from '../molecules/RegisterForm'

type Props = {
  isLogin: boolean,
  onLoginChange(isLogin: boolean): void
}

const RegisterSection = (props: Props) => {
  return (
    <div className="max-w-md w-full space-y-8">
      <AuthLogo isLogin={props.isLogin} onLoginChange={props.onLoginChange} />
      <RegisterForm onLoginChange={props.onLoginChange} />
    </div>
  )
}

export default RegisterSection