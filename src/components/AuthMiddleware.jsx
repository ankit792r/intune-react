import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const AuthMiddleware = ({ children }) => {
    const navigate = useNavigate()
    const authenticated = useSelector(state => state.auth.authenticated)
    const status = useSelector(state => state.auth.status)

    useEffect(()=>{
        if (!authenticated) {
            navigate("/auth")
        }
    }, [status, authenticated])

    return children
}

export default AuthMiddleware