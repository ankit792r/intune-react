import { Outlet, useNavigate } from "react-router-dom"
import { useAppSelector } from "../state/hooks"
import { useEffect } from "react"

const AuthLayout = () => {
  const navigate = useNavigate()
  const userLoggedIn = useAppSelector(state=> state.userReducer.isLoggedIn)

  useEffect(()=> {
    if (userLoggedIn) navigate("/")
  }, [userLoggedIn])

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Outlet />
    </div>
  )
}

export default AuthLayout