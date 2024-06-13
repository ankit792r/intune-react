import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthMiddleware = ({ children }) => {
    const authenticated = useSelector(state => state.auth.authenticated)
    if (authenticated) {
        return children
    } else {
        return <Navigate to="/auth"/>
    }
}

export default AuthMiddleware