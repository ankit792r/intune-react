import React from 'react'
import AuthLogo from '../atoms/AuthLogo'
import RegisterForm from '../molecules/RegisterForm'

type Props = {}

const RegisterSection = (props: Props) => {
  return (
    <div className="max-w-md w-full space-y-8">
        <AuthLogo />
        <RegisterForm />
    </div>
  )
}

export default RegisterSection