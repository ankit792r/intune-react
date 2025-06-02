import { useState, type FormEvent } from 'react'
import AuthLogo from '../atoms/AuthLogo'
import RegisterForm from '../molecules/RegisterForm'
import { useAppSelector } from '../../state/hooks'

type Props = {
  isLogin: boolean,
  onLoginChange(isLogin: boolean): void
}

const RegisterSection = (props: Props) => {
  return (
    <div className="max-w-md w-full space-y-8">
      <AuthLogo isLogin={props.isLogin} onLoginChange={props.onLoginChange} />
      <RegisterForm />
    </div>
  )
}

export default RegisterSection