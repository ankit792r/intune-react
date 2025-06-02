import { useState } from 'react'
import LoginSection from '../organisms/LoginSection'
import RegisterSection from '../organisms/RegisterSection'

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    return (
        <>
            {
                isLogin
                    ? <LoginSection isLogin={isLogin} onLoginChange={setIsLogin} />
                    : <RegisterSection isLogin={isLogin} onLoginChange={setIsLogin} />
            }
        </>
    )
}

export default AuthPage