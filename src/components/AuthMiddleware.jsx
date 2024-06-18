import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AuthMiddleware = ({ children }) => {
    const navigate = useNavigate()
    const authenticated = useSelector(state => state.user.authenticated)
    const status = useSelector(state => state.user.status)

    useEffect(()=>{
        if (!authenticated) {
            navigate("/auth")
        }
    }, [status, authenticated])

    return children
}

export default AuthMiddleware